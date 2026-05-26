import React, { useState, useEffect } from "react";
import { COLORS, AREAS } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import ProgressBar from "@/src/components/ui/ProgressBar";
import { useVocacional } from "@/src/hooks/useVocacional";

// Semantic normalizer to match the full area names in the JSON to the AREA ids in the application
const getAreaKey = (areaName: string): string => {
  const normalized = areaName.toLowerCase();
  if (normalized.includes("arte") || normalized.includes("creativ")) return "arte";
  if (normalized.includes("social")) return "social";
  if (normalized.includes("econ") || normalized.includes("admin") || normalized.includes("finan")) return "economica";
  if (normalized.includes("tecn")) return "tecnologia";
  if (normalized.includes("salud") || normalized.includes("ecol") || normalized.includes("biol")) return "salud";
  return "arte"; // fallback
};

export default function TestVocacionalView() {
  const { testAnswers, setTestAnswers, setView } = useVocacional();
  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  
  const total = 80;
  const questionsPerBlock = 10;
  const totalBlocks = Math.ceil(total / questionsPerBlock); // 8 blocks of 10 questions
  
  // Calculate answered count based on active answers matching IDs from 1 to 80
  const answered = Object.keys(testAnswers).filter(id => {
    const numId = Number(id);
    return numId >= 1 && numId <= 80 && testAnswers[numId];
  }).length;
  
  const percent = Math.round((answered / total) * 100);

  // 1. Fetch real questions from public folder (preguntas.json)
  useEffect(() => {
    fetch("/preguntas.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo cargar el archivo de preguntas");
        }
        return res.json();
      })
      .then((data) => {
        setPreguntas(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading questions JSON:", err);
        setLoading(false);
      });
  }, []);

  const handleSelectOption = (questionId: number, option: string) => {
    setTestAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSaveProgress = () => {
    alert("¡Tu avance en el test vocacional ha sido guardado correctamente en tu navegador!");
  };

  const handleNextBlock = () => {
    if (currentBlock < totalBlocks - 1) {
      setCurrentBlock((prev) => prev + 1);
      // Smooth scroll to top of questions container for premium user experience
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Last block completed! Check if there are unanswered questions
      if (answered < total) {
        alert(
          `Has respondido ${answered} de ${total} preguntas. Por favor, responde las ${
            total - answered
          } preguntas faltantes en los bloques anteriores antes de finalizar.`
        );
        return;
      }
      alert("¡Enhorabuena! Has respondido las 80 preguntas con éxito. Calculando tus resultados vocacionales...");
      setView("resultados");
    }
  };

  const handlePrevBlock = () => {
    if (currentBlock > 0) {
      setCurrentBlock((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Slice questions for the current block page (e.g. 0-9, 10-19, etc.)
  const startIdx = currentBlock * questionsPerBlock;
  const endIdx = startIdx + questionsPerBlock;
  const currentQuestions = preguntas.slice(startIdx, endIdx);

  if (loading) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center", color: COLORS.textMuted }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>Cargando preguntas del test...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      {/* HEADER SECTION */}
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
        
        {/* COUNTER CARD */}
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

      {/* PROGRESS AND INFO CARD */}
      <Card style={{ marginBottom: 20, padding: "1rem 1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.text }}>
            Progreso general del test
          </span>
          <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>
            {percent}%
          </span>
        </div>
        <ProgressBar value={answered} color={COLORS.accent} max={total} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {AREAS.map((a) => (
              <Tag key={a.id} color={a.color} light={a.light}>
                {a.label}
              </Tag>
            ))}
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.textMuted }}>
            Bloque {currentBlock + 1} de {totalBlocks}
          </span>
        </div>
      </Card>

      {/* QUESTIONS CONTAINER */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {currentQuestions.map((q: any) => {
          const areaKey = getAreaKey(q.area);
          const area = AREAS.find((a) => a.id === areaKey);
          return (
            <Card key={q.id} style={{ padding: "1.25rem 1.5rem", borderLeft: `4px solid ${area?.color || COLORS.border}` }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span
                  style={{
                    minWidth: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: area?.light || COLORS.accentLight,
                    color: area?.color || COLORS.accent,
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
                      fontWeight: 500,
                    }}
                  >
                    {q.pregunta}
                  </p>
                  
                  {/* OPTIONS BUTTONS */}
                  <div style={{ display: "flex", gap: 10 }}>
                    {q.opciones.map((opt: string) => {
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

      {/* ACTION CONTROLS */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        
        <div style={{ display: "flex", gap: 12 }}>
          {currentBlock > 0 && (
            <button
              onClick={handlePrevBlock}
              style={{
                background: COLORS.surface,
                color: COLORS.accent,
                border: `1.5px solid ${COLORS.accent}`,
                borderRadius: 10,
                padding: "11px 24px",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              ← Bloque anterior
            </button>
          )}
          
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
            {currentBlock === totalBlocks - 1 ? "Finalizar y Ver Resultados ✓" : "Siguiente bloque →"}
          </button>
        </div>
      </div>
    </div>
  );
}

