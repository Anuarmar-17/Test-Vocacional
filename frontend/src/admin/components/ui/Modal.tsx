"use client";

import React from "react";
import { COLORS } from "@/src/constants/vocacional";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
}

export default function Modal({ open, onClose, title, children, width = 540 }: ModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backdropFilter: "blur(2px)",
        animation: "fadeIn .15s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 20,
          border: `1px solid ${COLORS.border}`,
          width: "100%",
          maxWidth: width,
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          animation: "slideUp .18s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.25rem 1.5rem",
            borderBottom: `1px solid ${COLORS.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: COLORS.text }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: `1px solid ${COLORS.border}`,
              borderRadius: 8,
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: COLORS.textMuted,
              transition: "background .12s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <i className="ti ti-x" style={{ fontSize: 15 }} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem", overflowY: "auto", flex: 1 }}>
          {children}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(16px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  );
}

// ─── Shared form field ────────────────────────────────────────────────────────

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 12.5, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".4px" }}>
        {label} {required && <span style={{ color: COLORS.coral }}>*</span>}
      </label>
      {children}
    </div>
  );
}

// ─── Shared text input ────────────────────────────────────────────────────────

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function FormInput(props: FormInputProps) {
  return (
    <input
      {...props}
      style={{
        padding: "9px 12px",
        borderRadius: 10,
        border: `1.5px solid ${COLORS.border}`,
        fontSize: 13.5,
        color: COLORS.text,
        background: COLORS.bg,
        fontFamily: "inherit",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        transition: "border-color .15s",
        ...props.style,
      }}
      onFocus={(e) => { e.currentTarget.style.borderColor = COLORS.accent; props.onFocus?.(e); }}
      onBlur={(e) => { e.currentTarget.style.borderColor = COLORS.border; props.onBlur?.(e); }}
    />
  );
}

// ─── Shared textarea ──────────────────────────────────────────────────────────

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function FormTextarea(props: FormTextareaProps) {
  return (
    <textarea
      {...props}
      style={{
        padding: "9px 12px",
        borderRadius: 10,
        border: `1.5px solid ${COLORS.border}`,
        fontSize: 13.5,
        color: COLORS.text,
        background: COLORS.bg,
        fontFamily: "inherit",
        outline: "none",
        width: "100%",
        minHeight: 80,
        resize: "vertical",
        boxSizing: "border-box",
        transition: "border-color .15s",
        ...props.style,
      }}
      onFocus={(e) => { e.currentTarget.style.borderColor = COLORS.accent; props.onFocus?.(e); }}
      onBlur={(e) => { e.currentTarget.style.borderColor = COLORS.border; props.onBlur?.(e); }}
    />
  );
}

// ─── Shared select ────────────────────────────────────────────────────────────

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function FormSelect(props: FormSelectProps) {
  return (
    <select
      {...props}
      style={{
        padding: "9px 12px",
        borderRadius: 10,
        border: `1.5px solid ${COLORS.border}`,
        fontSize: 13.5,
        color: COLORS.text,
        background: COLORS.bg,
        fontFamily: "inherit",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "border-color .15s",
        ...props.style,
      }}
      onFocus={(e) => { e.currentTarget.style.borderColor = COLORS.accent; props.onFocus?.(e); }}
      onBlur={(e) => { e.currentTarget.style.borderColor = COLORS.border; props.onBlur?.(e); }}
    />
  );
}

// ─── Modal action buttons ─────────────────────────────────────────────────────

interface ModalActionsProps {
  onCancel: () => void;
  onConfirm: () => void;
  confirmLabel?: string;
  confirmColor?: string;
  danger?: boolean;
}

export function ModalActions({
  onCancel,
  onConfirm,
  confirmLabel = "Guardar",
  confirmColor,
  danger = false,
}: ModalActionsProps) {
  const bg = confirmColor ?? (danger ? COLORS.coral : COLORS.accent);

  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: "1.25rem" }}>
      <button
        onClick={onCancel}
        style={{
          padding: "9px 20px",
          borderRadius: 10,
          border: `1.5px solid ${COLORS.border}`,
          background: "transparent",
          fontSize: 13.5,
          fontWeight: 600,
          color: COLORS.textMuted,
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "background .12s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        Cancelar
      </button>
      <button
        onClick={onConfirm}
        style={{
          padding: "9px 20px",
          borderRadius: 10,
          border: "none",
          background: bg,
          color: "#fff",
          fontSize: 13.5,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "opacity .12s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {confirmLabel}
      </button>
    </div>
  );
}
