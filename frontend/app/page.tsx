"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { VocacionalProvider } from "@/src/context/VocacionalContext";
import { useVocacional } from "@/src/hooks/useVocacional";
import { useAuth } from "@/src/context/AuthContext";
import Sidebar from "@/src/components/layout/Sidebar";
import TopBar from "@/src/components/layout/TopBar";
import { COLORS } from "@/src/constants/vocacional";

// Views
import InicioView from "@/src/views/InicioView";
import DashboardView from "@/src/views/DashboardView";
import AutoconocimientoView from "@/src/views/AutoconocimientoView";
import TestVocacionalView from "@/src/views/TestVocacionalView";
import ResultadosView from "@/src/views/ResultadosView";
import ProyectoVidaView from "@/src/views/ProyectoVidaView";

function VocacionalAppContent() {
  const { view } = useVocacional();

  const renderView = () => {
    switch (view) {
      case "inicio":
        return <InicioView />;
      case "dashboard":
        return <DashboardView />;
      case "autoconocimiento":
        return <AutoconocimientoView />;
      case "test":
        return <TestVocacionalView />;
      case "resultados":
        return <ResultadosView />;
      case "proyecto":
        return <ProyectoVidaView />;
      default:
        return <InicioView />;
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
      <Sidebar />
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          minWidth: 0, // prevents flex item overflow
        }}
      >
        <TopBar />
        <div style={{ flex: 1, position: "relative" }}>{renderView()}</div>
      </main>
    </div>
  );
}

export default function Home() {
  const { user, isAuthenticated, isAdmin, isLoading } = useAuth();
  const router = useRouter();

  // Show loading while verifying auth
  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f8f9fc",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 40,
            height: 40,
            border: "3px solid #e5e7eb",
            borderTopColor: "#7C5CFC",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
            margin: "0 auto 16px",
          }} />
          <p style={{ color: "#6b7280", fontSize: 14 }}>Cargando...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  // Not authenticated → go to login
  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  // Admin → go to admin panel
  if (isAdmin) {
    router.push('/admin');
    return null;
  }

  // Authenticated student → show vocacional app
  const studentName = user ? `${user.nombre} ${user.apellido}`.trim() : "Estudiante";

  return (
    <VocacionalProvider initialUserName={studentName}>
      <VocacionalAppContent />
    </VocacionalProvider>
  );
}

