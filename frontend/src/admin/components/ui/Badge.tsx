"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface BadgeProps {
  color: string;
  light: string;
  children: React.ReactNode;
  dot?: boolean;
}

export default function Badge({ color, light, children, dot = false }: BadgeProps) {
  return (
    <span
      style={{
        background: light,
        color,
        fontSize: 11.5,
        fontWeight: 600,
        padding: dot ? "3px 10px 3px 8px" : "3px 10px",
        borderRadius: 20,
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        whiteSpace: "nowrap",
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: color,
            flexShrink: 0,
            display: "inline-block",
          }}
        />
      )}
      {children}
    </span>
  );
}

// ─── Status Badge: activo / inactivo ─────────────────────────────────────────

interface StatusBadgeProps {
  activa: boolean;
  labelOn?: string;
  labelOff?: string;
}

export function StatusBadge({ activa, labelOn = "Activa", labelOff = "Inactiva" }: StatusBadgeProps) {
  return (
    <Badge
      color={activa ? COLORS.teal : COLORS.textMuted}
      light={activa ? COLORS.tealLight : "#F3F4F6"}
      dot
    >
      {activa ? labelOn : labelOff}
    </Badge>
  );
}
