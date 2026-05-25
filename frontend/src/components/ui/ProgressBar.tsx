import React from "react";

interface ProgressBarProps {
  value: number;
  color: string;
  max?: number;
}

export default function ProgressBar({ value, color, max = 80 }: ProgressBarProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div
      style={{
        background: "#EDEFF5",
        borderRadius: 99,
        height: 7,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: color,
          borderRadius: 99,
          transition: "width .5s ease",
        }}
      />
    </div>
  );
}
