import React, { useState, useEffect } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import { useVocacional } from "@/src/hooks/useVocacional";

export default function AutoconocimientoView() {
  const { reflections, saveReflections } = useVocacional();
  const [tab, setTab] = useState<number>(0);
  const [localVals, setLocalVals] = useState<Record<string, string>>({});

  // Sync with global reflections on mount
  useEffect(() => {
    setLocalVals(reflections);
  }, [reflections]);

  const tabs = ["¿Quién soy?", "Mis valores", "Metas personales"];
  const questions = [
    [
      "¿Cuáles son tus principales fortalezas?",
      "¿Qué actividades te hacen perder la noción del tiempo?",
      "¿Cómo te describirías en 3 palabras?",
    ],
    [
      "¿Qué es lo más importante para ti en la vida?",
      "¿Qué valores guían tus decisiones?",
      "¿Qué principios nunca comprometerías?",
    ],
    [
      "¿Qué quieres lograr en los próximos 2 años?",
      "¿Cuál es tu sueño profesional?",
      "¿Qué obstáculos debes superar?",
    ],
  ];

  const handleSave = () => {
    saveReflections(localVals);
    alert("¡Reflexiones guardadas con éxito!");
  };

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color={COLORS.teal} light={COLORS.tealLight}>
          Módulo 1
        </Tag>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            margin: "8px 0 4px",
            color: COLORS.text,
            letterSpacing: "-.5px",
          }}
        >
          Autoconocimiento
        </h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
          Reflexiona sobre ti mismo antes de explorar tus intereses vocacionales.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              style={{
                background: tab === i ? COLORS.tealLight : "transparent",
                color: tab === i ? COLORS.teal : COLORS.textMuted,
                border:
                  tab === i
                    ? `1.5px solid ${COLORS.teal}33`
                    : `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: tab === i ? 600 : 400,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {t}
            </button>
          ))}
          <Card
            style={{
              marginTop: 8,
              background: COLORS.accentLight,
              border: `1px solid ${COLORS.accentMid}`,
              padding: "1rem",
            }}
          >
            <p
              style={{
                margin: "0 0 6px",
                fontSize: 12,
                fontWeight: 600,
                color: COLORS.accent,
              }}
            >
              <i
                className="ti ti-brain"
                style={{ marginRight: 6 }}
                aria-hidden="true"
              />
              Inteligencia emocional
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: COLORS.textMuted,
                lineHeight: 1.6,
              }}
            >
              Reconocer tus emociones te ayuda a tomar mejores decisiones vocacionales.
            </p>
          </Card>
        </div>
        <Card>
          <h3
            style={{
              margin: "0 0 1.25rem",
              fontSize: 16,
              fontWeight: 600,
              color: COLORS.text,
            }}
          >
            {tabs[tab]}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {questions[tab].map((q, i) => {
              const key = `${tab}-${i}`;
              return (
                <div key={i}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 500,
                      color: COLORS.text,
                      marginBottom: 8,
                    }}
                  >
                    {q}
                  </label>
                  <textarea
                    value={localVals[key] || ""}
                    onChange={(e) =>
                      setLocalVals((v) => ({ ...v, [key]: e.target.value }))
                    }
                    placeholder="Escribe tu reflexión aquí..."
                    style={{
                      width: "100%",
                      minHeight: 80,
                      borderRadius: 10,
                      border: `1px solid ${COLORS.border}`,
                      padding: 12,
                      fontSize: 14,
                      resize: "vertical",
                      color: COLORS.text,
                      fontFamily: "inherit",
                      background: COLORS.bg,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 20,
            }}
          >
            <button
              onClick={handleSave}
              style={{
                background: COLORS.teal,
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 24px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Guardar reflexiones
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
