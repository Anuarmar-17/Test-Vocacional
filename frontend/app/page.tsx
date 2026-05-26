"use client";

import React from "react";
import { VocacionalProvider } from "@/src/context/VocacionalContext";
import { useVocacional } from "@/src/hooks/useVocacional";
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
  return (
    <VocacionalProvider>
      <VocacionalAppContent />
    </VocacionalProvider>
  );
}
