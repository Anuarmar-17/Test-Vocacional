import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AREAS, Area } from "@/src/constants/vocacional";

// ─── Area Results Interface ───────────────────────────────────────────────
export interface AreaResult {
  area_id: number;
  puntos: number;
  maximo_posible: number;
  porcentaje_afinidad: number;
}

export interface ResultadosAcumulados {
  estado: string;
  total_preguntas: number;
  preguntas_respondidas: number;
  progreso_porcentaje: number;
  resultados_por_area: Record<string, AreaResult>;
}

export interface VocacionalContextType {
  view: string;
  setView: (view: string) => void;
  userName: string;
  setUserName: (name: string) => void;
  reflections: Record<string, string>;
  setReflections: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  saveReflections: (newReflections: Record<string, string>) => void;
  testAnswers: Record<number, string>;
  setTestAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  saveTestAnswers: (newAnswers: Record<number, string>) => void;
  lifeProject: Record<string, string>;
  setLifeProject: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  saveLifeProject: (newData: Record<string, string>) => void;

  // Accumulated results from DB
  resultadosAcumulados: ResultadosAcumulados | null;

  // Loading state
  isLoadingContext: boolean;
  
  // Computed values
  answeredCount: number;
  reflectionsCount: number;
  profileCompletion: number;
  dynamicAreas: Area[];
}

export const VocacionalContext = createContext<VocacionalContextType | undefined>(undefined);

import { useAuth } from "./AuthContext";
import { getReflections, saveReflections as apiSaveReflections, getTestResults, saveTestResults as apiSaveTestResults, getLifeProject, saveLifeProject as apiSaveLifeProject, getResults, saveResults } from "@/src/lib/api";

const INITIAL_REFLECTIONS: Record<string, string> = {};
const INITIAL_ANSWERS: Record<number, string> = {};
const INITIAL_LIFE_PROJECT: Record<string, string> = {};

const ANSWERS_STORAGE_KEY = 'vocacional_test_answers';

// ─── Area name mapping (preguntas.json area name → resultados_acumulados key) ─
const AREA_NAMES = [
  "Arte y creatividad",
  "Ciencias sociales",
  "Económica, administrativa y financiera",
  "Ciencia y tecnología",
  "Ciencias ecológicas, biológicas y de salud",
];

// Map area name from preguntas.json to the AREAS constant id
const AREA_NAME_TO_ID: Record<string, string> = {
  "Arte y creatividad": "arte",
  "Ciencias sociales": "social",
  "Económica, administrativa y financiera": "economica",
  "Ciencia y tecnología": "tecnologia",
  "Ciencias ecológicas, biológicas y de salud": "salud",
};

const AREA_NAME_TO_AREA_ID: Record<string, number> = {
  "Arte y creatividad": 1,
  "Ciencias sociales": 2,
  "Económica, administrativa y financiera": 3,
  "Ciencia y tecnología": 4,
  "Ciencias ecológicas, biológicas y de salud": 5,
};

function buildEmptyResultados(): ResultadosAcumulados {
  const resultados_por_area: Record<string, AreaResult> = {};
  AREA_NAMES.forEach((name) => {
    resultados_por_area[name] = {
      area_id: AREA_NAME_TO_AREA_ID[name],
      puntos: 0,
      maximo_posible: 16,
      porcentaje_afinidad: 0,
    };
  });
  return {
    estado: "INICIADO",
    total_preguntas: 80,
    preguntas_respondidas: 0,
    progreso_porcentaje: 0,
    resultados_por_area,
  };
}

