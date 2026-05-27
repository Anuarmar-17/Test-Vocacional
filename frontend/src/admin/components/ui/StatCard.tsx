"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface StatCardProps {
  label: string;
  value: string | number;
  cambio: number;
  icon: string;
  color: string;
  light: string;
}

export default function StatCard({ label, value, cambio, icon, color, light }: StatCardProps) {
  const isPositive = cambio > 0;
  const isZero = cambio === 0;

  return (
    <div
      style={{
        background: COLORS.surface,
        borderRadius: 16,
        border: `1px solid ${COLORS.border}`,
        padding: "1.25rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "box-shadow .2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
          {label}
        </p>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <i className={`ti ${icon}`} style={{ fontSize: 18, color }} aria-hidden="true" />
        </div>
      </div>

      <p style={{ margin: 0, fontSize: 32, fontWeight: 700, color: COLORS.text, letterSpacing: "-1px" }}>
        {value}
      </p>

      {!isZero && (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <i
            className={`ti ${isPositive ? "ti-trending-up" : "ti-trending-down"}`}
            style={{ fontSize: 13, color: isPositive ? "#0F9B8E" : "#E85D4A" }}
            aria-hidden="true"
          />
          <span style={{ fontSize: 12, color: isPositive ? "#0F9B8E" : "#E85D4A", fontWeight: 500 }}>
            {isPositive ? "+" : ""}{cambio}% este mes
          </span>
        </div>
      )}
      {isZero && (
        <span style={{ fontSize: 12, color: COLORS.textLight }}>Sin cambios este mes</span>
      )}
    </div>
  );
}
