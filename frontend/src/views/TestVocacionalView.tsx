import React from "react";
import { COLORS, AREAS, PREGUNTAS_MUESTRA } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import ProgressBar from "@/src/components/ui/ProgressBar";
import { useVocacional } from "@/src/hooks/useVocacional";

export default function TestVocacionalView() {
  const { testAnswers, setTestAnswers, setView } = useVocacional();
  
  const total = 80;
  const answered = Object.keys(testAnswers).length;
  const percent = Math.round((answered / total) * 100);

  const handleSelectOption = (questionId: number, option: string) => {
    setTestAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSaveProgress = () => {
    alert("¡Avance del test guardado correctamente!");
  };

  const handleNextBlock = () => {
    alert("Cargando el siguiente bloque de preguntas...");
    setView("resultados"); // guide user to results for mockup flow
  };

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <Tag color={COLORS.accent} light={COLORS.accentLight}>
            Módulo 2
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
            Test Vocacional
          </h2>
          <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
            Responde con honestidad. No hay respuestas correctas o incorrectas.
          </p>
        </div>
        <Card
          style={{
            padding: "1rem 1.5rem",
            textAlign: "center",
            minWidth: 120,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 700,
              color: COLORS.accent,
            }}
          >
            {answered}
          </p>
          <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.textMuted }}>
            de {total}
          </p>
        </Card>
      </div>

      <Card style={{ marginBottom: 20, padding: "1rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>
            Progreso general
          </span>
          <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>
            {percent}%
          </span>
        </div>
        <ProgressBar value={answered} color={COLORS.accent} max={total} />
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {AREAS.map((a) => (
            <Tag key={a.id} color={a.color} light={a.light}>
              {a.label}
            </Tag>
          ))}
        </div>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PREGUNTAS_MUESTRA.map((q) => {
          const area = AREAS.find((a) => a.id === q.area);
          return (
            <Card key={q.id} style={{ padding: "1.25rem 1.5rem" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span
                  style={{
                    minWidth: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: area?.light,
                    color: area?.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {q.id}
                </span>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      margin: "0 0 12px",
                      fontSize: 14.5,
                      color: COLORS.text,
                      lineHeight: 1.5,
                    }}
                  >
                    {q.texto}
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Me interesa", "No me interesa"].map((opt) => {
                      const isActive = testAnswers[q.id] === opt;
                      const isInterest = opt === "Me interesa";
                      const ac = isInterest ? COLORS.teal : COLORS.coral;
                      const al = isInterest ? COLORS.tealLight : COLORS.coralLight;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(q.id, opt)}
                          style={{
                            background: isActive ? al : "#F8F9FE",
                            color: isActive ? ac : COLORS.textMuted,
                            border: isActive
                              ? `1.5px solid ${ac}`
                              : `1px solid ${COLORS.border}`,
                            borderRadius: 10,
                            padding: "8px 18px",
                            fontSize: 13.5,
                            fontWeight: isActive ? 600 : 400,
                            cursor: "pointer",
                            transition: "all .15s",
                          }}
                        >
                          {isInterest ? "✓ " : "✗ "}
                          {opt}
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

      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <button
          onClick={handleSaveProgress}
          style={{
            background: COLORS.surface,
            color: COLORS.textMuted,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "11px 24px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Guardar avance
        </button>
        <button
          onClick={handleNextBlock}
          style={{
            background: COLORS.accent,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "11px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Siguiente bloque →
        </button>
      </div>
    </div>
  );
}