export function VocacionalProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  
  const [view, setView] = useState<string>("inicio");
  const [userName, setUserName] = useState<string>("Estudiante");
  const [isLoadingContext, setIsLoadingContext] = useState(true);

  const [reflections, setReflections] = useState<Record<string, string>>(INITIAL_REFLECTIONS);
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>(INITIAL_ANSWERS);
  const [lifeProject, setLifeProject] = useState<Record<string, string>>(INITIAL_LIFE_PROJECT);
  const [resultadosAcumulados, setResultadosAcumulados] = useState<ResultadosAcumulados | null>(null);
  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [restoredFromStorage, setRestoredFromStorage] = useState(false);

  // Restore testAnswers from localStorage ONLY when not authenticated
  // (anonymous fallback). Authenticated users always load from API.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isAuthenticated) {
      setRestoredFromStorage(true);
      return;
    }
    try {
      const saved = localStorage.getItem(ANSWERS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Object.keys(parsed).length > 0) {
          setTestAnswers(parsed);
        }
      }
    } catch (e) {
      console.error('Error restoring testAnswers from localStorage', e);
    } finally {
      setRestoredFromStorage(true);
    }
  }, [isAuthenticated]);

  // Persist testAnswers to localStorage (anonymous fallback + authenticated cache)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (Object.keys(testAnswers).length === 0) return;
    try {
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(testAnswers));
    } catch (e) {
      console.error('Error saving testAnswers to localStorage', e);
    }
  }, [testAnswers]);

  // Load preguntas.json once to know the area of each question
  useEffect(() => {
    fetch("/preguntas.json")
      .then((res) => res.json())
      .then((data) => setPreguntas(data))
      .catch((err) => console.error("Error loading preguntas.json:", err));
  }, []);

  useEffect(() => {
    if (user?.nombre) {
      setUserName(user.nombre);
    }
  }, [user]);

  useEffect(() => {
    async function loadData() {
      if (!isAuthenticated || !user) return;
      setIsLoadingContext(true);
      try {
        const refs = await getReflections();
        if (refs && Array.isArray(refs)) {
          const formattedRefs: Record<string, string> = {};
          refs.forEach((r: any) => {
            formattedRefs[r.orden.toString()] = r.respuesta;
          });
          setReflections(formattedRefs);
        }

        const results = await getResults();
        if (results && results.datos) {
          // datos contains { respuestas: {...}, resultados_por_area: {...} }
          if (results.datos.respuestas && Object.keys(results.datos.respuestas).length > 0) {
            // Convert string keys back to number keys
            const parsed: Record<number, string> = {};
            Object.entries(results.datos.respuestas).forEach(([k, v]) => {
              parsed[Number(k)] = v as string;
            });
            setTestAnswers(parsed);
          } else {
            // No saved answers for this user — clear any stale localStorage
            if (typeof window !== 'undefined') {
              localStorage.removeItem(ANSWERS_STORAGE_KEY);
            }
            setTestAnswers({});
          }
          if (results.datos.resultados_por_area) {
            setResultadosAcumulados({
              estado: results.estado || "INICIADO",
              total_preguntas: results.total_preguntas || 80,
              preguntas_respondidas: results.preguntas_respondidas || 0,
              progreso_porcentaje: results.progreso_porcentaje || 0,
              resultados_por_area: results.datos.resultados_por_area,
            });
          }
        } else {
          // No results at all for this user — clear stale localStorage
          if (typeof window !== 'undefined') {
            localStorage.removeItem(ANSWERS_STORAGE_KEY);
          }
          setTestAnswers({});
        }

        const lp = await getLifeProject();
        if (lp) {
          setLifeProject({
            vision: lp.vision || "",
            corto: lp.meta_corto_plazo || "",
            mediano: lp.meta_mediano_plazo || "",
            largo: lp.meta_largo_plazo || "",
            compromisos: lp.compromisos || "",
            "acad-0": lp.tiene_claro_carrera === true ? "Sí" : (lp.tiene_claro_carrera === false ? "No" : ""),
            "acad-1": lp.conoce_requisitos === true ? "Sí" : (lp.conoce_requisitos === false ? "No" : ""),
            "acad-2": lp.investigo_financiamiento === true ? "Sí" : (lp.investigo_financiamiento === false ? "No" : ""),
            "acad-3": lp.tiene_apoyo_familiar === true ? "Sí" : (lp.tiene_apoyo_familiar === false ? "No" : ""),
          });
        }
      } catch (err) {
        console.error("Failed to load context data", err);
      } finally {
        setIsLoadingContext(false);
      }
    }
    loadData();
  }, [isAuthenticated, user]);

  // ─── Recalculate resultados_acumulados from answers + preguntas ──────────
  function recalcularResultados(answers: Record<number, string>): ResultadosAcumulados {
    const acumulados = buildEmptyResultados();
    let respondidas = 0;

    preguntas.forEach((q: any) => {
      const answer = answers[q.id];
      if (answer) {
        respondidas++;
        if (answer === "Me interesa") {
          const areaName = q.area as string;
          if (acumulados.resultados_por_area[areaName]) {
            acumulados.resultados_por_area[areaName].puntos += 1;
          }
        }
      }
    });

    // Calculate percentages
    Object.keys(acumulados.resultados_por_area).forEach((key) => {
      const area = acumulados.resultados_por_area[key];
      area.porcentaje_afinidad = area.maximo_posible > 0
        ? Math.round((area.puntos / area.maximo_posible) * 100 * 100) / 100
        : 0;
    });

    acumulados.preguntas_respondidas = respondidas;
    acumulados.progreso_porcentaje = Math.round((respondidas / 80) * 100 * 100) / 100;
    acumulados.estado = respondidas === 80 ? "COMPLETADO" : "INICIADO";

    return acumulados;
  }

  const calculateAreas = (currentAnswers: Record<number, string>): ResultadosAcumulados => {
    return recalcularResultados(currentAnswers);
  };

  // Recalculate areas every time testAnswers changes (real-time score updates)
  useEffect(() => {
    if (Object.keys(testAnswers).length > 0) {
      const areas = calculateAreas(testAnswers);
      setResultadosAcumulados(areas);
    }
  }, [testAnswers]);

  const saveReflections = async (newReflections: Record<string, string>) => {
    setReflections(newReflections);
    if (!isAuthenticated) return;
    const payload: Record<string, string> = {};
    Object.keys(newReflections).forEach(k => {
      if (k.startsWith("r-")) payload[k.replace("r-", "")] = newReflections[k];
      else payload[k] = newReflections[k];
    });
    await apiSaveReflections(payload);
  };

  const saveTestAnswers = async (newAnswers: Record<number, string>) => {
    setTestAnswers(newAnswers);

    if (isAuthenticated) {
      const areas = calculateAreas(newAnswers);
      setResultadosAcumulados(areas);
      const ok = await saveResults(newAnswers, areas.resultados_por_area);
      if (ok && typeof window !== 'undefined') {
        localStorage.removeItem(ANSWERS_STORAGE_KEY);
      }
    }
  };

  const saveLifeProject = async (newData: Record<string, string>) => {
    setLifeProject(newData);
    if (isAuthenticated) {
      const payload: Record<string, any> = {
        vision: newData.vision || "",
        meta_corto_plazo: newData.corto || "",
        meta_mediano_plazo: newData.mediano || "",
        meta_largo_plazo: newData.largo || "",
        compromisos: newData.compromisos || "",
        tiene_claro_carrera: newData["acad-0"] === "Sí" ? true : (newData["acad-0"] === "No" ? false : null),
        conoce_requisitos: newData["acad-1"] === "Sí" ? true : (newData["acad-1"] === "No" ? false : null),
        investigo_financiamiento: newData["acad-2"] === "Sí" ? true : (newData["acad-2"] === "No" ? false : null),
        tiene_apoyo_familiar: newData["acad-3"] === "Sí" ? true : (newData["acad-3"] === "No" ? false : null),
      };
      await apiSaveLifeProject(payload);
    }
  };

  // Computations
  const answeredCount = Object.keys(testAnswers).filter(k => {
    const n = Number(k);
    return n >= 1 && n <= 80 && testAnswers[n];
  }).length;

  const reflectionsCount = Object.keys(reflections).filter(
    (k) => reflections[k] && reflections[k].trim() !== ""
  ).length;

  // Calculate profile completion dynamically
  const testWeight = (answeredCount / 80) * 35;
  const reflectionsWeight = (reflectionsCount / 9) * 25;
  
  const lifeProjectKeys = ["vision", "corto", "mediano", "largo", "compromisos", "acad-0", "acad-1", "acad-2", "acad-3"];
  const completedLifeProject = lifeProjectKeys.filter(
    (k) => lifeProject[k] && lifeProject[k].trim() !== ""
  ).length;
  const lifeProjectWeight = (completedLifeProject / lifeProjectKeys.length) * 40;

  const rawCompletion = Math.round(testWeight + reflectionsWeight + lifeProjectWeight);
  const profileCompletion = Math.min(100, Math.max(0, rawCompletion));

  // ─── Dynamic areas from accumulated results ────────────────────────────
  const dynamicAreas: Area[] = AREAS.map((area) => {
    if (!resultadosAcumulados) {
      return { ...area, score: 0 };
    }

    // Find the matching area name for this area.id
    const areaName = Object.keys(AREA_NAME_TO_ID).find(
      (name) => AREA_NAME_TO_ID[name] === area.id
    );

    if (areaName && resultadosAcumulados.resultados_por_area[areaName]) {
      return {
        ...area,
        score: resultadosAcumulados.resultados_por_area[areaName].puntos,
      };
    }

    return { ...area, score: 0 };
  });

  return (
    <VocacionalContext.Provider
      value={{
        view,
        setView,
        userName,
        setUserName,
        reflections,
        setReflections,
        saveReflections,
        testAnswers,
        setTestAnswers,
        saveTestAnswers,
        lifeProject,
        setLifeProject,
        saveLifeProject,
        resultadosAcumulados,
        isLoadingContext,
        answeredCount,
        reflectionsCount,
        profileCompletion,
        dynamicAreas,
      }}
    >
      {children}
    </VocacionalContext.Provider>
  );
}
