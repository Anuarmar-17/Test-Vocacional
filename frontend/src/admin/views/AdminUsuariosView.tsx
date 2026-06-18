"use client";

import React, { useState, useMemo } from "react";

function timeAgo(iso: string): string {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "ahora";
  if (mins < 60) return `hace ${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `hace ${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `hace ${days} día${days > 1 ? "s" : ""}`;
}

function formatDate(iso: string): string {
  if (!iso) return "—";
  return iso.split("T")[0];
}
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import SearchBar from "@/src/admin/components/ui/SearchBar";
import Badge from "@/src/admin/components/ui/Badge";
import Modal, { ModalActions } from "@/src/admin/components/ui/Modal";
import BarChart from "@/src/admin/components/ui/Charts";
import { useAdmin } from "@/src/admin/context/AdminContext";
import { AdminUsuario, AREA_COLORS } from "@/src/admin/constants/adminData";

type FiltroTest = "todos" | "completado" | "pendiente";

export default function AdminUsuariosView() {
  const { usuarios } = useAdmin();

  const [search, setSearch]           = useState("");
  const [filtroArea, setFiltroArea]   = useState("todas");
  const [filtroTest, setFiltroTest]   = useState<FiltroTest>("todos");
  const [showDetail, setShowDetail]   = useState(false);
  const [selected, setSelected]       = useState<AdminUsuario | null>(null);

  const AREAS = ["Arte y Creatividad", "Ciencias Sociales", "Económica / Administrativa", "Ciencia y Tecnología", "Ciencias de la Salud"];

  // ── Filtered ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    return usuarios.filter((u) => {
      const matchSearch = u.nombre.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
      const matchArea   = filtroArea === "todas" || u.areaPrincipal === filtroArea;
      const matchTest   = filtroTest === "todos" || (filtroTest === "completado" ? u.testCompletado : !u.testCompletado);
      return matchSearch && matchArea && matchTest;
    });
  }, [usuarios, search, filtroArea, filtroTest]);

  function openDetail(u: AdminUsuario) { setSelected(u); setShowDetail(true); }

  const totalCompleted = usuarios.filter((u) => u.testCompletado).length;

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: COLORS.text, letterSpacing: "-0.4px" }}>
            Usuarios Registrados
          </h2>
          <p style={{ margin: "3px 0 0", fontSize: 13.5, color: COLORS.textMuted }}>
            {totalCompleted} con test completado · {usuarios.length} total
          </p>
        </div>
        {/* Export hint */}
        <button
          style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: COLORS.accent, border: `1.5px solid ${COLORS.accent}`, borderRadius: 10, padding: "9px 18px", fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all .12s" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.accentLight; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          <i className="ti ti-download" style={{ fontSize: 16 }} />
          Exportar lista
        </button>
      </div>

      {/* Summary mini-cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: "1.5rem" }}>
        {[
          { label: "Total usuarios",     value: usuarios.length,                                    color: COLORS.accent,    light: COLORS.accentLight,  icon: "ti-users" },
          { label: "Tests completados",  value: totalCompleted,                                     color: COLORS.teal,      light: COLORS.tealLight,    icon: "ti-clipboard-check" },
          { label: "En progreso",        value: usuarios.filter((u) => u.preguntasRespondidas > 0 && !u.testCompletado).length, color: COLORS.amber, light: COLORS.amberLight, icon: "ti-loader" },
          { label: "Sin iniciar",        value: usuarios.filter((u) => u.preguntasRespondidas === 0).length, color: COLORS.coral, light: COLORS.coralLight, icon: "ti-circle-x" },
        ].map((s) => (
          <div key={s.label} style={{ background: COLORS.surface, borderRadius: 14, border: `1px solid ${COLORS.border}`, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: s.light, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className={`ti ${s.icon}`} style={{ fontSize: 18, color: s.color }} />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: s.color }}>{s.value}</p>
              <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <Card style={{ padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar por nombre o email..." />

          <select value={filtroArea} onChange={(e) => setFiltroArea(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: 10, border: `1.5px solid ${COLORS.border}`, fontSize: 13, color: COLORS.text, background: COLORS.surface, fontFamily: "inherit", cursor: "pointer", outline: "none" }}>
            <option value="todas">Todas las áreas</option>
            {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>

          <div style={{ display: "flex", gap: 6 }}>
            {(["todos", "completado", "pendiente"] as FiltroTest[]).map((f) => (
              <button key={f} onClick={() => setFiltroTest(f)}
                style={{ padding: "7px 14px", borderRadius: 8, border: `1.5px solid ${filtroTest === f ? COLORS.accent : COLORS.border}`, background: filtroTest === f ? COLORS.accentLight : "transparent", color: filtroTest === f ? COLORS.accent : COLORS.textMuted, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all .12s" }}>
                {f === "todos" ? "Todos" : f === "completado" ? "Completados" : "Pendientes"}
              </button>
            ))}
          </div>

          <span style={{ marginLeft: "auto", fontSize: 12.5, color: COLORS.textMuted, fontWeight: 500 }}>
            {filtered.length} usuario{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </Card>

      {/* Table */}
      <Card style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: COLORS.bg }}>
              {["Usuario", "Email", "Registro", "Progreso test", "Área principal", "Última actividad", ""].map((h) => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px", borderBottom: `1px solid ${COLORS.border}`, whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={7} style={{ padding: "3rem", textAlign: "center", color: COLORS.textMuted, fontSize: 13.5 }}>
                <i className="ti ti-users-off" style={{ fontSize: 32, display: "block", marginBottom: 8, color: COLORS.textLight }} />
                No se encontraron usuarios
              </td></tr>
            ) : filtered.map((u, idx) => {
              const pct = Math.round((u.preguntasRespondidas / 80) * 100);
              return (
                <tr key={u.id}
                  style={{ borderBottom: idx < filtered.length - 1 ? `1px solid ${COLORS.border}` : "none", transition: "background .1s", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.bg)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  onClick={() => openDetail(u)}
                >
                  {/* Avatar + nombre */}
                  <td style={{ padding: "13px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: COLORS.accentMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: COLORS.accent, flexShrink: 0 }}>
                        {u.nombre.slice(0, 2).toUpperCase()}
                      </div>
                      <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: COLORS.text, whiteSpace: "nowrap" }}>{u.nombre}</p>
                    </div>
                  </td>
                  <td style={{ padding: "13px 16px", fontSize: 12.5, color: COLORS.textMuted }}>{u.email}</td>
                  <td style={{ padding: "13px 16px", fontSize: 12.5, color: COLORS.textMuted, whiteSpace: "nowrap" }}>{formatDate(u.fechaRegistro)}</td>
                  {/* Progress */}
                  <td style={{ padding: "13px 16px", minWidth: 140 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 6, borderRadius: 99, background: COLORS.accentLight, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${pct}%`, background: u.testCompletado ? COLORS.teal : COLORS.accent, borderRadius: 99, transition: "width .4s" }} />
                      </div>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: u.testCompletado ? COLORS.teal : COLORS.accent, flexShrink: 0 }}>{pct}%</span>
                    </div>
                    <p style={{ margin: "3px 0 0", fontSize: 11, color: COLORS.textLight }}>{u.preguntasRespondidas}/80 preguntas</p>
                  </td>
                  {/* Área */}
                  <td style={{ padding: "13px 16px" }}>
                    {u.areaPrincipal === "—" ? (
                      <span style={{ fontSize: 12.5, color: COLORS.textLight }}>—</span>
                    ) : (
                      <span style={{ background: u.areaLight, color: u.areaColor, fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, whiteSpace: "nowrap" }}>{u.areaPrincipal}</span>
                    )}
                  </td>
                  <td style={{ padding: "13px 16px", fontSize: 12, color: COLORS.textLight, whiteSpace: "nowrap" }}>{timeAgo(u.ultimaActividad)}</td>
                  <td style={{ padding: "13px 16px" }}>
                    <i className="ti ti-chevron-right" style={{ fontSize: 15, color: COLORS.textLight }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* ── Modal: Detalle usuario ── */}
      <Modal open={showDetail} onClose={() => setShowDetail(false)} title="Perfil del Usuario" width={520}>
        {selected && (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Header */}
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLORS.accentMid, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: COLORS.accent, flexShrink: 0 }}>
                {selected.nombre.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, color: COLORS.text }}>{selected.nombre}</p>
                <p style={{ margin: "2px 0 0", fontSize: 13, color: COLORS.textMuted }}>{selected.email}</p>
                <Badge color={selected.testCompletado ? COLORS.teal : COLORS.amber} light={selected.testCompletado ? COLORS.tealLight : COLORS.amberLight} dot>
                  {selected.testCompletado ? "Test completado" : "Test en progreso"}
                </Badge>
              </div>
            </div>

            {/* Info grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Fecha de registro", value: formatDate(selected.fechaRegistro), icon: "ti-calendar" },
                { label: "Última actividad",  value: timeAgo(selected.ultimaActividad), icon: "ti-clock" },
                { label: "Preguntas respondidas", value: `${selected.preguntasRespondidas} / 80`, icon: "ti-help-circle" },
                { label: "Área principal",    value: selected.areaPrincipal, icon: "ti-target" },
              ].map((d) => (
                <div key={d.label} style={{ background: COLORS.bg, borderRadius: 12, padding: "0.875rem 1rem", border: `1px solid ${COLORS.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <i className={`ti ${d.icon}`} style={{ fontSize: 13, color: COLORS.textLight }} />
                    <p style={{ margin: 0, fontSize: 10.5, color: COLORS.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".4px" }}>{d.label}</p>
                  </div>
                  <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: COLORS.text }}>{d.value}</p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted }}>Avance en el test vocacional</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: selected.testCompletado ? COLORS.teal : COLORS.accent }}>
                  {Math.round((selected.preguntasRespondidas / 80) * 100)}%
                </span>
              </div>
              <div style={{ height: 10, borderRadius: 99, background: COLORS.accentLight, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.round((selected.preguntasRespondidas / 80) * 100)}%`, background: selected.testCompletado ? COLORS.teal : COLORS.accent, borderRadius: 99, transition: "width .6s" }} />
              </div>
            </div>

            {/* Distribución de areas si test completado */}
            {selected.testCompletado && selected.resultadosPorArea && Object.keys(selected.resultadosPorArea).length > 0 && (
              <div>
                <p style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".4px" }}>Distribución de áreas (puntuación real)</p>
                <BarChart
                  data={Object.entries(selected.resultadosPorArea).map(([area, puntos]) => {
                    const colors = AREA_COLORS[area] || { color: "#6B7280", light: "#F3F4F6" };
                    return { label: area, value: puntos, color: colors.color, light: colors.light };
                  })}
                />
              </div>
            )}
          </div>
        )}
        <ModalActions onCancel={() => setShowDetail(false)} onConfirm={() => setShowDetail(false)} confirmLabel="Cerrar" />
      </Modal>
    </div>
  );
}
