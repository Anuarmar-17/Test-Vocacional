import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Card({ children, style = {} }: CardProps) {
  return (
    <div
      style={{
        background: COLORS.surface,
        borderRadius: 16,
        border: `1px solid ${COLORS.border}`,
        padding: "1.5rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
