import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AREAS, Area } from "@/src/constants/vocacional";

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
  
  // Computed values
  answeredCount: number;
  reflectionsCount: number;
  profileCompletion: number;
  dynamicAreas: Area[];
}

export const VocacionalContext = createContext<VocacionalContextType | undefined>(undefined);

const INITIAL_REFLECTIONS = {
  "0-0": "Mi principal fortaleza es la perseverancia y la empatía con los demás.",
  "0-1": "Me hace perder la noción del tiempo programar y diseñar interfaces creativas.",
  "0-2": "Curiosa, creativa y organizada.",
  "1-0": "Lo más importante en la vida es mi familia, el crecimiento personal y ayudar a otros.",
  "1-1": "Me guío bajo principios de honestidad, respeto y equidad.",
};

const INITIAL_ANSWERS: Record<number, string> = {
  // Sample questions 1-8 answered to match default scores
  1: "Me interesa",
  2: "Me interesa",
  3: "Me interesa",
  4: "Me interesa",
  5: "Me interesa",
  6: "Me interesa",
  7: "Me interesa",
  8: "Me interesa",
  // Questions 9-24 to complete 24 answered questions
  9: "Me interesa",
  10: "No me interesa",
  11: "Me interesa",
  12: "No me interesa",
  13: "Me interesa",
  14: "No me interesa",
  15: "Me interesa",
  16: "No me interesa",
  17: "Me interesa",
  18: "No me interesa",
  19: "Me interesa",
  20: "No me interesa",
  21: "Me interesa",
  22: "No me interesa",
  23: "Me interesa",
  24: "Me interesa",
};

const INITIAL_LIFE_PROJECT = {
  vision: "Quiero ser una profesional de la tecnología, creando soluciones interactivas que faciliten la educación y el bienestar de las personas en mi comunidad.",
  corto: "Completar con éxito este test vocacional y elegir mi carrera universitaria ideal.",
};

export function VocacionalProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<string>("inicio");
  const [userName, setUserName] = useState<string>("María López");

  const [reflections, setReflections] = useState<Record<string, string>>(INITIAL_REFLECTIONS);
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>(INITIAL_ANSWERS);
  const [lifeProject, setLifeProject] = useState<Record<string, string>>(INITIAL_LIFE_PROJECT);

  const saveReflections = (newReflections: Record<string, string>) => {
    setReflections(newReflections);
  };

  const saveTestAnswers = (newAnswers: Record<number, string>) => {
    setTestAnswers(newAnswers);
  };

  const saveLifeProject = (newData: Record<string, string>) => {
    setLifeProject(newData);
  };

  // Computations
  const answeredCount = Object.keys(testAnswers).length;
  const reflectionsCount = Object.keys(reflections).filter(
    (k) => reflections[k] && reflections[k].trim() !== ""
  ).length;

  // Calculate profile completion dynamically
  const testWeight = (answeredCount / 80) * 35; // Test accounts for 35%
  const reflectionsWeight = (reflectionsCount / 9) * 25; // Reflections account for 25% (9 total textareas)
  
  const lifeProjectKeys = ["vision", "corto", "mediano", "largo", "compromisos", "acad-0", "acad-1", "acad-2", "acad-3"];
  const completedLifeProject = lifeProjectKeys.filter(
    (k) => lifeProject[k] && lifeProject[k].trim() !== ""
  ).length;
  const lifeProjectWeight = (completedLifeProject / lifeProjectKeys.length) * 40; // Life project accounts for 40%

  const rawCompletion = Math.round(testWeight + reflectionsWeight + lifeProjectWeight);
  const profileCompletion = Math.min(100, Math.max(30, rawCompletion)); // Clamp between 30% and 100% to match mock visually

  // Dynamic Vocational scores calculated based on actual answers to sample questions
  const dynamicAreas = AREAS.map((area) => {
    let score = area.score; // default baseline

    // Adjust score based on active answers for sample questions to make it dynamic
    if (area.id === "arte") {
      const q1Score = testAnswers[1] === "Me interesa" ? 0 : -6;
      const q6Score = testAnswers[6] === "Me interesa" ? 0 : -6;
      score += (q1Score + q6Score);
    } else if (area.id === "social") {
      const q2Score = testAnswers[2] === "Me interesa" ? 0 : -6;
      const q8Score = testAnswers[8] === "Me interesa" ? 0 : -6;
      score += (q2Score + q8Score);
    } else if (area.id === "tecnologia") {
      const q3Score = testAnswers[3] === "Me interesa" ? 0 : -6;
      const q7Score = testAnswers[7] === "Me interesa" ? 0 : -6;
      score += (q3Score + q7Score);
    } else if (area.id === "economica") {
      const q4Score = testAnswers[4] === "Me interesa" ? 0 : -6;
      score += q4Score;
    } else if (area.id === "salud") {
      const q5Score = testAnswers[5] === "Me interesa" ? 0 : -6;
      score += q5Score;
    }

    return {
      ...area,
      score: Math.max(0, Math.min(80, score)),
    };
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
