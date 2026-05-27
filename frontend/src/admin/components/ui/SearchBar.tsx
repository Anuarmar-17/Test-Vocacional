"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) {
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <i
        className="ti ti-search"
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: 15,
          color: COLORS.textLight,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          paddingLeft: 36,
          paddingRight: 12,
          paddingTop: 8,
          paddingBottom: 8,
          borderRadius: 10,
          border: `1.5px solid ${COLORS.border}`,
          background: COLORS.surface,
          fontSize: 13.5,
          color: COLORS.text,
          outline: "none",
          width: 220,
          fontFamily: "inherit",
          transition: "border-color .15s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = COLORS.accent)}
        onBlur={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
      />
    </div>
  );
}
