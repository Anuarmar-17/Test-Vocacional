import React, { useState, useEffect } from "react";
import { COLORS } from "@/src/constants/vocacional";
import Tag from "@/src/components/ui/Tag";
import Card from "@/src/components/ui/Card";
import { useVocacional } from "@/src/hooks/useVocacional";
import { toast } from "sonner";

export default function ProyectoVidaView() {
  const { lifeProject, saveLifeProject } = useVocacional();
  const [localVals, setLocalVals] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState(false);

  // Sync with global context state on mount
  useEffect(() => {
    setLocalVals(lifeProject);
  }, [lifeProject]);

  const set = (k: string, v: string) => {
    setLocalVals((prev) => ({
      ...prev,
      [k]: v,
    }));
  };

  const metas = [
    {
      id: "corto",
      label: "Corto plazo",
      desc: "En los próximos 6 meses",
      icon: "ti-target",
      color: COLORS.teal,
    },
    {
      id: "mediano",
      label: "Mediano plazo",
      desc: "En 1 a 3 años",
      icon: "ti-calendar",
      color: COLORS.accent,
    },
    {
      id: "largo",
      label: "Largo plazo",
      desc: "En 5 años o más",
      icon: "ti-rocket",
      color: COLORS.coral,
    },
  ];

  const academico = [
    "¿Tienes claro qué carrera quieres estudiar?",
    "¿Conoces los requisitos de admisión de tu institución de interés?",
    "¿Has investigado opciones de financiamiento (becas, créditos)?",
    "¿Tienes el apoyo de tu familia para continuar estudiando?",
  ];

  const handleSave = () => {
    saveLifeProject(localVals);
    setIsEditing(false);
    toast.success("¡Proyecto de vida guardado con éxito!");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div style={{ padding: "2rem 2.5rem", maxWidth: 820, margin: "0 auto" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Tag color={COLORS.amber} light={COLORS.amberLight}>
          Módulo 4
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
          Mi Proyecto de Vida
        </h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 14 }}>
          Define tu visión, metas y compromisos para construir tu futuro.
        </p>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 15,
            fontWeight: 600,
            color: COLORS.text,
          }}
        >
          <i
            className="ti ti-star"
            style={{ marginRight: 8, color: COLORS.amber }}
            aria-hidden="true"
          />
          Mi visión personal
        </h3>
        {isEditing ? (
          <textarea
            value={localVals.vision || ""}
            onChange={(e) => set("vision", e.target.value)}
            placeholder="Describe cómo te imaginas en el futuro: quién quieres ser, qué quieres lograr y cómo quieres que te recuerden..."
            style={{
              width: "100%",
              minHeight: 100,
              borderRadius: 10,
              border: `1px solid ${COLORS.border}`,
              padding: 14,
              fontSize: 14,
              resize: "vertical",
              color: COLORS.text,
              fontFamily: "inherit",
              background: COLORS.bg,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              minHeight: 100,
              borderRadius: 10,
              border: `1px solid ${COLORS.border}`,
              padding: 14,
              fontSize: 14,
              color: COLORS.text,
              background: "#F8F9FB",
              boxSizing: "border-box",
              whiteSpace: "pre-wrap",
            }}
          >
            <span>{localVals.vision || ""}</span>
          </div>
        )}
      </Card>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 20,
        }}
      >
        {metas.map((m) => (
          <Card key={m.id} style={{ borderTop: `3px solid ${m.color}` }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <i
                className={`ti ${m.icon}`}
                style={{ fontSize: 20, color: m.color }}
                aria-hidden="true"
              />
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 600,
                    color: m.color,
                  }}
                >
                  {m.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 11.5,
                    color: COLORS.textMuted,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            </div>
            {isEditing ? (
              <textarea
                value={localVals[m.id] || ""}
                onChange={(e) => set(m.id, e.target.value)}
                placeholder="Escribe tus metas..."
                style={{
                  width: "100%",
                  minHeight: 90,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  padding: 10,
                  fontSize: 13,
                  resize: "vertical",
                  color: COLORS.text,
                  fontFamily: "inherit",
                  background: COLORS.bg,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  minHeight: 90,
                  borderRadius: 8,
                  border: `1px solid ${COLORS.border}`,
                  padding: 10,
                  fontSize: 13,
                  color: COLORS.text,
                  background: "#F8F9FB",
                  boxSizing: "border-box",
                  whiteSpace: "pre-wrap",
                }}
              >
                <span>{localVals[m.id] || ""}</span>
              </div>
            )}
          </Card>
        ))}
      </div>

      <Card style={{ marginBottom: 20 }}>
        <h3
          style={{
            margin: "0 0 1rem",
            fontSize: 15,
            fontWeight: 600,
            color: COLORS.text,
          }}
        >
          <i
            className="ti ti-books"
            style={{ marginRight: 8, color: COLORS.accent }}
            aria-hidden="true"
          />
          Evaluación académica
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {academico.map((q, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom:
                  i < academico.length - 1
                    ? `1px solid ${COLORS.border}`
                    : "none",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: COLORS.text,
                  flex: 1,
                  lineHeight: 1.5,
                }}
              >
                {q}
              </p>
              <div style={{ display: "flex", gap: 8, marginLeft: 16 }}>
                {["Sí", "No"].map((opt) => {
                  const isActive = localVals[`acad-${i}`] === opt;
                  const c = opt === "Sí" ? COLORS.teal : COLORS.coral;
                  const cl = opt === "Sí" ? COLORS.tealLight : COLORS.coralLight;
                  return (
                    <button
                      key={opt}
                      onClick={() => set(`acad-${i}`, opt)}
                      style={{
                        background: isActive ? cl : "#F8F9FE",
                        color: isActive ? c : COLORS.textMuted,
                        border: isActive
                          ? `1.5px solid ${c}`
                          : `1px solid ${COLORS.border}`,
                        borderRadius: 8,
                        padding: "6px 16px",
                        fontSize: 13.5,
                        fontWeight: isActive ? 600 : 400,
                        cursor: "pointer",
                        minWidth: 50,
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card
        style={{
          background: COLORS.accentLight,
          border: `1px solid ${COLORS.accentMid}`,
          marginBottom: 20,
        }}
      >
        <h3
          style={{
            margin: "0 0 12px",
            fontSize: 15,
            fontWeight: 600,
            color: COLORS.accent,
          }}
        >
          <i
            className="ti ti-writing"
            style={{ marginRight: 8 }}
            aria-hidden="true"
          />
          Mis compromisos personales
        </h3>
        {isEditing ? (
          <textarea
              value={localVals.compromisos || ""}
              onChange={(e) => set("compromisos", e.target.value)}
              placeholder="¿A qué te comprometes para lograr tus metas? Escribe acciones concretas y fechas..."
              style={{
                width: "100%",
                minHeight: 90,
                borderRadius: 10,
                border: `1px solid ${COLORS.accentMid}`,
                padding: 14,
                fontSize: 14,
                resize: "vertical",
                color: COLORS.text,
                fontFamily: "inherit",
                background: "white",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
        ) : (
          <div
            style={{
              width: "100%",
              minHeight: 90,
              borderRadius: 10,
              border: `1px solid ${COLORS.accentMid}`,
              padding: 14,
              fontSize: 14,
              color: COLORS.text,
              background: "#F8F9FB",
              boxSizing: "border-box",
              whiteSpace: "pre-wrap",
            }}
          >
            <span>{localVals.compromisos || ""}</span>
          </div>
        )}
      </Card>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <button
          onClick={isEditing ? handleSave : handleEdit}
          style={{
            background: isEditing ? COLORS.amber : COLORS.surface,
            color: isEditing ? "#fff" : COLORS.text,
            border: isEditing ? "none" : `1px solid ${COLORS.border}`,
            borderRadius: 10,
            padding: "11px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {isEditing ? "Guardar proyecto de vida" : "Editar proyecto de vida"}
        </button>
      </div>
    </div>
  );
}
