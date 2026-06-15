"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  AdminPregunta,
  AdminProfesion,
  AdminUsuario,
  AREA_COLORS,
  normalizeAreaName,
} from "@/src/admin/constants/adminData";
import { getAdminUsers } from "@/src/lib/api";

export type AdminView = "overview" | "preguntas" | "profesiones" | "usuarios";

export interface AdminContextType {
  // Navigation
  adminView: AdminView;
  setAdminView: (view: AdminView) => void;

  // Preguntas
  preguntas: AdminPregunta[];
  setPreguntas: React.Dispatch<React.SetStateAction<AdminPregunta[]>>;
  addPregunta: (p: Omit<AdminPregunta, "id" | "createdAt">) => void;
  updatePregunta: (id: number, p: Partial<AdminPregunta>) => void;
  deletePregunta: (id: number) => void;
  togglePreguntaActiva: (id: number) => void;

  // Profesiones
  profesiones: AdminProfesion[];
  setProfesiones: React.Dispatch<React.SetStateAction<AdminProfesion[]>>;
  addProfesion: (p: Omit<AdminProfesion, "id">) => void;
  updateProfesion: (id: number, p: Partial<AdminProfesion>) => void;
  deleteProfesion: (id: number) => void;
  toggleProfesionActiva: (id: number) => void;

  // Usuarios (read-only in admin)
  usuarios: AdminUsuario[];

  // Refresh from JSON
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

function preguntasFromJson(json: any[]): AdminPregunta[] {
  return json.map((q: any, idx: number) => {
    const area = normalizeAreaName(q.area);
    const colors = AREA_COLORS[area] || { color: "#6B7280", light: "#F3F4F6" };
    return {
      id: q.id ?? idx + 1,
      area,
      areaColor: colors.color,
      areaLight: colors.light,
      texto: q.pregunta,
      activa: true,
      createdAt: new Date().toISOString().split("T")[0],
    };
  });
}

function profesionesFromJson(json: any[]): AdminProfesion[] {
  return json.map((p: any) => ({
    id: p.id,
    nombre: p.nombre,
    area: p.area,
    areaColor: p.areaColor,
    areaLight: p.areaLight,
    descripcion: p.descripcion,
    universidades: p.universidades ?? [],
    duracion: p.duracion,
    activa: p.activa ?? true,
  }));
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [adminView, setAdminView] = useState<AdminView>("overview");
  const [preguntas, setPreguntas] = useState<AdminPregunta[]>([]);
  const [profesiones, setProfesiones] = useState<AdminProfesion[]>([]);
  const [usuarios, setUsuarios] = useState<AdminUsuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [pResp, prResp] = await Promise.all([
          fetch("/preguntas.json"),
          fetch("/profesiones.json"),
        ]);
        if (pResp.ok) {
          const pJson = await pResp.json();
          setPreguntas(preguntasFromJson(pJson));
        }
        if (prResp.ok) {
          const prJson = await prResp.json();
          setProfesiones(profesionesFromJson(prJson));
        }

        // Load real user data from API
        const users = await getAdminUsers();
        if (users && users.length > 0) {
          setUsuarios(users);
        }
      } catch {
        // fallback empty arrays
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // ── Preguntas ────────────────────────────────────────────────────────────
  const addPregunta = (p: Omit<AdminPregunta, "id" | "createdAt">) => {
    const newId = Math.max(0, ...preguntas.map((q) => q.id)) + 1;
    const today = new Date().toISOString().split("T")[0];
    setPreguntas((prev) => [...prev, { ...p, id: newId, createdAt: today }]);
  };

  const updatePregunta = (id: number, updates: Partial<AdminPregunta>) => {
    setPreguntas((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  const deletePregunta = (id: number) => {
    setPreguntas((prev) => prev.filter((q) => q.id !== id));
  };

  const togglePreguntaActiva = (id: number) => {
    setPreguntas((prev) =>
      prev.map((q) => (q.id === id ? { ...q, activa: !q.activa } : q))
    );
  };

  // ── Profesiones ──────────────────────────────────────────────────────────
  const addProfesion = (p: Omit<AdminProfesion, "id">) => {
    const newId = Math.max(0, ...profesiones.map((x) => x.id)) + 1;
    setProfesiones((prev) => [...prev, { ...p, id: newId }]);
  };

  const updateProfesion = (id: number, updates: Partial<AdminProfesion>) => {
    setProfesiones((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProfesion = (id: number) => {
    setProfesiones((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleProfesionActiva = (id: number) => {
    setProfesiones((prev) =>
      prev.map((p) => (p.id === id ? { ...p, activa: !p.activa } : p))
    );
  };

  return (
    <AdminContext.Provider
      value={{
        adminView,
        setAdminView,
        preguntas,
        setPreguntas,
        addPregunta,
        updatePregunta,
        deletePregunta,
        togglePreguntaActiva,
        profesiones,
        setProfesiones,
        addProfesion,
        updateProfesion,
        deleteProfesion,
        toggleProfesionActiva,
        usuarios,
        loading,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin(): AdminContextType {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
  return ctx;
}
