"use client";

import React from "react";
import { AdminProvider, useAdmin } from "@/src/admin/context/AdminContext";
import AdminSidebar from "@/src/admin/components/layout/AdminSidebar";
import AdminTopBar from "@/src/admin/components/layout/AdminTopBar";
import AdminOverviewView from "@/src/admin/views/AdminOverviewView";
import AdminPreguntasView from "@/src/admin/views/AdminPreguntasView";
import AdminProfesionesView from "@/src/admin/views/AdminProfesionesView";
import AdminUsuariosView from "@/src/admin/views/AdminUsuariosView";
import { COLORS } from "@/src/constants/vocacional";

function AdminAppContent() {
  const { adminView } = useAdmin();

  const renderView = () => {
    switch (adminView) {
      case "overview":    return <AdminOverviewView />;
      case "preguntas":   return <AdminPreguntasView />;
      case "profesiones": return <AdminProfesionesView />;
      case "usuarios":    return <AdminUsuariosView />;
      default:            return <AdminOverviewView />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: COLORS.bg,
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        width: "100%",
      }}
    >
      <AdminSidebar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <AdminTopBar />
        <div style={{ flex: 1, position: "relative" }}>
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default function AdminPage() {
  return (
    <AdminProvider>
      <AdminAppContent />
    </AdminProvider>
  );
}
