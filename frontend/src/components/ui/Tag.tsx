import React from "react";

interface TagProps {
  color: string;
  light: string;
  children: React.ReactNode;
}

export default function Tag({ color, light, children }: TagProps) {
  return (
    <span
      style={{
        background: light,
        color,
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 20,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
