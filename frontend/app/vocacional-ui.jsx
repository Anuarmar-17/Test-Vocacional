import { useState } from "react";

const COLORS = {
  accent: "#4F6AF5",
  accentLight: "#EEF1FF",
  accentMid: "#C7D0FD",
  teal: "#0F9B8E",
  tealLight: "#E0F5F3",
  coral: "#E85D4A",
  coralLight: "#FDF0EE",
  amber: "#D97706",
  amberLight: "#FEF3C7",
  text: "#1A1A2E",
  textMuted: "#6B7280",
  textLight: "#9CA3AF",
  bg: "#F8F9FE",
  surface: "#FFFFFF",
  border: "rgba(0,0,0,0.08)",
  borderMid: "rgba(0,0,0,0.14)",
  sidebar: "#FFFFFF",
  sidebarBorder: "rgba(0,0,0,0.07)",
};

const AREAS = [
  { id: "arte",      label: "Arte y Creatividad",          color: "#C0533A", light: "#FAF0ED", score: 72 },
  { id: "social",    label: "Ciencias Sociales",           color: "#3A5BD9", light: "#EEF2FD", score: 58 },
  { id: "economica", label: "Económica / Administrativa",  color: "#B06010", light: "#FDF5E8", score: 44 },
  { id: "tecnologia",label: "Ciencia y Tecnología",        color: "#0A7A70", light: "#E5F5F3", score: 61 },
  { id: "salud",     label: "Ciencias de la Salud",        color: "#5C2FA8", light: "#F0EAFB", score: 35 },
];

const PROFESIONES = {
  arte:      ["Diseño Gráfico", "Arquitectura", "Comunicación Social", "Publicidad", "Bellas Artes"],
  tecnologia:["Ingeniería de Sistemas", "Ingeniería Electrónica", "Biotecnología", "Física", "Matemáticas"],
};

const PREGUNTAS_MUESTRA = [
  { id: 1, area: "arte",       texto: "Me gusta dibujar, pintar o crear objetos artísticos" },
  { id: 2, area: "social",     texto: "Disfruto ayudando a resolver conflictos entre personas" },
  { id: 3, area: "tecnologia", texto: "Me interesa aprender cómo funcionan los computadores" },
  { id: 4, area: "economica",  texto: "Me atrae administrar recursos y planear presupuestos" },
  { id: 5, area: "salud",      texto: "Me preocupa el bienestar físico y emocional de las personas" },
  { id: 6, area: "arte",       texto: "Me gusta la fotografía, el cine o el teatro" },
  { id: 7, area: "tecnologia", texto: "Disfruto resolviendo problemas matemáticos complejos" },
  { id: 8, area: "social",     texto: "Me interesa la psicología y el comportamiento humano" },
];

const NAV_LINKS = [
  { id: "dashboard",        label: "Inicio",            icon: "ti-home" },
  { id: "autoconocimiento", label: "Autoconocimiento",  icon: "ti-user" },
  { id: "test",             label: "Test Vocacional",   icon: "ti-clipboard-list" },
  { id: "resultados",       label: "Resultados",        icon: "ti-chart-bar" },
  { id: "proyecto",         label: "Proyecto de Vida",  icon: "ti-map" },
];

function Tag({ color, light, children }) {
  return (
    <span style={{
      background: light, color, fontSize: 12, fontWeight: 500,
      padding: "3px 10px", borderRadius: 20, display: "inline-block"
    }}>{children}</span>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: COLORS.surface, borderRadius: 16, border: `1px solid ${COLORS.border}`,
      padding: "1.5rem", ...style
    }}>{children}</div>
  );
}

function ProgressBar({ value, color, max = 80 }) {
  return (
    <div style={{ background: "#EDEFF5", borderRadius: 99, height: 7, overflow: "hidden" }}>
      <div style={{
        width: `${(value / max) * 100}%`, height: "100%", background: color,
        borderRadius: 99, transition: "width .5s ease"
      }} />
    </div>
  );
}

