"use client";

import React, { useState, useEffect } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import StatCard from "@/src/admin/components/ui/StatCard";
import BarChart, { DonutChart } from "@/src/admin/components/ui/Charts";
import { getAdminStats } from "@/src/lib/api";

function timeAgo(iso: string): string {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "ahora";
  if (mins < 60) return `hace ${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `hace ${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `hace ${days} día${days > 1 ? "s" : ""}`;
}

export default function AdminOverviewView() {
  const [stats, setStats] = useState<any>(null);
  const [pregCount, setPregCount] = useState(0);
  const [profCount, setProfCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [s, pRes, prRes] = await Promise.all([
        getAdminStats(),
        fetch("/preguntas.json"),
        fetch("/profesiones.json"),
      ]);
      setStats(s);
      if (pRes.ok) {
        const arr = await pRes.json();
        setPregCount(arr.length);
      }
      if (prRes.ok) {
        const arr = await prRes.json();
        setProfCount(arr.length);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (loading || !stats) {
    return (
      <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: COLORS.textMuted, fontSize: 14 }}>Cargando datos del sistema...</p>
      </div>
    );
  }

  const { total_usuarios, test_completados, area_distribucion, profesiones_top, actividad_reciente } = stats;
  const enProgreso = total_usuarios - test_completados;
  const tasaComplecion = total_usuarios > 0 ? Math.round((test_completados / total_usuarios) * 100) : 0;

  const kpiCards = [
    { label: "Usuarios Registrados",  value: total_usuarios, cambio: 0, icon: "ti-users",           color: "#4F6AF5", light: "#EEF1FF" },
    { label: "Tests Realizados",      value: test_completados, cambio: 0, icon: "ti-clipboard-check", color: "#0F9B8E", light: "#E0F5F3" },
    { label: "Preguntas Activas",     value: pregCount,       cambio: 0, icon: "ti-help-circle",     color: "#D97706", light: "#FEF3C7" },
    { label: "Profesiones Cargadas",  value: profCount,       cambio: 0, icon: "ti-briefcase",       color: "#C0533A", light: "#FAF0ED" },
  ];

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Page heading */}
      <div style={{ marginBottom: "1.75rem" }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.4px" }}>
          Resumen del Sistema
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: 13.5, color: COLORS.textMuted }}>
          Datos en tiempo real
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
        {kpiCards.map((stat) => (
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
            data={(profesiones_top ?? []).map((p: any) => ({
              label: p.area,
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
          <DonutChart data={area_distribucion ?? []} />
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
              { label: "Tests completados", value: test_completados, color: COLORS.teal },
              { label: "En progreso",        value: Math.max(0, enProgreso), color: COLORS.amber },
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
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {(actividad_reciente ?? []).length === 0 ? (
              <p style={{ fontSize: 13, color: COLORS.textLight, textAlign: "center", padding: "1rem" }}>
                Sin actividad reciente
              </p>
            ) : (actividad_reciente ?? []).map((item: any, idx: number) => {
              const items = actividad_reciente ?? [];
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    paddingTop: idx === 0 ? 0 : "0.75rem",
                    paddingBottom: "0.75rem",
                    borderBottom: idx < items.length - 1 ? `1px solid ${COLORS.border}` : "none",
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
                    {timeAgo(item.tiempo)}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
