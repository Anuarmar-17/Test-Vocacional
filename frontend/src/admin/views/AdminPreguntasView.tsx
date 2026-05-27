"use client";

import React, { useState, useMemo } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import SearchBar from "@/src/admin/components/ui/SearchBar";
import { StatusBadge } from "@/src/admin/components/ui/Badge";
import Modal, { FormField, FormInput, FormTextarea, FormSelect, ModalActions } from "@/src/admin/components/ui/Modal";
import { useAdmin } from "@/src/admin/context/AdminContext";
import { AdminPregunta } from "@/src/admin/constants/adminData";

const AREAS_OPCIONES = [
  { label: "Arte y Creatividad",          color: "#C0533A", light: "#FAF0ED" },
  { label: "Ciencias Sociales",           color: "#3A5BD9", light: "#EEF2FD" },
  { label: "Económica / Administrativa",  color: "#B06010", light: "#FDF5E8" },
  { label: "Ciencia y Tecnología",        color: "#0A7A70", light: "#E5F5F3" },
  { label: "Ciencias de la Salud",        color: "#5C2FA8", light: "#F0EAFB" },
];

const EMPTY_FORM = { area: AREAS_OPCIONES[0].label, areaColor: AREAS_OPCIONES[0].color, areaLight: AREAS_OPCIONES[0].light, texto: "", activa: true };

type FilterEstado = "todas" | "activas" | "inactivas";

