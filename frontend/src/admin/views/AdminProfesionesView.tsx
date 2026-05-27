"use client";

import React, { useState, useMemo } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import SearchBar from "@/src/admin/components/ui/SearchBar";
import { StatusBadge } from "@/src/admin/components/ui/Badge";
import Modal, { FormField, FormInput, FormTextarea, FormSelect, ModalActions } from "@/src/admin/components/ui/Modal";
import { useAdmin } from "@/src/admin/context/AdminContext";
import { AdminProfesion } from "@/src/admin/constants/adminData";

const AREAS_OPCIONES = [
  { label: "Arte y Creatividad",          color: "#C0533A", light: "#FAF0ED" },
  { label: "Ciencias Sociales",           color: "#3A5BD9", light: "#EEF2FD" },
  { label: "Económica / Administrativa",  color: "#B06010", light: "#FDF5E8" },
  { label: "Ciencia y Tecnología",        color: "#0A7A70", light: "#E5F5F3" },
  { label: "Ciencias de la Salud",        color: "#5C2FA8", light: "#F0EAFB" },
];

const EMPTY_FORM = {
  nombre: "",
  area: AREAS_OPCIONES[0].label,
  areaColor: AREAS_OPCIONES[0].color,
  areaLight: AREAS_OPCIONES[0].light,
  descripcion: "",
  universidades: [] as string[],
  duracion: "4 años",
  activa: true,
};

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

