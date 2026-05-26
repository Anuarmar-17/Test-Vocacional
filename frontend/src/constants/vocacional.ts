export const COLORS = {
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

export interface Area {
  id: string;
  label: string;
  color: string;
  light: string;
  score: number;
}

export const AREAS: Area[] = [
  { id: "arte",      label: "Arte y Creatividad",          color: "#C0533A", light: "#FAF0ED", score: 72 },
  { id: "social",    label: "Ciencias Sociales",           color: "#3A5BD9", light: "#EEF2FD", score: 58 },
  { id: "economica", label: "Económica / Administrativa",  color: "#B06010", light: "#FDF5E8", score: 44 },
  { id: "tecnologia",label: "Ciencia y Tecnología",        color: "#0A7A70", light: "#E5F5F3", score: 61 },
  { id: "salud",     label: "Ciencias de la Salud",        color: "#5C2FA8", light: "#F0EAFB", score: 35 },
];

export const PROFESIONES: Record<string, string[]> = {
  arte:      ["Diseño Gráfico", "Arquitectura", "Comunicación Social", "Publicidad", "Bellas Artes"],
  tecnologia:["Ingeniería de Sistemas", "Ingeniería Electrónica", "Biotecnología", "Física", "Matemáticas"],
};

export interface Pregunta {
  id: number;
  area: string;
  texto: string;
}

export const PREGUNTAS_MUESTRA: Pregunta[] = [
  { id: 1, area: "arte",       texto: "Me gusta dibujar, pintar o crear objetos artísticos" },
  { id: 2, area: "social",     texto: "Disfruto ayudando a resolver conflictos entre personas" },
  { id: 3, area: "tecnologia", texto: "Me interesa aprender cómo funcionan los computadores" },
  { id: 4, area: "economica",  texto: "Me atrae administrar recursos y planear presupuestos" },
  { id: 5, area: "salud",      texto: "Me preocupa el bienestar físico y emocional de las personas" },
  { id: 6, area: "arte",       texto: "Me gusta la fotografía, el cine o el teatro" },
  { id: 7, area: "tecnologia", texto: "Disfruto resolviendo problemas matemáticos complejos" },
  { id: 8, area: "social",     texto: "Me interesa la psicología y el comportamiento humano" },
];

export interface NavLink {
  id: string;
  label: string;
  icon: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "inicio",           label: "Inicio",            icon: "ti-home" },
  { id: "dashboard",        label: "Perfil",            icon: "ti-user" },
  { id: "autoconocimiento", label: "Autoconocimiento",  icon: "ti-brain" },
  { id: "test",             label: "Test Vocacional",   icon: "ti-clipboard-list" },
  { id: "resultados",       label: "Resultados",        icon: "ti-chart-bar" },
  { id: "proyecto",         label: "Proyecto de Vida",  icon: "ti-map" },
];

