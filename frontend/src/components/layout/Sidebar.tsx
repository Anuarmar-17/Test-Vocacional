"use client";

import React, { useState } from "react";
import { COLORS, NAV_LINKS } from "@/src/constants/vocacional";
import { useVocacional } from "@/src/hooks/useVocacional";
import { useAuth } from "@/src/context/AuthContext";

export default function Sidebar() {
  const { view, setView, userName } = useVocacional();
  const { logout: logoutStudent } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const w = collapsed ? 64 : 220;

  return (
    <aside
      style={{
        width: w,
        minWidth: w,
        background: COLORS.sidebar,
        borderRight: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        transition: "width .2s ease, min-width .2s ease",
        overflow: "hidden",
      }}
    >
      {/* Logo + toggle */}
      <div
        style={{
          padding: collapsed ? "0.7rem 0" : "0.7rem 1.5rem",
          borderBottom: `1px solid ${COLORS.sidebarBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          gap: collapsed ? 0 : 10,
          transition: "padding .2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
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
          {!collapsed && (
            <span
              style={{
                fontWeight: 700,
                fontSize: 15.5,
                color: COLORS.text,
                letterSpacing: "-0.3px",
                whiteSpace: "nowrap",
              }}
            >
              VocaTest
            </span>
          )}
        </div>
        {!collapsed && (
          <button
            onClick={() => setCollapsed(true)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: COLORS.textLight,
              padding: 4,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            title="Colapsar menú"
          >
            <i className="ti ti-chevron-left" style={{ fontSize: 16 }} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          padding: collapsed ? "1rem 0" : "1rem 0.75rem",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          transition: "padding .2s ease",
        }}
      >
        {!collapsed && (
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
        )}
        {NAV_LINKS.map((l) => {
          const isActive = view === l.id;
          return (
            <button
              key={l.id}
              onClick={() => setView(l.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: 10,
                background: isActive ? COLORS.accentLight : "transparent",
                color: isActive ? COLORS.accent : COLORS.textMuted,
                border: "none",
                cursor: "pointer",
                padding: collapsed ? "9px 0" : "9px 12px",
                borderRadius: 10,
                fontSize: 13.5,
                fontWeight: isActive ? 600 : 400,
                textAlign: "left",
                width: "100%",
                transition: "all .12s",
                margin: collapsed ? "0 auto" : 0,
                minWidth: collapsed ? 40 : 0,
              }}
              title={collapsed ? l.label : undefined}
            >
              <i
                className={`ti ${l.icon}`}
                style={{ fontSize: 17, flexShrink: 0 }}
                aria-hidden="true"
              />
              {!collapsed && l.label}
            </button>
          );
        })}
      </nav>

      {/* User footer */}
      <div
        style={{
          padding: collapsed ? "0.75rem 0" : "0.75rem 1.25rem",
          borderTop: `1px solid ${COLORS.sidebarBorder}`,
          transition: "padding .2s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: 10,
            marginBottom: collapsed ? 0 : 8,
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
          {!collapsed && (
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
          )}
        </div>
        <button
          onClick={logoutStudent}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            gap: 8,
            background: "transparent",
            color: COLORS.textMuted,
            border: `1px solid ${COLORS.sidebarBorder}`,
            cursor: "pointer",
            padding: collapsed ? "7px 0" : "7px 12px",
            borderRadius: 8,
            fontSize: 12.5,
            fontWeight: 500,
            width: collapsed ? 40 : "100%",
            margin: collapsed ? "8px auto 0" : "8px 0 0",
            transition: "all .12s",
          }}
          title={collapsed ? "Cerrar Sesión" : undefined}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fee2e2";
            e.currentTarget.style.color = "#dc2626";
            e.currentTarget.style.borderColor = "#fecaca";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = COLORS.textMuted;
            e.currentTarget.style.borderColor = COLORS.sidebarBorder;
          }}
        >
          <i className="ti ti-logout" style={{ fontSize: 15 }} aria-hidden="true" />
          {!collapsed && "Cerrar Sesión"}
        </button>
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: COLORS.textLight,
              padding: 4,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 4,
            }}
            title="Expandir menú"
          >
            <i className="ti ti-chevron-right" style={{ fontSize: 16 }} aria-hidden="true" />
          </button>
        )}
      </div>
    </aside>
  );
}
