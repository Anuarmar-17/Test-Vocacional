"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";
import { useAdmin, AdminView } from "@/src/admin/context/AdminContext";

const VIEW_TITLES: Record<AdminView, { title: string; subtitle: string; icon: string }> = {
  overview:    { title: "Vista General",    subtitle: "Resumen estadístico del sistema",          icon: "ti-layout-dashboard" },
  preguntas:   { title: "Preguntas",        subtitle: "Gestiona las preguntas del test vocacional", icon: "ti-help-circle" },
  profesiones: { title: "Profesiones",      subtitle: "Administra el catálogo de profesiones",     icon: "ti-briefcase" },
  usuarios:    { title: "Usuarios",         subtitle: "Consulta usuarios y sus resultados",         icon: "ti-users" },
};

export default function AdminTopBar() {
  const { adminView } = useAdmin();
  const meta = VIEW_TITLES[adminView];

  return (
    <header
      style={{
        height: 57,
        background: COLORS.surface,
        borderBottom: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        gap: 14,
        position: "sticky",
        top: 0,
        zIndex: 50,
        flexShrink: 0,
      }}
    >
      {/* View info */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: COLORS.accentLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i className={`ti ${meta.icon}`} style={{ fontSize: 16, color: COLORS.accent }} aria-hidden="true" />
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.2px" }}>
            {meta.title}
          </h1>
          <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>
            {meta.subtitle}
          </p>
        </div>
      </div>

      {/* Right actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {/* Notifications */}
        <button
          style={{
            background: "transparent",
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            transition: "background .12s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          title="Notificaciones"
        >
          <i className="ti ti-bell" style={{ fontSize: 17, color: COLORS.textMuted }} aria-hidden="true" />
          <span
            style={{
              position: "absolute",
              top: 7,
              right: 7,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: COLORS.coral,
              border: `1.5px solid ${COLORS.surface}`,
            }}
          />
        </button>

        {/* Admin badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: COLORS.accentLight,
            padding: "4px 12px 4px 6px",
            borderRadius: 99,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: COLORS.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            AD
          </div>
          <span style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.accent }}>
            Administrador
          </span>
        </div>
      </div>
    </header>
  );
}