// ── SIDEBAR ────────────────────────────────────────────────────────────────
function Sidebar({ active, onNav, userName }) {
  return (
    <aside style={{
      width: 220, minWidth: 220, background: COLORS.sidebar,
      borderRight: `1px solid ${COLORS.sidebarBorder}`,
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0,
    }}>
      {/* Logo */}
      <div style={{
        padding: "1.4rem 1.5rem 1rem",
        borderBottom: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10, background: COLORS.accent,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <i className="ti ti-compass" style={{ color: "#fff", fontSize: 18 }} aria-hidden="true" />
        </div>
        <span style={{ fontWeight: 700, fontSize: 15.5, color: COLORS.text, letterSpacing: "-0.3px" }}>
          VocaTest
        </span>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: "1rem 0.75rem", display: "flex", flexDirection: "column", gap: 2 }}>
        <p style={{
          fontSize: 10.5, fontWeight: 600, color: COLORS.textLight,
          textTransform: "uppercase", letterSpacing: "0.6px",
          margin: "0 0 8px 8px",
        }}>Menú</p>
        {NAV_LINKS.map(l => {
          const isActive = active === l.id;
          return (
            <button key={l.id} onClick={() => onNav(l.id)} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: isActive ? COLORS.accentLight : "transparent",
              color: isActive ? COLORS.accent : COLORS.textMuted,
              border: "none", cursor: "pointer",
              padding: "9px 12px", borderRadius: 10,
              fontSize: 13.5, fontWeight: isActive ? 600 : 400,
              textAlign: "left", width: "100%",
              transition: "all .12s",
            }}>
              <i className={`ti ${l.icon}`} style={{ fontSize: 17, flexShrink: 0 }} aria-hidden="true" />
              {l.label}
            </button>
          );
        })}
      </nav>

      {/* User footer */}
      <div style={{
        padding: "1rem 1.25rem",
        borderTop: `1px solid ${COLORS.sidebarBorder}`,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%", background: COLORS.accentMid,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: COLORS.accent, flexShrink: 0,
        }}>
          {userName ? userName.slice(0, 2).toUpperCase() : "US"}
        </div>
        <div style={{ overflow: "hidden" }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: COLORS.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {userName}
          </p>
          <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>Estudiante</p>
        </div>
      </div>
    </aside>
  );
}

// ── TOPBAR ─────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header style={{
      height: 52, background: COLORS.surface,
      borderBottom: `1px solid ${COLORS.sidebarBorder}`,
      display: "flex", alignItems: "center",
      padding: "0 2rem", gap: 12,
      position: "sticky", top: 0, zIndex: 50,
    }}>
      <div style={{ flex: 1 }} />
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: COLORS.bg, borderRadius: 8, padding: "6px 12px",
        border: `1px solid ${COLORS.border}`, cursor: "text",
      }}>
        <i className="ti ti-search" style={{ fontSize: 14, color: COLORS.textLight }} aria-hidden="true" />
        <span style={{ fontSize: 13, color: COLORS.textLight }}>Buscar...</span>
      </div>
      <button style={{
        background: "transparent", border: `1px solid ${COLORS.border}`,
        borderRadius: 8, width: 34, height: 34, display: "flex",
        alignItems: "center", justifyContent: "center", cursor: "pointer",
      }}>
        <i className="ti ti-bell" style={{ fontSize: 17, color: COLORS.textMuted }} aria-hidden="true" />
      </button>
    </header>
  );
}

