import React from "react";
import { COLORS, PROFESIONES } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import ProgressBar from "@/src/components/ui/ProgressBar";
import { useVocacional } from "@/src/hooks/useVocacional";
import { toast } from "sonner";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ResultadosView() {
  const { dynamicAreas, answeredCount, resultadosAcumulados } = useVocacional();
  
  if (answeredCount < 80) {
    return (
      <div style={{ padding: "2rem 2.5rem", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
          <Tag color="#5060B8" light="#EAECF8">
            Módulo 3
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
            Tus Resultados
          </h2>
          <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
            Aún no hay resultados porque el test no ha sido completado.
          </p>
        </div>
        <Card style={{ marginTop: "2rem", padding: "4rem", backgroundColor: "#F9FAFf", border: `1px dashed ${COLORS.border}` }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: COLORS.surface, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="ti ti-chart-bar" style={{ fontSize: 28, color: COLORS.textLight }} />
            </div>
            <div>
              <h3 style={{ fontSize: 18, color: COLORS.text, fontWeight: 600, margin: '0 0 6px' }}>
                {answeredCount} / 80 preguntas respondidas
              </h3>
              <p style={{ color: COLORS.textMuted, fontSize: 14, maxWidth: 400, margin: '0 auto' }}>
                Responde todas las preguntas en el Módulo 2 para calcular tus porcentajes y descubrir tus carreras compatibles.
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Sort dynamic areas by score (puntos acumulados from "Me interesa" answers)
  const maxPerArea = 16;
  const sorted = [...dynamicAreas].sort((a, b) => b.score - a.score);
  const top = sorted[0];
  const second = sorted[1];

  // Muted neutral palette for the top cards
  const RANK_COLORS = [
    {
      bg: "#F5F6FA",
      border: "#DDE0EC",
      badge: { bg: "#E8EAFA", text: "#3A4DB0" },
      rank: "1er lugar",
    },
    {
      bg: "#F7F7F5",
      border: "#E2E0D8",
      badge: { bg: "#EDECE5", text: "#6B6450" },
      rank: "2do lugar",
    },
  ];

  const handleDownloadPDF = () => {
    toast.info("Generando y descargando reporte de resultados en PDF...");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color="#5060B8" light="#EAECF8">
          Módulo 3
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
          Tus Resultados
        </h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
          Basado en tus respuestas, estas son tus áreas vocacionales destacadas.
        </p>
      </div>

      {/* Top 2 cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 15,
          marginBottom: "1.5rem",
        }}
      >
        {[top, second].map((area, idx) => {
          const rc = RANK_COLORS[idx];
          const pct = maxPerArea > 0 ? Math.round((area.score / maxPerArea) * 100) : 0;
          return (
            <div
              key={area.id}
              style={{
                background: rc.bg,
                borderRadius: 16,
                border: `1px solid ${rc.border}`,
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <div>
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontSize: 11,
                      fontWeight: 400,
                      color: COLORS.textMuted,
                      textTransform: "uppercase",
                      letterSpacing: ".6px",
                    }}
                  >
                    {idx === 0 ? "Área principal" : "Área secundaria"}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: 500,
                      color: COLORS.text,
                    }}
                  >
                    {area.label}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 8,
                    background: rc.badge.bg,
                    color: rc.badge.text,
                  }}
                >
                  {rc.rank}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span
                  style={{
                    fontSize: 33,
                    fontWeight: 600,
                    color: COLORS.text,
                  }}
                >
                  {area.score}
                </span>
                <span style={{ fontSize: 13, color: COLORS.textMuted }}>
                  / {maxPerArea} pts
                </span>
                <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600, marginLeft: 8 }}>
                  ({pct}%)
                </span>
              </div>
              <div style={{ marginTop: 12 }}>
                <ProgressBar
                  value={area.score}
                  color={idx === 0 ? "#4F6AF5" : "#9CA3AF"}
                  max={maxPerArea}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* All areas pie chart */}
      <Card style={{ marginBottom: "1.5rem" }}>
        <p
          style={{
            margin: "0 0 1.25rem",
            fontSize: 12,
            fontWeight: 600,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            letterSpacing: ".5px",
          }}
        >
          Puntaje por área
        </p>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={sorted.map((a) => ({
                name: a.label,
                score: a.score,
              }))}
              dataKey="score"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={140}
            >
              {sorted.map((area) => (
                <Cell key={area.id} fill={area.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              content={({ payload }) => (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "12px 20px",
                    marginTop: 16,
                  }}
                >
                  {payload?.map((entry: any) => {
                    const area = sorted.find(
                      (a) => a.label === entry.value
                    );
                    return (
                      <div
                        key={entry.value}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 13,
                          color: COLORS.textMuted,
                        }}
                      >
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: entry.color,
                            display: "inline-block",
                          }}
                        />
                        {entry.value}
                        <span
                          style={{
                            fontWeight: 600,
                            color: COLORS.text,
                            marginLeft: 2,
                          }}
                        >
                          {area?.score}/{maxPerArea} pts
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Career recommendations */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: "1.5rem",
        }}
      >
        {[top, second].map((area, idx) => (
          <Card key={area.id}>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: COLORS.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="ti ti-school"
                  style={{ fontSize: 16, color: COLORS.accent }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: 14,
                    color: COLORS.text,
                  }}
                >
                  {area.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11.5,
                    color: COLORS.textMuted,
                  }}
                >
                  {idx === 0 ? "Área principal" : "Área secundaria"}
                </p>
              </div>
            </div>
            <p
              style={{
                margin: "0 0 10px",
                fontSize: 11.5,
                fontWeight: 600,
                color: COLORS.textMuted,
                textTransform: "uppercase",
                letterSpacing: ".4px",
              }}
            >
              Carreras recomendadas
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {(PROFESIONES[area.id] || ["Pendiente de configurar"]).map(
                (p) => (
                  <div
                    key={p}
                    style={{
                      background: COLORS.bg,
                      borderRadius: 8,
                      padding: "8px 12px",
                      fontSize: 13.5,
                      color: COLORS.text,
                      border: `1px solid ${COLORS.border}`,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <i
                      className="ti ti-arrow-right"
                      style={{ fontSize: 14, color: COLORS.textLight }}
                      aria-hidden="true"
                    />
                    {p}
                  </div>
                )
              )}
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={handleDownloadPDF}
          style={{
            background: COLORS.accent,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <i
            className="ti ti-file-download"
            style={{ fontSize: 16 }}
            aria-hidden="true"
          />
          Descargar resultados PDF
        </button>
        <button
          onClick={handlePrint}
          style={{
            background: COLORS.surface,
            color: COLORS.textMuted,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <i
            className="ti ti-printer"
            style={{ fontSize: 16 }}
            aria-hidden="true"
          />
          Imprimir
        </button>
      </div>
    </div>
  );
}
