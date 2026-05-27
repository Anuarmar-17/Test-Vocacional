"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface BarChartProps {
  data: { label: string; value: number; maxValue?: number; color: string; light: string }[];
  showValues?: boolean;
}

export default function BarChart({ data, showValues = true }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {data.map((item) => {
        const pct = Math.round((item.value / max) * 100);
        return (
          <div key={item.label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
              <span style={{ fontSize: 13, color: COLORS.text, fontWeight: 500 }}>
                {item.label}
              </span>
              {showValues && (
                <span style={{ fontSize: 12.5, fontWeight: 700, color: item.color }}>
                  {item.value}
                </span>
              )}
            </div>
            <div
              style={{
                height: 8,
                borderRadius: 99,
                background: item.light,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  borderRadius: 99,
                  background: item.color,
                  transition: "width .6s ease",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── DonutChart (simulated with CSS) ─────────────────────────────────────────

interface DonutSlice {
  area: string;
  porcentaje: number;
  color: string;
  cantidad: number;
}

interface DonutChartProps {
  data: DonutSlice[];
}

export function DonutChart({ data }: DonutChartProps) {
  // Build conic-gradient
  let cumulative = 0;
  const segments = data.map((d) => {
    const start = cumulative;
    cumulative += d.porcentaje;
    return { ...d, start, end: cumulative };
  });

  const gradient = segments
    .map((s) => `${s.color} ${s.start}% ${s.end}%`)
    .join(", ");

  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
      {/* Chart */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: `conic-gradient(${gradient})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: COLORS.surface,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>
              {data.reduce((sum, d) => sum + d.cantidad, 0)}
            </span>
            <span style={{ fontSize: 10, color: COLORS.textMuted }}>total</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 160 }}>
        {data.map((d) => (
          <div key={d.area} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: d.color,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12.5, color: COLORS.text, flex: 1 }}>{d.area}</span>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: d.color }}>{d.porcentaje}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
