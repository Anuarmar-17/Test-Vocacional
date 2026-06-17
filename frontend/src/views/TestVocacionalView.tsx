import React, { useState, useEffect } from "react";
import { COLORS, AREAS } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import ProgressBar from "@/src/components/ui/ProgressBar";
import { useVocacional } from "@/src/hooks/useVocacional";
import { toast } from "sonner";

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
  const { testAnswers, setTestAnswers, saveTestAnswers, setView, isLoadingContext } = useVocacional();
  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoverPrev, setHoverPrev] = useState<boolean>(false);
  const [hoverNext, setHoverNext] = useState<boolean>(false);
  const [hasAutoNavigated, setHasAutoNavigated] = useState<boolean>(false);

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

  // 2. Auto-navigate to first unanswered question ONCE when data is ready
  useEffect(() => {
    if (!hasAutoNavigated && !isLoadingContext && !loading && preguntas.length > 0) {
      const firstUnanswered = preguntas.findIndex((q: any) => !testAnswers[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentQuestionIdx(firstUnanswered);
      }
      setHasAutoNavigated(true);
    }
  }, [hasAutoNavigated, isLoadingContext, loading, preguntas, testAnswers]);

  const handleSelectOption = (questionId: number, option: string) => {
    const newAnswers = {
      ...testAnswers,
      [questionId]: option,
    };
    setTestAnswers(newAnswers);

    // Premium Auto-Advance after selecting an option
    if (currentQuestionIdx < total - 1) {
      setTimeout(() => {
        setCurrentQuestionIdx((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    }
  };

  const handleSaveProgress = () => {
    saveTestAnswers(testAnswers);
    toast.success("¡Tu avance en el test vocacional ha sido guardado!");
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < total - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Last question! Check if there are unanswered questions
      if (answered < total) {
        toast.error(
          `Has respondido ${answered} de ${total} preguntas. Por favor, responde todas las preguntas faltantes antes de finalizar.`
        );
        return;
      }
      // Save before showing results
      saveTestAnswers(testAnswers);
      toast.success("¡Enhorabuena! Has respondido las 80 preguntas con éxito. Calculando tus resultados vocacionales...");
      setView("resultados");
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentBlock = Math.floor(currentQuestionIdx / questionsPerBlock);

  if (loading || isLoadingContext || !hasAutoNavigated) {
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
      <Card style={{ marginBottom: 5, padding: "1rem 1.5rem" }}>
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {AREAS.map((a) => (
              <Tag key={a.id} color={a.color} light={a.light}>
                {a.label}
              </Tag>
            ))}
          </div>
        </div>
      </Card>

      {/* SINGLE QUESTION CAROUSEL ROW */}
      {(() => {
        const q = preguntas[currentQuestionIdx];
        if (!q) return null;
        const areaKey = getAreaKey(q.area);
        const area = AREAS.find((a) => a.id === areaKey);

        // Pad the question id to 2 digits to match the filenames "01.png", "02.png", ... "80.png"
        const imageId = String(q.id).padStart(2, "0");
        const imagePath = `/image/${imageId}.png`;
        const isLastQuestion = currentQuestionIdx === total - 1;

        return (
          <div style={{ position: "relative", width: "100%", padding: "1rem 0" }}>
            {/* Left Circular Navigation Button */}
            <button
              disabled={currentQuestionIdx === 0}
              onClick={handlePrevQuestion}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              style={{
                position: "absolute",
                left: "-56px",
                top: "50%",
                transform: `translateY(-50%) ${hoverPrev && currentQuestionIdx !== 0 ? "scale(1.08)" : "scale(1)"}`,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: currentQuestionIdx === 0
                  ? COLORS.surface
                  : (hoverPrev ? COLORS.accentLight : COLORS.surface),
                color: currentQuestionIdx === 0 ? COLORS.textLight : COLORS.accent,
                border: `1.5px solid ${currentQuestionIdx === 0 ? COLORS.border : COLORS.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentQuestionIdx === 0 ? "not-allowed" : "pointer",
                opacity: currentQuestionIdx === 0 ? 0.3 : 1,
                transition: "all 0.2s ease",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.04)",
                zIndex: 10,
              }}
              title="Pregunta anterior"
            >
              <i className="ti ti-chevron-left" style={{ fontSize: 18, fontWeight: 700 }} />
            </button>

            {/* Question Card (Stretched to match the width of progress card) */}
            <Card
              style={{
                width: "100%",
                padding: 0,
                overflow: "hidden",
                borderLeft: `6px solid ${area?.color || COLORS.border}`,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                borderRadius: 16,
              }}
            >
              {/* 1. Large illustrative image at the top (~50% height) */}
              <div style={{ width: "100%", height: 300, overflow: "hidden", backgroundColor: "#F0F2F9" }}>
                <img
                  src={imagePath}
                  alt={`Pregunta ${q.id}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                {/* 2. Circular indicator with the question number */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: area?.light || COLORS.accentLight,
                    color: area?.color || COLORS.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {q.id}
                </div>

                {/* Question text centered and destacado with modern typography */}
                <p
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 600,
                    color: COLORS.text,
                    textAlign: "center",
                    lineHeight: 1.6,
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                  }}
                >
                  {q.pregunta}
                </p>

                {/* 3. Option buttons at the bottom */}
                <div style={{ display: "flex", gap: 12, width: "100%", marginTop: 8 }}>
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
                          flex: 1,
                          background: isActive ? al : "#F8F9FE",
                          color: isActive ? ac : COLORS.textMuted,
                          border: isActive ? `2px solid ${ac}` : `1px solid ${COLORS.border}`,
                          borderRadius: 12,
                          padding: "12px 20px",
                          fontSize: 15,
                          fontWeight: isActive ? 700 : 500,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                        }}
                      >
                        {isInterest ? "✓ " : "✕ "}
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Right Circular Navigation Button */}
            <button
              onClick={handleNextQuestion}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              style={{
                position: "absolute",
                right: "-56px",
                top: "50%",
                transform: `translateY(-50%) ${hoverNext ? "scale(1.08)" : "scale(1)"}`,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: isLastQuestion
                  ? (hoverNext ? COLORS.tealLight : COLORS.teal)
                  : (hoverNext ? COLORS.accentLight : COLORS.accent),
                color: isLastQuestion
                  ? (hoverNext ? COLORS.teal : "#fff")
                  : (hoverNext ? COLORS.accent : "#fff"),
                border: isLastQuestion
                  ? `1.5px solid ${COLORS.teal}`
                  : (hoverNext ? `1.5px solid ${COLORS.accent}` : "none"),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: isLastQuestion
                  ? "0 4px 12px rgba(15, 155, 142, 0.24)"
                  : "0 4px 12px rgba(79, 106, 245, 0.24)",
                zIndex: 10,
              }}
              title={isLastQuestion ? "Finalizar y Ver Resultados" : "Siguiente pregunta"}
            >
              <i className={isLastQuestion ? "ti ti-check" : "ti ti-chevron-right"} style={{ fontSize: 18, fontWeight: 700 }} />
            </button>
          </div>
        );
      })()}

      {/* ACTION CONTROLS */}
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "flex-start",
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
            transition: "all 0.2s ease",
          }}
        >
          Guardar avance
        </button>
      </div>
    </div>
  );
}

