"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  AdminPregunta,
  AdminProfesion,
  AdminUsuario,
  MOCK_PREGUNTAS,
  MOCK_PROFESIONES,
  MOCK_USUARIOS,
} from "@/src/admin/constants/adminData";

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
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [adminView, setAdminView] = useState<AdminView>("overview");
  const [preguntas, setPreguntas] = useState<AdminPregunta[]>(MOCK_PREGUNTAS);
  const [profesiones, setProfesiones] = useState<AdminProfesion[]>(MOCK_PROFESIONES);
  const [usuarios] = useState<AdminUsuario[]>(MOCK_USUARIOS);

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
