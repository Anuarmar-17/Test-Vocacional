import React from "react";
import { COLORS, NAV_LINKS } from "@/src/constants/vocacional";
import { useVocacional } from "@/src/hooks/useVocacional";

export default function Sidebar() {
  const { view, setView, userName } = useVocacional();

  return (
    <aside
      style={{
        width: 220,
        minWidth: 220,
        background: COLORS.sidebar,
        borderRight: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "1.4rem 1.5rem 1rem",
          borderBottom: `1px solid ${COLORS.sidebarBorder}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: COLORS.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <i
            className="ti ti-compass"
            style={{ color: "#fff", fontSize: 18 }}
            aria-hidden="true"
          />
        </div>
        <span
          style={{
            fontWeight: 700,
            fontSize: 15.5,
            color: COLORS.text,
            letterSpacing: "-0.3px",
          }}
        >
          VocaTest
        </span>
      </div>

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          padding: "1rem 0.75rem",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <p
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: COLORS.textLight,
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            margin: "0 0 8px 8px",
          }}
        >
          Menú
        </p>
        {NAV_LINKS.map((l) => {
          const isActive = view === l.id;
          return (
            <button
              key={l.id}
              onClick={() => setView(l.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: isActive ? COLORS.accentLight : "transparent",
                color: isActive ? COLORS.accent : COLORS.textMuted,
                border: "none",
                cursor: "pointer",
                padding: "9px 12px",
                borderRadius: 10,
                fontSize: 13.5,
                fontWeight: isActive ? 600 : 400,
                textAlign: "left",
                width: "100%",
                transition: "all .12s",
              }}
            >
              <i
                className={`ti ${l.icon}`}
                style={{ fontSize: 17, flexShrink: 0 }}
                aria-hidden="true"
              />
              {l.label}
            </button>
          );
        })}
      </nav>

      {/* User footer */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderTop: `1px solid ${COLORS.sidebarBorder}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: COLORS.accentMid,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: COLORS.accent,
            flexShrink: 0,
          }}
        >
          {userName ? userName.slice(0, 2).toUpperCase() : "US"}
        </div>
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 600,
              color: COLORS.text,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {userName}
          </p>
          <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>
            Estudiante
          </p>
        </div>
      </div>
    </aside>
  );
}
