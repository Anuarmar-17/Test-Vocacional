import React from "react";
import { COLORS } from "@/src/constants/vocacional";

export default function TopBar() {
  return (
    <header
      style={{
        height: 52,
        background: COLORS.surface,
        borderBottom: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        gap: 12,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ flex: 1 }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: COLORS.bg,
          borderRadius: 8,
          padding: "6px 12px",
          border: `1px solid ${COLORS.border}`,
          cursor: "text",
        }}
      >
        <i
          className="ti ti-search"
          style={{ fontSize: 14, color: COLORS.textLight }}
          aria-hidden="true"
        />
        <span style={{ fontSize: 13, color: COLORS.textLight }}>
          Buscar...
        </span>
      </div>
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
        }}
      >
        <i
          className="ti ti-bell"
          style={{ fontSize: 17, color: COLORS.textMuted }}
          aria-hidden="true"
        />
      </button>
    </header>
  );
}
