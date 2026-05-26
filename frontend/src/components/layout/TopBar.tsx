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
        padding: "0 2.5rem",
        gap: 12,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ flex: 1 }} />
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

