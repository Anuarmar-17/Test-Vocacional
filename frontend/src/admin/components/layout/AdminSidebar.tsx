"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";
import { ADMIN_NAV_LINKS } from "@/src/admin/constants/adminData";
import { useAdmin, AdminView } from "@/src/admin/context/AdminContext";

export default function AdminSidebar() {
  const { adminView, setAdminView } = useAdmin();

  return (
    <aside
      style={{
        width: 230,
        minWidth: 230,
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
          padding: "0 1.5rem",
          height: 57,
          borderBottom: `1px solid ${COLORS.sidebarBorder}`,
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
          <i className="ti ti-compass" style={{ color: "#fff", fontSize: 18 }} aria-hidden="true" />
        </div>
        <div>
          <span style={{ fontWeight: 700, fontSize: 15.5, color: COLORS.text, letterSpacing: "-0.3px" }}>
            VocaTest
          </span>
          <span
            style={{
              display: "block",
              fontSize: 10,
              fontWeight: 600,
              color: COLORS.accent,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              lineHeight: 1,
            }}
          >
            Admin
          </span>
        </div>
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
          Panel Admin
        </p>

        {ADMIN_NAV_LINKS.map((link) => {
          const isActive = adminView === link.id;
          return (
            <button
              key={link.id}
              id={`admin-nav-${link.id}`}
              onClick={() => setAdminView(link.id as AdminView)}
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
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = COLORS.bg;
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i
                  className={`ti ${link.icon}`}
                  style={{ fontSize: 17, flexShrink: 0 }}
                  aria-hidden="true"
                />
                {link.label}
              </span>
              {link.badge != null && (
                <span
                  style={{
                    background: isActive ? COLORS.accent : COLORS.accentMid,
                    color: isActive ? "#fff" : COLORS.accent,
                    fontSize: 10.5,
                    fontWeight: 700,
                    borderRadius: 99,
                    padding: "1px 7px",
                    minWidth: 18,
                    textAlign: "center",
                  }}
                >
                  {link.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${COLORS.sidebarBorder}`, margin: "10px 4px" }} />

        {/* Back to student view hint */}
        <p
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: COLORS.textLight,
            textTransform: "uppercase",
            letterSpacing: "0.6px",
            margin: "0 0 6px 8px",
          }}
        >
          Navegación
        </p>
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "transparent",
            color: COLORS.textMuted,
            textDecoration: "none",
            padding: "9px 12px",
            borderRadius: 10,
            fontSize: 13.5,
            fontWeight: 400,
            width: "100%",
            transition: "all .12s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <i className="ti ti-arrow-left" style={{ fontSize: 17 }} aria-hidden="true" />
          Vista Estudiante
        </a>
      </nav>

      {/* Admin footer */}
      <div
        style={{
          padding: "1rem 1.25rem",
          borderTop: `1px solid ${COLORS.sidebarBorder}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: COLORS.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          AD
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
            Administrador
          </p>
          <p style={{ margin: 0, fontSize: 11.5, color: COLORS.accent }}>
            Panel Admin
          </p>
        </div>
      </div>
    </aside>
  );
}