export default function AdminProfesionesView() {
  const { profesiones, addProfesion, updateProfesion, deleteProfesion, toggleProfesionActiva } = useAdmin();

  const [search, setSearch]       = useState("");
  const [filtroArea, setFiltroArea] = useState("todas");
  const [viewMode, setViewMode]   = useState<"tabla" | "cards">("tabla");

  const [showCreate, setShowCreate] = useState(false);
  const [showEdit,   setShowEdit]   = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selected,   setSelected]   = useState<AdminProfesion | null>(null);
  const [form, setForm]             = useState(EMPTY_FORM);
  const [univInput, setUnivInput]   = useState("");

  // ── Filtered ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return profesiones.filter((p) => {
      const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) || p.area.toLowerCase().includes(search.toLowerCase());
      const matchArea   = filtroArea === "todas" || p.area === filtroArea;
      return matchSearch && matchArea;
    });
  }, [profesiones, search, filtroArea]);

  // ── Area change ───────────────────────────────────────────────────────────
  function handleAreaChange(label: string) {
    const opt = AREAS_OPCIONES.find((a) => a.label === label) ?? AREAS_OPCIONES[0];
    setForm((f) => ({ ...f, area: opt.label, areaColor: opt.color, areaLight: opt.light }));
  }

  // ── Universidades ─────────────────────────────────────────────────────────
  function addUniv() {
    const val = univInput.trim();
    if (val && !form.universidades.includes(val)) {
      setForm((f) => ({ ...f, universidades: [...f.universidades, val] }));
    }
    setUnivInput("");
  }
  function removeUniv(u: string) {
    setForm((f) => ({ ...f, universidades: f.universidades.filter((x) => x !== u) }));
  }

  // ── Handlers ──────────────────────────────────────────────────────────────
  function openCreate() {
    setForm(EMPTY_FORM);
    setUnivInput("");
    setShowCreate(true);
  }
  function openEdit(p: AdminProfesion) {
    setSelected(p);
    setForm({ nombre: p.nombre, area: p.area, areaColor: p.areaColor, areaLight: p.areaLight, descripcion: p.descripcion, universidades: [...p.universidades], duracion: p.duracion, activa: p.activa });
    setUnivInput("");
    setShowEdit(true);
  }
  function openDelete(p: AdminProfesion) { setSelected(p); setShowDelete(true); }
  function openDetail(p: AdminProfesion) { setSelected(p); setShowDetail(true); }

  function handleCreate() {
    if (!form.nombre.trim()) return;
    addProfesion(form);
    setShowCreate(false);
  }
  function handleEdit() {
    if (!selected || !form.nombre.trim()) return;
    updateProfesion(selected.id, form);
    setShowEdit(false);
  }
  function handleDelete() {
    if (!selected) return;
    deleteProfesion(selected.id);
    setShowDelete(false);
  }

  // ── Shared form body ──────────────────────────────────────────────────────
  function renderForm() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <FormField label="Nombre de la profesión" required>
          <FormInput value={form.nombre} onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))} placeholder="Ej: Ingeniería de Sistemas" />
        </FormField>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormField label="Área ocupacional" required>
            <FormSelect value={form.area} onChange={(e) => handleAreaChange(e.target.value)}>
              {AREAS_OPCIONES.map((a) => <option key={a.label} value={a.label}>{a.label}</option>)}
            </FormSelect>
          </FormField>
          <FormField label="Duración">
            <FormSelect value={form.duracion} onChange={(e) => setForm((f) => ({ ...f, duracion: e.target.value }))}>
              {["3 años","4 años","5 años","6 años"].map((d) => <option key={d} value={d}>{d}</option>)}
            </FormSelect>
          </FormField>
        </div>
        <FormField label="Descripción">
          <FormTextarea value={form.descripcion} onChange={(e) => setForm((f) => ({ ...f, descripcion: e.target.value }))} placeholder="Breve descripción de la profesión..." />
        </FormField>
        <FormField label="Universidades">
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <FormInput value={univInput} onChange={(e) => setUnivInput(e.target.value)} placeholder="Nombre universidad" onKeyDown={(e) => e.key === "Enter" && addUniv()} style={{ flex: 1 }} />
            <button onClick={addUniv} style={{ padding: "8px 14px", borderRadius: 9, border: `1.5px solid ${COLORS.accent}`, background: COLORS.accentLight, color: COLORS.accent, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>
              + Agregar
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {form.universidades.map((u) => (
              <span key={u} style={{ background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, fontWeight: 500, padding: "3px 10px", borderRadius: 99, display: "flex", alignItems: "center", gap: 5 }}>
                {u}
                <button onClick={() => removeUniv(u)} style={{ background: "none", border: "none", cursor: "pointer", color: COLORS.accent, lineHeight: 1, padding: 0, fontSize: 14 }}>×</button>
              </span>
            ))}
          </div>
        </FormField>
        <FormField label="Estado">
          <div style={{ display: "flex", gap: 8 }}>
            {[{ val: true, label: "Activa" }, { val: false, label: "Inactiva" }].map(({ val, label }) => (
              <button key={label} onClick={() => setForm((f) => ({ ...f, activa: val }))}
                style={{ padding: "7px 16px", borderRadius: 8, border: `1.5px solid ${form.activa === val ? COLORS.accent : COLORS.border}`, background: form.activa === val ? COLORS.accentLight : "transparent", color: form.activa === val ? COLORS.accent : COLORS.textMuted, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                {label}
              </button>
            ))}
          </div>
        </FormField>
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.4px" }}>
            Gestión de Profesiones
          </h2>
          <p style={{ margin: "3px 0 0", fontSize: 13.5, color: COLORS.textMuted }}>
            {profesiones.filter((p) => p.activa).length} activas · {profesiones.length} total
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {/* View toggle */}
          <div style={{ display: "flex", border: `1.5px solid ${COLORS.border}`, borderRadius: 10, overflow: "hidden" }}>
            {(["tabla", "cards"] as const).map((mode) => (
              <button key={mode} onClick={() => setViewMode(mode)}
                style={{ padding: "7px 12px", background: viewMode === mode ? COLORS.accentLight : "transparent", border: "none", color: viewMode === mode ? COLORS.accent : COLORS.textMuted, cursor: "pointer", transition: "all .12s" }}>
                <i className={`ti ${mode === "tabla" ? "ti-table" : "ti-layout-grid"}`} style={{ fontSize: 16 }} />
              </button>
            ))}
          </div>
          <button
            id="btn-nueva-profesion"
            onClick={openCreate}
            style={{ display: "flex", alignItems: "center", gap: 8, background: COLORS.accent, color: "#fff", border: "none", borderRadius: 10, padding: "10px 18px", fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "opacity .12s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <i className="ti ti-plus" style={{ fontSize: 16 }} />
            Nueva profesión
          </button>
        </div>
      </div>

      {/* Filters */}
      <Card style={{ padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar profesión..." />
          <select value={filtroArea} onChange={(e) => setFiltroArea(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: 10, border: `1.5px solid ${COLORS.border}`, fontSize: 13, color: COLORS.text, background: COLORS.surface, fontFamily: "inherit", cursor: "pointer", outline: "none" }}>
            <option value="todas">Todas las áreas</option>
            {AREAS_OPCIONES.map((a) => <option key={a.label} value={a.label}>{a.label}</option>)}
          </select>
          <span style={{ marginLeft: "auto", fontSize: 12.5, color: COLORS.textMuted, fontWeight: 500 }}>
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </Card>

      {/* Table view */}
      {viewMode === "tabla" && (
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: COLORS.bg }}>
                {["Profesión", "Área", "Duración", "Universidades", "Estado", "Acciones"].map((h) => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px", borderBottom: `1px solid ${COLORS.border}`, whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: "3rem", textAlign: "center", color: COLORS.textMuted, fontSize: 13.5 }}>
                  <i className="ti ti-search-off" style={{ fontSize: 32, display: "block", marginBottom: 8, color: COLORS.textLight }} />
                  No se encontraron profesiones
                </td></tr>
              ) : filtered.map((p, idx) => (
                <tr key={p.id} style={{ borderBottom: idx < filtered.length - 1 ? `1px solid ${COLORS.border}` : "none", transition: "background .1s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                  <td style={{ padding: "13px 16px" }}>
                    <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: COLORS.text }}>{p.nombre}</p>
                  </td>
                  <td style={{ padding: "13px 16px" }}>
                    <span style={{ background: p.areaLight, color: p.areaColor, fontSize: 11.5, fontWeight: 600, padding: "3px 10px", borderRadius: 20, whiteSpace: "nowrap" }}>{p.area}</span>
                  </td>
                  <td style={{ padding: "13px 16px", fontSize: 13, color: COLORS.textMuted }}>{p.duracion}</td>
                  <td style={{ padding: "13px 16px", fontSize: 13, color: COLORS.textMuted }}>{p.universidades.length} uni.</td>
                  <td style={{ padding: "13px 16px" }}><StatusBadge activa={p.activa} /></td>
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", gap: 4 }}>
                      <button onClick={() => openDetail(p)} title="Ver detalle" style={iconBtnStyle(COLORS.textMuted)} onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><i className="ti ti-eye" style={{ fontSize: 15 }} /></button>
                      <button onClick={() => toggleProfesionActiva(p.id)} title={p.activa ? "Desactivar" : "Activar"} style={iconBtnStyle(p.activa ? COLORS.teal : COLORS.textMuted)} onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><i className={`ti ${p.activa ? "ti-toggle-right" : "ti-toggle-left"}`} style={{ fontSize: 16 }} /></button>
                      <button onClick={() => openEdit(p)} title="Editar" style={iconBtnStyle(COLORS.accent)} onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.accentLight)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><i className="ti ti-pencil" style={{ fontSize: 15 }} /></button>
                      <button onClick={() => openDelete(p)} title="Eliminar" style={iconBtnStyle(COLORS.coral)} onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.coralLight)} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}><i className="ti ti-trash" style={{ fontSize: 15 }} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {/* Cards view */}
      {viewMode === "cards" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {filtered.map((p) => (
            <Card key={p.id} style={{ display: "flex", flexDirection: "column", gap: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ background: p.areaLight, color: p.areaColor, fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20 }}>{p.area}</span>
                <StatusBadge activa={p.activa} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: COLORS.text }}>{p.nombre}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12.5, color: COLORS.textMuted, lineHeight: 1.4 }}>{p.descripcion}</p>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 12, color: COLORS.textMuted }}>
                <span><i className="ti ti-clock" style={{ marginRight: 4 }} />{p.duracion}</span>
                <span><i className="ti ti-building" style={{ marginRight: 4 }} />{p.universidades.length} universidades</span>
              </div>
              <div style={{ display: "flex", gap: 6, borderTop: `1px solid ${COLORS.border}`, paddingTop: 12, marginTop: "auto" }}>
                <button onClick={() => openDetail(p)} style={{ flex: 1, padding: "7px", borderRadius: 8, border: `1.5px solid ${COLORS.border}`, background: "transparent", color: COLORS.textMuted, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Ver</button>
                <button onClick={() => openEdit(p)} style={{ flex: 1, padding: "7px", borderRadius: 8, border: `1.5px solid ${COLORS.accent}`, background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Editar</button>
                <button onClick={() => openDelete(p)} style={{ padding: "7px 10px", borderRadius: 8, border: `1.5px solid ${COLORS.border}`, background: "transparent", color: COLORS.coral, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}><i className="ti ti-trash" /></button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ── Modal: Crear ── */}
      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Nueva Profesión" width={560}>
        {renderForm()}
        <ModalActions onCancel={() => setShowCreate(false)} onConfirm={handleCreate} confirmLabel="Crear profesión" />
      </Modal>

      {/* ── Modal: Editar ── */}
      <Modal open={showEdit} onClose={() => setShowEdit(false)} title={`Editar: ${selected?.nombre}`} width={560}>
        {renderForm()}
        <ModalActions onCancel={() => setShowEdit(false)} onConfirm={handleEdit} confirmLabel="Guardar cambios" />
      </Modal>

      {/* ── Modal: Detalle ── */}
      <Modal open={showDetail} onClose={() => setShowDetail(false)} title="Detalle de Profesión" width={480}>
        {selected && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: selected.areaLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="ti ti-briefcase" style={{ fontSize: 22, color: selected.areaColor }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: COLORS.text }}>{selected.nombre}</p>
                <span style={{ background: selected.areaLight, color: selected.areaColor, fontSize: 11.5, fontWeight: 600, padding: "2px 9px", borderRadius: 20 }}>{selected.area}</span>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 13.5, color: COLORS.textMuted, lineHeight: 1.6 }}>{selected.descripcion || "Sin descripción."}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[{ label: "Duración", value: selected.duracion, icon: "ti-clock" }, { label: "Estado", value: selected.activa ? "Activa" : "Inactiva", icon: "ti-circle-check" }].map((d) => (
                <div key={d.label} style={{ background: COLORS.bg, borderRadius: 10, padding: "0.75rem 1rem", border: `1px solid ${COLORS.border}` }}>
                  <p style={{ margin: "0 0 4px", fontSize: 11, color: COLORS.textMuted, fontWeight: 600, textTransform: "uppercase" }}>{d.label}</p>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.text }}>{d.value}</p>
                </div>
              ))}
            </div>
            <div>
              <p style={{ margin: "0 0 8px", fontSize: 11, color: COLORS.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px" }}>Universidades</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {selected.universidades.length === 0 ? <span style={{ fontSize: 13, color: COLORS.textLight }}>Sin universidades registradas</span> : selected.universidades.map((u) => (
                  <span key={u} style={{ background: COLORS.accentLight, color: COLORS.accent, fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 99 }}>{u}</span>
                ))}
              </div>
            </div>
          </div>
        )}
        <ModalActions onCancel={() => setShowDetail(false)} onConfirm={() => { setShowDetail(false); if (selected) openEdit(selected); }} confirmLabel="Editar profesión" />
      </Modal>

      {/* ── Modal: Eliminar ── */}
      <Modal open={showDelete} onClose={() => setShowDelete(false)} title="Eliminar Profesión" width={420}>
        <div style={{ textAlign: "center", padding: "0.5rem 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLORS.coralLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
            <i className="ti ti-trash" style={{ fontSize: 24, color: COLORS.coral }} />
          </div>
          <p style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: COLORS.text }}>¿Eliminar "{selected?.nombre}"?</p>
          <p style={{ margin: 0, fontSize: 12.5, color: COLORS.coral }}>Esta acción no se puede deshacer.</p>
        </div>
        <ModalActions onCancel={() => setShowDelete(false)} onConfirm={handleDelete} confirmLabel="Eliminar" danger />
      </Modal>
    </div>
  );
}
