import React, { useState } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Card from "@/src/components/ui/Card";
import Tag from "@/src/components/ui/Tag";

export default function InicioView() {
  const [activeTab, setActiveTab] = useState<string>("inteligencia");

  const topics = [
    {
      id: "inteligencia",
      label: "Inteligencia Emocional",
      icon: "ti-brain",
      color: COLORS.teal,
      bg: COLORS.tealLight,
    },
    {
      id: "autoconciencia",
      label: "Autoconciencia",
      icon: "ti-user-search",
      color: COLORS.accent,
      bg: COLORS.accentLight,
    },
    {
      id: "manejo",
      label: "Manejo de Emociones",
      icon: "ti-heart-handshake",
      color: COLORS.coral,
      bg: COLORS.coralLight,
    },
  ];

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 860, margin: "0 auto" }}>
      {/* Hero Welcome banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.accent} 0%, #324AD2 100%)`,
          borderRadius: 20,
          padding: "2.5rem",
          color: "white",
          marginBottom: "2rem",
          boxShadow: "0 8px 30px rgba(79, 106, 245, 0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
          }}
        />
        <Tag color="rgba(255, 255, 255, 0.9)" light="rgba(255, 255, 255, 0.2)">
          Bienvenido a VocaTest
        </Tag>
        <h1
          style={{
            fontSize: 30,
            fontWeight: 800,
            margin: "12px 0 8px",
            letterSpacing: "-0.6px",
            lineHeight: 1.2,
          }}
        >
          Tu Viaje de Descubrimiento Vocacional
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.85)",
            maxWidth: 580,
            lineHeight: 1.5,
          }}
        >
          Para elegir con sabiduría la profesión ideal, primero debes comprenderte a ti mismo. Explora estos recursos educativos clave sobre el autoconocimiento y la madurez emocional.
        </p>
      </div>

      {/* Tabs navigation */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: "2rem",
          borderBottom: `1px solid ${COLORS.border}`,
          paddingBottom: "10px",
        }}
      >
        {topics.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 12,
                border: "none",
                background: isActive ? t.bg : "transparent",
                color: isActive ? t.color : COLORS.textMuted,
                fontWeight: isActive ? 600 : 400,
                fontSize: 14.5,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <i className={`ti ${t.icon}`} style={{ fontSize: 18 }} />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Educational content cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {activeTab === "inteligencia" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <i className="ti ti-brain" style={{ color: COLORS.teal }} />
                ¿Qué es la Inteligencia Emocional?
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Es la capacidad de reconocer, entender y gestionar nuestras propias emociones, y de reconocer, influir y conectar con las emociones de los demás. En el proceso de orientación vocacional, la inteligencia emocional actúa como un faro que te previene de tomar decisiones precipitadas basadas en modas o presiones externas, ayudándote a canalizar tu verdadera vocación.
              </p>
            </Card>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Card style={{ borderLeft: `4px solid ${COLORS.teal}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, margin: "0 0 8px" }}>
                  Toma de Decisiones Consciente
                </h3>
                <p style={{ fontSize: 13.5, color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                  Te permite separar lo que realmente te apasiona de las expectativas externas (familiares, amigos o prestigio social).
                </p>
              </Card>

              <Card style={{ borderLeft: `4px solid ${COLORS.accent}` }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, margin: "0 0 8px" }}>
                  Resiliencia Profesional
                </h3>
                <p style={{ fontSize: 13.5, color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                  Afrontar con calma las frustraciones y los cambios de rumbo que ocurren durante la transición al mundo laboral y académico.
                </p>
              </Card>
            </div>

            <Card style={{ background: COLORS.tealLight, border: `1px solid ${COLORS.teal}22` }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.teal, margin: "0 0 8px" }}>
                Los 5 pilares de la Inteligencia Emocional
              </h3>
              <ol style={{ paddingLeft: 20, margin: 0, fontSize: 14, color: COLORS.textMuted, lineHeight: 1.6 }}>
                <li><strong>Autoconciencia:</strong> Identificar qué sientes y por qué lo sientes.</li>
                <li><strong>Autorregulación:</strong> Controlar tus impulsos y pensar antes de actuar.</li>
                <li><strong>Motivación Intrínseca:</strong> Buscar metas por superación personal, no solo por recompensas externas.</li>
                <li><strong>Empatía:</strong> Comprender las emociones y perspectivas ajenas.</li>
                <li><strong>Habilidades Sociales:</strong> Crear lazos sanos, comunicarte asertivamente y liderar en equipo.</li>
              </ol>
            </Card>
          </div>
        )}

        {activeTab === "autoconciencia" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <i className="ti ti-user-search" style={{ color: COLORS.accent }} />
                La Autoconciencia Vocacional
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                La autoconciencia es la piedra angular del test vocacional. Consiste en mirarse al espejo de forma honesta y responder tres preguntas clave: <em>¿Qué se me da bien de forma natural (aptitudes)?</em>, <em>¿Qué me genera curiosidad genuina (intereses)?</em> y <em>¿Bajo qué principios quiero regir mi vida (valores)?</em>.
              </p>
            </Card>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              {[
                { title: "Aptitudes", desc: "Tus fortalezas cognitivas, lógicas o artísticas. Lo que haces con naturalidad y excelencia.", color: COLORS.teal },
                { title: "Intereses", desc: "Aquellas actividades que te hacen perder la noción del tiempo y que investigas por gusto propio.", color: COLORS.accent },
                { title: "Valores", desc: "Lo que valoras en un trabajo: independencia, estabilidad económica, creatividad o servicio social.", color: COLORS.coral },
              ].map((item) => (
                <Card key={item.title} style={{ textAlign: "center", padding: "1.25rem" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: `${item.color}15`,
                      color: item.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title[0]}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: COLORS.text, margin: "0 0 6px" }}>{item.title}</h3>
                  <p style={{ fontSize: 12.5, color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </Card>
              ))}
            </div>

            <Card style={{ background: COLORS.accentLight, border: `1px solid ${COLORS.accentMid}` }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: COLORS.accent, margin: "0 0 6px" }}>
                Consejo Vocacional
              </h3>
              <p style={{ fontSize: 13.5, color: COLORS.textMuted, lineHeight: 1.5, margin: 0 }}>
                El test vocacional de 80 preguntas te ayudará a traducir estos tres factores en áreas profesionales recomendadas. Respóndelo siempre pensando en tu curiosidad natural, no en tus miedos o en el éxito momentáneo.
              </p>
            </Card>
          </div>
        )}

        {activeTab === "manejo" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <i className="ti ti-heart-handshake" style={{ color: COLORS.coral }} />
                Manejo de Emociones y Ansiedad Vocacional
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  color: COLORS.textMuted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Es perfectamente normal sentir estrés, miedo al fracaso o ansiedad ante la presión de elegir "qué hacer el resto de tu vida". El secreto no es erradicar estas emociones, sino aprender a regularlas para que no nublen tu juicio ni saboteen tu potencial.
              </p>
            </Card>

            <Card style={{ borderLeft: `4px solid ${COLORS.coral}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, margin: "0 0 10px" }}>
                Técnicas Prácticas de Regulación Emocional
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  {
                    t: "1. Respiración Diafragmática (4-7-8)",
                    d: "Inhala aire por 4 segundos, sostenlo por 7 y exhala lentamente por 8 segundos. Reduce el ritmo cardíaco y la ansiedad en menos de 2 minutos.",
                  },
                  {
                    t: "2. Reencuadre Cognitivo",
                    d: "Cambia el diálogo interno negativo. En lugar de pensar 'si elijo mal arruinaré mi futuro', piensa 'esta elección es mi punto de partida; siempre tendré la capacidad de adaptarme y crecer'.",
                  },
                  {
                    t: "3. Hábitos de Salud Mental",
                    d: "Dormir lo suficiente y mantener espacios de ocio recreativo son vitales para sostener la claridad mental durante la toma de decisiones complejas.",
                  },
                ].map((x) => (
                  <div key={x.t}>
                    <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, margin: "0 0 2px" }}>{x.t}</p>
                    <p style={{ fontSize: 13, color: COLORS.textMuted, margin: 0, lineHeight: 1.4 }}>{x.d}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div
              style={{
                background: COLORS.coralLight,
                border: `1.5px dashed ${COLORS.coral}44`,
                borderRadius: 16,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: 13.5, color: COLORS.coral, fontWeight: 600, margin: 0 }}>
                💡 Recuerda: Ninguna carrera o decisión profesional es una vía de un solo sentido. Tu vida profesional será una evolución maravillosa guiada por el autoconocimiento constante.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