export default function AdminPreguntasView() {
  const { preguntas, addPregunta, updatePregunta, deletePregunta, togglePreguntaActiva } = useAdmin();

  const [search, setSearch]           = useState("");
  const [filtroArea, setFiltroArea]   = useState("todas");
  const [filtroEstado, setFiltroEstado] = useState<FilterEstado>("todas");

  // Modal states
  const [showCreate, setShowCreate]   = useState(false);
  const [showEdit, setShowEdit]       = useState(false);
  const [showDelete, setShowDelete]   = useState(false);
  const [selected, setSelected]       = useState<AdminPregunta | null>(null);

  // Form state
  const [form, setForm] = useState(EMPTY_FORM);

  // ── Filtered list ─────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return preguntas.filter((p) => {
      const matchSearch = p.texto.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase());
      const matchArea   = filtroArea === "todas" || p.area === filtroArea;
      const matchEstado = filtroEstado === "todas" || (filtroEstado === "activas" ? p.activa : !p.activa);
      return matchSearch && matchArea && matchEstado;
    });
  }, [preguntas, search, filtroArea, filtroEstado]);

  // ── Handlers ──────────────────────────────────────────────────────────────
  function openCreate() {
    setForm(EMPTY_FORM);
    setShowCreate(true);
  }

  function openEdit(p: AdminPregunta) {
    setSelected(p);
    setForm({ area: p.area, areaColor: p.areaColor, areaLight: p.areaLight, texto: p.texto, activa: p.activa });
    setShowEdit(true);
  }

  function openDelete(p: AdminPregunta) {
    setSelected(p);
    setShowDelete(true);
  }

  function handleAreaChange(label: string) {
    const opt = AREAS_OPCIONES.find((a) => a.label === label) ?? AREAS_OPCIONES[0];
    setForm((f) => ({ ...f, area: opt.label, areaColor: opt.color, areaLight: opt.light }));
  }

  function handleCreate() {
    if (!form.texto.trim()) return;
    addPregunta(form);
    setShowCreate(false);
  }

  function handleEdit() {
    if (!selected || !form.texto.trim()) return;
    updatePregunta(selected.id, form);
    setShowEdit(false);
  }

  function handleDelete() {
    if (!selected) return;
    deletePregunta(selected.id);
    setShowDelete(false);
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.4px" }}>
            Gestión de Preguntas
          </h2>
          <p style={{ margin: "3px 0 0", fontSize: 13.5, color: COLORS.textMuted }}>
            {preguntas.filter((p) => p.activa).length} activas · {preguntas.length} total
          </p>
        </div>
        <button
          id="btn-nueva-pregunta"
          onClick={openCreate}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: COLORS.accent,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "10px 18px",
            fontSize: 13.5,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "opacity .12s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <i className="ti ti-plus" style={{ fontSize: 16 }} aria-hidden="true" />
          Nueva pregunta
        </button>
      </div>

      {/* Filters bar */}
      <Card style={{ padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar pregunta..." />

          <select
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              border: `1.5px solid ${COLORS.border}`,
              fontSize: 13,
              color: COLORS.text,
              background: COLORS.surface,
              fontFamily: "inherit",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="todas">Todas las áreas</option>
            {AREAS_OPCIONES.map((a) => (
              <option key={a.label} value={a.label}>{a.label}</option>
            ))}
          </select>

          <div style={{ display: "flex", gap: 6 }}>
            {(["todas", "activas", "inactivas"] as FilterEstado[]).map((f) => (
              <button
                key={f}
                onClick={() => setFiltroEstado(f)}
                style={{
                  padding: "7px 14px",
                  borderRadius: 8,
                  border: `1.5px solid ${filtroEstado === f ? COLORS.accent : COLORS.border}`,
                  background: filtroEstado === f ? COLORS.accentLight : "transparent",
                  color: filtroEstado === f ? COLORS.accent : COLORS.textMuted,
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "capitalize",
                  transition: "all .12s",
                }}
              >
                {f === "todas" ? "Todas" : f === "activas" ? "Activas" : "Inactivas"}
              </button>
            ))}
          </div>

          <span style={{ marginLeft: "auto", fontSize: 12.5, color: COLORS.textMuted, fontWeight: 500 }}>
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </Card>

      {/* Table */}
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: COLORS.bg }}>
              {["#", "Pregunta", "Área", "Fecha", "Estado", "Acciones"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: 11,
                    fontWeight: 700,
                    color: COLORS.textMuted,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    borderBottom: `1px solid ${COLORS.border}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ padding: "3rem", textAlign: "center", color: COLORS.textMuted, fontSize: 13.5 }}>
                  <i className="ti ti-search-off" style={{ fontSize: 32, display: "block", marginBottom: 8, color: COLORS.textLight }} />
                  No se encontraron preguntas
                </td>
              </tr>
            ) : (
              filtered.map((p, idx) => (
                <tr
                  key={p.id}
                  style={{
                    borderBottom: idx < filtered.length - 1 ? `1px solid ${COLORS.border}` : "none",
                    transition: "background .1s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "13px 16px", fontSize: 12.5, color: COLORS.textLight, fontWeight: 600, width: 40 }}>
                    {p.id}
                  </td>
                  <td style={{ padding: "13px 16px", maxWidth: 340 }}>
                    <p style={{ margin: 0, fontSize: 13.5, color: COLORS.text, lineHeight: 1.4 }}>
                      {p.texto}
                    </p>
                  </td>
                  <td style={{ padding: "13px 16px" }}>
                    <span
                      style={{
                        background: p.areaLight,
                        color: p.areaColor,
                        fontSize: 11.5,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 20,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.area}
                    </span>
                  </td>
                  <td style={{ padding: "13px 16px", fontSize: 12.5, color: COLORS.textMuted, whiteSpace: "nowrap" }}>
                    {p.createdAt}
                  </td>
                  <td style={{ padding: "13px 16px" }}>
                    <StatusBadge activa={p.activa} />
                  </td>
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      {/* Toggle */}
                      <button
                        onClick={() => togglePreguntaActiva(p.id)}
                        title={p.activa ? "Desactivar" : "Activar"}
                        style={iconBtnStyle(p.activa ? COLORS.teal : COLORS.textMuted)}
                        onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <i className={`ti ${p.activa ? "ti-toggle-right" : "ti-toggle-left"}`} style={{ fontSize: 16 }} />
                      </button>
                      {/* Edit */}
                      <button
                        onClick={() => openEdit(p)}
                        title="Editar"
                        style={iconBtnStyle(COLORS.accent)}
                        onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.accentLight)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <i className="ti ti-pencil" style={{ fontSize: 15 }} />
                      </button>
                      {/* Delete */}
                      <button
                        onClick={() => openDelete(p)}
                        title="Eliminar"
                        style={iconBtnStyle(COLORS.coral)}
                        onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.coralLight)}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <i className="ti ti-trash" style={{ fontSize: 15 }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Card>

      {/* ── Modal: Crear ─────────────────────────────────────────────────────── */}
      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Nueva Pregunta">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <FormField label="Área ocupacional" required>
            <FormSelect value={form.area} onChange={(e) => handleAreaChange(e.target.value)}>
              {AREAS_OPCIONES.map((a) => <option key={a.label} value={a.label}>{a.label}</option>)}
            </FormSelect>
          </FormField>
          <FormField label="Texto de la pregunta" required>
            <FormTextarea
              value={form.texto}
              onChange={(e) => setForm((f) => ({ ...f, texto: e.target.value }))}
              placeholder="Escribe la pregunta del test..."
              style={{ minHeight: 100 }}
            />
          </FormField>
          <FormField label="Estado inicial">
            <div style={{ display: "flex", gap: 8 }}>
              {[{ val: true, label: "Activa" }, { val: false, label: "Inactiva" }].map(({ val, label }) => (
                <button
                  key={label}
                  onClick={() => setForm((f) => ({ ...f, activa: val }))}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 8,
                    border: `1.5px solid ${form.activa === val ? COLORS.accent : COLORS.border}`,
                    background: form.activa === val ? COLORS.accentLight : "transparent",
                    color: form.activa === val ? COLORS.accent : COLORS.textMuted,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </FormField>
        </div>
        <ModalActions onCancel={() => setShowCreate(false)} onConfirm={handleCreate} confirmLabel="Crear pregunta" />
      </Modal>

      {/* ── Modal: Editar ─────────────────────────────────────────────────────── */}
      <Modal open={showEdit} onClose={() => setShowEdit(false)} title={`Editar Pregunta #${selected?.id}`}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <FormField label="Área ocupacional" required>
            <FormSelect value={form.area} onChange={(e) => handleAreaChange(e.target.value)}>
              {AREAS_OPCIONES.map((a) => <option key={a.label} value={a.label}>{a.label}</option>)}
            </FormSelect>
          </FormField>
          <FormField label="Texto de la pregunta" required>
            <FormTextarea
              value={form.texto}
              onChange={(e) => setForm((f) => ({ ...f, texto: e.target.value }))}
              style={{ minHeight: 100 }}
            />
          </FormField>
          <FormField label="Estado">
            <div style={{ display: "flex", gap: 8 }}>
              {[{ val: true, label: "Activa" }, { val: false, label: "Inactiva" }].map(({ val, label }) => (
                <button
                  key={label}
                  onClick={() => setForm((f) => ({ ...f, activa: val }))}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 8,
                    border: `1.5px solid ${form.activa === val ? COLORS.accent : COLORS.border}`,
                    background: form.activa === val ? COLORS.accentLight : "transparent",
                    color: form.activa === val ? COLORS.accent : COLORS.textMuted,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </FormField>
        </div>
        <ModalActions onCancel={() => setShowEdit(false)} onConfirm={handleEdit} confirmLabel="Guardar cambios" />
      </Modal>

      {/* ── Modal: Eliminar ──────────────────────────────────────────────────── */}
      <Modal open={showDelete} onClose={() => setShowDelete(false)} title="Eliminar Pregunta" width={420}>
        <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: COLORS.coralLight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
            }}
          >
            <i className="ti ti-trash" style={{ fontSize: 24, color: COLORS.coral }} />
          </div>
          <p style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: COLORS.text }}>
            ¿Eliminar esta pregunta?
          </p>
          <p style={{ margin: 0, fontSize: 13, color: COLORS.textMuted, lineHeight: 1.5 }}>
            "{selected?.texto}"
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 12.5, color: COLORS.coral }}>
            Esta acción no se puede deshacer.
          </p>
        </div>
        <ModalActions onCancel={() => setShowDelete(false)} onConfirm={handleDelete} confirmLabel="Eliminar" danger />
      </Modal>
    </div>
  );
}

// ─── Shared icon-button style helper ─────────────────────────────────────────
function iconBtnStyle(color: string): React.CSSProperties {
  return {
    background: "transparent",
    border: "none",
    borderRadius: 7,
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color,
    transition: "background .12s",
  };
}