// ── DASHBOARD ──────────────────────────────────────────────────────────────
function Dashboard({ onNav }) {
  const steps = [
    { id: "autoconocimiento", label: "Autoconocimiento", desc: "Reflexiona sobre quién eres", icon: "ti-user-search", done: true,  color: COLORS.teal  },
    { id: "test",             label: "Test Vocacional",  desc: "80 preguntas de interés",    icon: "ti-clipboard-list", done: false, active: true, color: COLORS.accent },
    { id: "resultados",       label: "Resultados",       desc: "Conoce tus áreas top",       icon: "ti-chart-bar", done: false, color: COLORS.coral  },
    { id: "proyecto",         label: "Proyecto de Vida", desc: "Define tu futuro",           icon: "ti-map",       done: false, color: COLORS.amber  },
  ];

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ color: COLORS.textMuted, fontSize: 14, margin: 0 }}>Bienvenido de vuelta</p>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "4px 0 0", color: COLORS.text, letterSpacing: "-0.5px" }}>
          Hola, María
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: "2rem" }}>
        {[
          { label: "Módulos completados", value: "1 / 4",  color: COLORS.teal  },
          { label: "Preguntas respondidas", value: "24 / 80", color: COLORS.accent },
          { label: "Perfil completado",    value: "30%",   color: COLORS.coral  },
        ].map(s => (
          <Card key={s.label} style={{ padding: "1.25rem" }}>
            <p style={{ margin: "0 0 6px", fontSize: 11.5, color: COLORS.textMuted, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".5px" }}>{s.label}</p>
            <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: s.color }}>{s.value}</p>
          </Card>
        ))}
      </div>

      <Card style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px", margin: "0 0 1.5rem" }}>
          Tu recorrido
        </p>
        <div style={{ display: "flex", gap: 0, position: "relative" }}>
          <div style={{
            position: "absolute", top: 21, left: "12.5%", right: "12.5%",
            height: 2, background: COLORS.border, zIndex: 0
          }} />
          {steps.map(s => (
            <div key={s.id} onClick={() => onNav(s.id)} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              gap: 10, cursor: "pointer", position: "relative", zIndex: 1,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: s.done ? s.color : s.active ? s.color : "#EDEFF5",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: s.active ? `0 0 0 4px ${s.color}22` : "none",
                transition: "all .2s",
              }}>
                {s.done
                  ? <i className="ti ti-check" style={{ color: "#fff", fontSize: 18 }} aria-hidden="true" />
                  : <i className={`ti ${s.icon}`} style={{ color: s.active ? "#fff" : COLORS.textLight, fontSize: 18 }} aria-hidden="true" />
                }
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: s.active || s.done ? COLORS.text : COLORS.textLight }}>{s.label}</p>
                <p style={{ margin: "2px 0 0", fontSize: 11.5, color: COLORS.textMuted }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card>
          <p style={{ margin: "0 0 1rem", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>Continuar test</p>
          <p style={{ margin: "0 0 12px", fontSize: 14, color: COLORS.text }}>Llevas 24 de 80 preguntas respondidas.</p>
          <ProgressBar value={24} color={COLORS.accent} />
          <button onClick={() => onNav("test")} style={{
            marginTop: 16, background: COLORS.accent, color: "#fff", border: "none",
            borderRadius: 10, padding: "10px 20px", fontSize: 14, fontWeight: 600,
            cursor: "pointer", width: "100%",
          }}>Continuar test →</button>
        </Card>
        <Card>
          <p style={{ margin: "0 0 1rem", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>Módulo completado</p>
          <div style={{
            background: COLORS.tealLight, borderRadius: 12, padding: "1rem",
            display: "flex", gap: 12, alignItems: "center",
          }}>
            <i className="ti ti-circle-check" style={{ fontSize: 28, color: COLORS.teal }} aria-hidden="true" />
            <div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: COLORS.teal }}>Autoconocimiento</p>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.textMuted }}>Completado · 5 reflexiones guardadas</p>
            </div>
          </div>
          <button onClick={() => onNav("autoconocimiento")} style={{
            marginTop: 12, background: "transparent", color: COLORS.teal,
            border: `1.5px solid ${COLORS.teal}`, borderRadius: 10,
            padding: "10px 20px", fontSize: 14, fontWeight: 600,
            cursor: "pointer", width: "100%",
          }}>Revisar respuestas</button>
        </Card>
      </div>
    </div>
  );
}

