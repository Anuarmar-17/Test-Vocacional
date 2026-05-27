"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import StatCard from "@/src/admin/components/ui/StatCard";
import BarChart, { DonutChart } from "@/src/admin/components/ui/Charts";
import {
  MOCK_STATS,
  MOCK_AREAS_DISTRIBUCION,
  MOCK_PROFESIONES_TOP,
  MOCK_ACTIVIDAD_RECIENTE,
  MOCK_USUARIOS,
} from "@/src/admin/constants/adminData";

export default function AdminOverviewView() {
  const totalTests = MOCK_USUARIOS.filter((u) => u.testCompletado).length;
  const totalUsuarios = MOCK_USUARIOS.length;
  const tasaComplecion = Math.round((totalTests / totalUsuarios) * 100);

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Page heading */}
      <div style={{ marginBottom: "1.75rem" }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.4px" }}>
          Resumen del Sistema
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: 13.5, color: COLORS.textMuted }}>
          Datos actualizados · Mayo 2025
        </p>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginBottom: "2rem",
        }}
      >
        {MOCK_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Charts row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: "2rem",
        }}
      >
        {/* Profesiones top */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
                Profesiones más recomendadas
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: COLORS.text }}>
                Top 5 por cantidad de usuarios
              </p>
            </div>
            <i className="ti ti-trophy" style={{ fontSize: 20, color: COLORS.amber }} aria-hidden="true" />
          </div>
          <BarChart
            data={MOCK_PROFESIONES_TOP.map((p) => ({
              label: p.nombre,
              value: p.cantidad,
              color: p.color,
              light: p.light,
            }))}
          />
        </Card>

        {/* Distribución áreas */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
                Distribución por área
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: COLORS.text }}>
                Áreas ocupacionales seleccionadas
              </p>
            </div>
            <i className="ti ti-chart-pie" style={{ fontSize: 20, color: COLORS.accent }} aria-hidden="true" />
          </div>
          <DonutChart data={MOCK_AREAS_DISTRIBUCION} />
        </Card>
      </div>

      {/* Bottom row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        {/* Tasa de completitud */}
        <Card>
          <p style={{ margin: "0 0 1rem", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
            Progreso de usuarios
          </p>

          {/* Big metric */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 12, marginBottom: "1.25rem" }}>
            <span style={{ fontSize: 48, fontWeight: 800, color: COLORS.accent, lineHeight: 1, letterSpacing: "-2px" }}>
              {tasaComplecion}%
            </span>
            <span style={{ fontSize: 13, color: COLORS.textMuted, paddingBottom: 6 }}>
              tasa de completitud del test
            </span>
          </div>

          {/* Progress bar */}
          <div style={{ height: 10, borderRadius: 99, background: COLORS.accentLight, marginBottom: "1rem" }}>
            <div
              style={{
                height: "100%",
                width: `${tasaComplecion}%`,
                borderRadius: 99,
                background: COLORS.accent,
                transition: "width .6s ease",
              }}
            />
          </div>

          {/* Two stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Tests completados", value: totalTests, color: COLORS.teal },
              { label: "En progreso",        value: totalUsuarios - totalTests, color: COLORS.amber },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: COLORS.bg,
                  borderRadius: 12,
                  padding: "0.875rem",
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <p style={{ margin: "0 0 4px", fontSize: 11, color: COLORS.textMuted, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".4px" }}>
                  {item.label}
                </p>
                <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: item.color }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Actividad reciente */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
              Actividad reciente
            </p>
            <span
              style={{
                fontSize: 11,
                color: COLORS.accent,
                fontWeight: 600,
                background: COLORS.accentLight,
                padding: "3px 10px",
                borderRadius: 99,
                cursor: "pointer",
              }}
            >
              Ver todo
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {MOCK_ACTIVIDAD_RECIENTE.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: idx === 0 ? 0 : "0.75rem",
                  paddingBottom: "0.75rem",
                  borderBottom: idx < MOCK_ACTIVIDAD_RECIENTE.length - 1 ? `1px solid ${COLORS.border}` : "none",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: `${item.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i className={`ti ${item.icon}`} style={{ fontSize: 15, color: item.color }} aria-hidden="true" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
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
                    {item.usuario}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11.5,
                      color: COLORS.textMuted,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.descripcion}
                  </p>
                </div>
                <span style={{ fontSize: 11, color: COLORS.textLight, flexShrink: 0 }}>
                  {item.tiempo}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