// ── AUTOCONOCIMIENTO ───────────────────────────────────────────────────────
function Autoconocimiento() {
  const [tab, setTab] = useState(0);
  const [vals, setVals] = useState({});
  const tabs = ["¿Quién soy?", "Mis valores", "Metas personales"];
  const questions = [
    ["¿Cuáles son tus principales fortalezas?", "¿Qué actividades te hacen perder la noción del tiempo?", "¿Cómo te describirías en 3 palabras?"],
    ["¿Qué es lo más importante para ti en la vida?", "¿Qué valores guían tus decisiones?", "¿Qué principios nunca comprometerías?"],
    ["¿Qué quieres lograr en los próximos 2 años?", "¿Cuál es tu sueño profesional?", "¿Qué obstáculos debes superar?"],
  ];
  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color={COLORS.teal} light={COLORS.tealLight}>Módulo 1</Tag>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 4px", color: COLORS.text, letterSpacing: "-.5px" }}>Autoconocimiento</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>Reflexiona sobre ti mismo antes de explorar tus intereses vocacionales.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              background: tab === i ? COLORS.tealLight : "transparent",
              color: tab === i ? COLORS.teal : COLORS.textMuted,
              border: tab === i ? `1.5px solid ${COLORS.teal}33` : `1px solid ${COLORS.border}`,
              borderRadius: 12, padding: "12px 16px", fontSize: 14, fontWeight: tab === i ? 600 : 400,
              cursor: "pointer", textAlign: "left",
            }}>{t}</button>
          ))}
          <Card style={{ marginTop: 8, background: COLORS.accentLight, border: `1px solid ${COLORS.accentMid}`, padding: "1rem" }}>
            <p style={{ margin: "0 0 6px", fontSize: 12, fontWeight: 600, color: COLORS.accent }}>
              <i className="ti ti-brain" style={{ marginRight: 6 }} aria-hidden="true" />
              Inteligencia emocional
            </p>
            <p style={{ margin: 0, fontSize: 12, color: COLORS.textMuted, lineHeight: 1.6 }}>
              Reconocer tus emociones te ayuda a tomar mejores decisiones vocacionales.
            </p>
          </Card>
        </div>
        <Card>
          <h3 style={{ margin: "0 0 1.25rem", fontSize: 16, fontWeight: 600, color: COLORS.text }}>{tabs[tab]}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {questions[tab].map((q, i) => (
              <div key={i}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: COLORS.text, marginBottom: 8 }}>{q}</label>
                <textarea
                  value={vals[`${tab}-${i}`] || ""}
                  onChange={e => setVals(v => ({ ...v, [`${tab}-${i}`]: e.target.value }))}
                  placeholder="Escribe tu reflexión aquí..."
                  style={{
                    width: "100%", minHeight: 80, borderRadius: 10, border: `1px solid ${COLORS.border}`,
                    padding: 12, fontSize: 14, resize: "vertical", color: COLORS.text,
                    fontFamily: "inherit", background: COLORS.bg, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
            <button style={{
              background: COLORS.teal, color: "#fff", border: "none", borderRadius: 10,
              padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
            }}>Guardar reflexiones</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ── TEST VOCACIONAL ────────────────────────────────────────────────────────
function TestVocacional() {
  const [answers, setAnswers] = useState({});
  const total = 80;
  const answered = Object.keys(answers).length;
  const percent = Math.round((answered / total) * 100);
  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div>
          <Tag color={COLORS.accent} light={COLORS.accentLight}>Módulo 2</Tag>
          <h2 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 4px", color: COLORS.text, letterSpacing: "-.5px" }}>Test Vocacional</h2>
          <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>Responde con honestidad. No hay respuestas correctas o incorrectas.</p>
        </div>
        <Card style={{ padding: "1rem 1.5rem", textAlign: "center", minWidth: 120 }}>
          <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: COLORS.accent }}>{answered}</p>
          <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.textMuted }}>de {total}</p>
        </Card>
      </div>
      <Card style={{ marginBottom: 20, padding: "1rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>Progreso general</span>
          <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>{percent}%</span>
        </div>
        <ProgressBar value={answered} color={COLORS.accent} max={total} />
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {AREAS.map(a => <Tag key={a.id} color={a.color} light={a.light}>{a.label}</Tag>)}
        </div>
      </Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PREGUNTAS_MUESTRA.map(q => {
          const area = AREAS.find(a => a.id === q.area);
          return (
            <Card key={q.id} style={{ padding: "1.25rem 1.5rem" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{
                  minWidth: 30, height: 30, borderRadius: "50%", background: area?.light,
                  color: area?.color, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>{q.id}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: "0 0 12px", fontSize: 14.5, color: COLORS.text, lineHeight: 1.5 }}>{q.texto}</p>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Me interesa", "No me interesa"].map(opt => {
                      const isActive = answers[q.id] === opt;
                      const isInterest = opt === "Me interesa";
                      const ac = isInterest ? COLORS.teal : COLORS.coral;
                      const al = isInterest ? COLORS.tealLight : COLORS.coralLight;
                      return (
                        <button key={opt} onClick={() => setAnswers(a => ({ ...a, [q.id]: opt }))} style={{
                          background: isActive ? al : "#F8F9FE",
                          color: isActive ? ac : COLORS.textMuted,
                          border: isActive ? `1.5px solid ${ac}` : `1px solid ${COLORS.border}`,
                          borderRadius: 10, padding: "8px 18px", fontSize: 13.5,
                          fontWeight: isActive ? 600 : 400, cursor: "pointer", transition: "all .15s",
                        }}>
                          {isInterest ? "✓ " : "✗ "}{opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 12 }}>
        <button style={{
          background: COLORS.surface, color: COLORS.textMuted, border: `1px solid ${COLORS.border}`,
          borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer",
        }}>Guardar avance</button>
        <button style={{
          background: COLORS.accent, color: "#fff", border: "none",
          borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
        }}>Siguiente bloque →</button>
      </div>
    </div>
  );
}

// ── RESULTADOS ─────────────────────────────────────────────────────────────
function Resultados() {
  const sorted = [...AREAS].sort((a, b) => b.score - a.score);
  const top = sorted[0];
  const second = sorted[1];

  // Muted neutral palette for the top cards
  const RANK_COLORS = [
    { bg: "#F5F6FA", border: "#DDE0EC", badge: { bg: "#E8EAFA", text: "#3A4DB0" }, rank: "1er lugar" },
    { bg: "#F7F7F5", border: "#E2E0D8", badge: { bg: "#EDECE5", text: "#6B6450" }, rank: "2do lugar" },
  ];

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color="#5060B8" light="#EAECF8">Módulo 3</Tag>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 4px", color: COLORS.text, letterSpacing: "-.5px" }}>
          Tus Resultados
        </h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
          Basado en tus respuestas, estas son tus áreas vocacionales destacadas.
        </p>
      </div>

      {/* Top 2 cards — calm, no emoji */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: "1.5rem" }}>
        {[top, second].map((area, idx) => {
          const rc = RANK_COLORS[idx];
          return (
            <div key={area.id} style={{
              background: rc.bg, borderRadius: 16,
              border: `1px solid ${rc.border}`,
              padding: "1.5rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 400, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".6px" }}>
                    {idx === 0 ? "Área principal" : "Área secundaria"}
                  </p>
                  <p style={{ margin: 0, fontSize: 17, fontWeight: 500, color: COLORS.text }}>{area.label}</p>
                </div>
                <span style={{
                  fontSize: 11.5, fontWeight: 600, padding: "4px 10px", borderRadius: 8,
                  background: rc.badge.bg, color: rc.badge.text,
                }}>{rc.rank}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: COLORS.text }}>{area.score}</span>
                <span style={{ fontSize: 13, color: COLORS.textMuted }}>/ 80 pts</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <ProgressBar value={area.score} color={idx === 0 ? "#4F6AF5" : "#9CA3AF"} max={80} />
              </div>
            </div>
          );
        })}
      </div>

      {/* All areas bar chart */}
      <Card style={{ marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 1.25rem", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".5px" }}>
          Puntaje por área
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {sorted.map((area, idx) => (
            <div key={area.id}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13.5, fontWeight: idx < 2 ? 600 : 400, color: idx < 2 ? COLORS.text : COLORS.textMuted }}>
                  {area.label}
                </span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: idx < 2 ? COLORS.text : COLORS.textMuted }}>
                  {area.score} pts
                </span>
              </div>
              <ProgressBar value={area.score} color={idx === 0 ? "#4F6AF5" : idx === 1 ? "#9CA3AF" : "#D1D5DB"} max={80} />
            </div>
          ))}
        </div>
      </Card>

      {/* Career recommendations */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: "1.5rem" }}>
        {[top, second].map((area, idx) => (
          <Card key={area.id}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8, background: COLORS.accentLight,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="ti ti-school" style={{ fontSize: 16, color: COLORS.accent }} aria-hidden="true" />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: COLORS.text }}>{area.label}</p>
                <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>{idx === 0 ? "Área principal" : "Área secundaria"}</p>
              </div>
            </div>
            <p style={{ margin: "0 0 10px", fontSize: 11.5, fontWeight: 600, color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: ".4px" }}>
              Carreras recomendadas
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {(PROFESIONES[area.id] || ["Pendiente de configurar"]).map(p => (
                <div key={p} style={{
                  background: COLORS.bg, borderRadius: 8, padding: "8px 12px",
                  fontSize: 13.5, color: COLORS.text, border: `1px solid ${COLORS.border}`,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <i className="ti ti-arrow-right" style={{ fontSize: 14, color: COLORS.textLight }} aria-hidden="true" />
                  {p}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button style={{
          background: COLORS.accent, color: "#fff", border: "none",
          borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <i className="ti ti-file-download" style={{ fontSize: 16 }} aria-hidden="true" />
          Descargar resultados PDF
        </button>
        <button style={{
          background: COLORS.surface, color: COLORS.textMuted, border: `1px solid ${COLORS.border}`,
          borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <i className="ti ti-printer" style={{ fontSize: 16 }} aria-hidden="true" />
          Imprimir
        </button>
      </div>
    </div>
  );
}

// ── PROYECTO DE VIDA ───────────────────────────────────────────────────────
function ProyectoVida() {
  const [vals, setVals] = useState({});
  const set = (k, v) => setVals(prev => ({ ...prev, [k]: v }));
  const metas = [
    { id: "corto",   label: "Corto plazo",   desc: "En los próximos 6 meses", icon: "ti-target",    color: COLORS.teal  },
    { id: "mediano", label: "Mediano plazo",  desc: "En 1 a 3 años",           icon: "ti-calendar",  color: COLORS.accent },
    { id: "largo",   label: "Largo plazo",    desc: "En 5 años o más",         icon: "ti-rocket",    color: COLORS.coral  },
  ];
  const academico = [
    "¿Tienes claro qué carrera quieres estudiar?",
    "¿Conoces los requisitos de admisión de tu institución de interés?",
    "¿Has investigado opciones de financiamiento (becas, créditos)?",
    "¿Tienes el apoyo de tu familia para continuar estudiando?",
  ];
  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color={COLORS.amber} light={COLORS.amberLight}>Módulo 4</Tag>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 4px", color: COLORS.text, letterSpacing: "-.5px" }}>Mi Proyecto de Vida</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>Define tu visión, metas y compromisos para construir tu futuro.</p>
      </div>
      <Card style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600, color: COLORS.text }}>
          <i className="ti ti-star" style={{ marginRight: 8, color: COLORS.amber }} aria-hidden="true" />
          Mi visión personal
        </h3>
        <textarea
          value={vals.vision || ""}
          onChange={e => set("vision", e.target.value)}
          placeholder="Describe cómo te imaginas en el futuro: quién quieres ser, qué quieres lograr y cómo quieres que te recuerden..."
          style={{
            width: "100%", minHeight: 100, borderRadius: 10, border: `1px solid ${COLORS.border}`,
            padding: 14, fontSize: 14, resize: "vertical", color: COLORS.text,
            fontFamily: "inherit", background: COLORS.bg, outline: "none", boxSizing: "border-box",
          }}
        />
      </Card>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 }}>
        {metas.map(m => (
          <Card key={m.id} style={{ borderTop: `3px solid ${m.color}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <i className={`ti ${m.icon}`} style={{ fontSize: 20, color: m.color }} aria-hidden="true" />
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: m.color }}>{m.label}</p>
                <p style={{ margin: 0, fontSize: 11.5, color: COLORS.textMuted }}>{m.desc}</p>
              </div>
            </div>
            <textarea
              value={vals[m.id] || ""}
              onChange={e => set(m.id, e.target.value)}
              placeholder="Escribe tus metas..."
              style={{
                width: "100%", minHeight: 90, borderRadius: 8, border: `1px solid ${COLORS.border}`,
                padding: 10, fontSize: 13, resize: "vertical", color: COLORS.text,
                fontFamily: "inherit", background: COLORS.bg, outline: "none", boxSizing: "border-box",
              }}
            />
          </Card>
        ))}
      </div>
      <Card style={{ marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 1rem", fontSize: 15, fontWeight: 600, color: COLORS.text }}>
          <i className="ti ti-books" style={{ marginRight: 8, color: COLORS.accent }} aria-hidden="true" />
          Evaluación académica
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {academico.map((q, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "12px 0", borderBottom: i < academico.length - 1 ? `1px solid ${COLORS.border}` : "none",
            }}>
              <p style={{ margin: 0, fontSize: 14, color: COLORS.text, flex: 1, lineHeight: 1.5 }}>{q}</p>
              <div style={{ display: "flex", gap: 8, marginLeft: 16 }}>
                {["Sí", "No"].map(opt => {
                  const isActive = vals[`acad-${i}`] === opt;
                  const c  = opt === "Sí" ? COLORS.teal : COLORS.coral;
                  const cl = opt === "Sí" ? COLORS.tealLight : COLORS.coralLight;
                  return (
                    <button key={opt} onClick={() => set(`acad-${i}`, opt)} style={{
                      background: isActive ? cl : "#F8F9FE",
                      color: isActive ? c : COLORS.textMuted,
                      border: isActive ? `1.5px solid ${c}` : `1px solid ${COLORS.border}`,
                      borderRadius: 8, padding: "6px 16px", fontSize: 13.5,
                      fontWeight: isActive ? 600 : 400, cursor: "pointer", minWidth: 50,
                    }}>{opt}</button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ background: COLORS.accentLight, border: `1px solid ${COLORS.accentMid}`, marginBottom: 20 }}>
        <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600, color: COLORS.accent }}>
          <i className="ti ti-writing" style={{ marginRight: 8 }} aria-hidden="true" />
          Mis compromisos personales
        </h3>
        <textarea
          value={vals.compromisos || ""}
          onChange={e => set("compromisos", e.target.value)}
          placeholder="¿A qué te comprometes para lograr tus metas? Escribe acciones concretas y fechas..."
          style={{
            width: "100%", minHeight: 90, borderRadius: 10, border: `1px solid ${COLORS.accentMid}`,
            padding: 14, fontSize: 14, resize: "vertical", color: COLORS.text,
            fontFamily: "inherit", background: "white", outline: "none", boxSizing: "border-box",
          }}
        />
      </Card>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
        <button style={{
          background: COLORS.surface, color: COLORS.textMuted, border: `1px solid ${COLORS.border}`,
          borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 500, cursor: "pointer",
        }}>Guardar borrador</button>
        <button style={{
          background: COLORS.amber, color: "#fff", border: "none",
          borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
        }}>Guardar proyecto de vida</button>
      </div>
    </div>
  );
}

// ── ROOT ────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("dashboard");
  const views = {
    dashboard:        <Dashboard onNav={setView} />,
    autoconocimiento: <Autoconocimiento />,
    test:             <TestVocacional />,
    resultados:       <Resultados />,
    proyecto:         <ProyectoVida />,
  };
  return (
    <div style={{
      display: "flex", minHeight: "100vh",
      background: COLORS.bg,
      fontFamily: "'Segoe UI', system-ui, sans-serif",
    }}>
      <Sidebar active={view} onNav={setView} userName="María López" />
      <main style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <TopBar />
        <div style={{ flex: 1 }}>{views[view]}</div>
      </main>
    </div>
  );
}
