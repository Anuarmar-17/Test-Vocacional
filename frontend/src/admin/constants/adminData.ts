// ─── Admin Types ────────────────────────────────────────────────────────────

export interface AdminPregunta {
  id: number;
  area: string;
  areaColor: string;
  areaLight: string;
  texto: string;
  activa: boolean;
  createdAt: string;
}

export interface AdminProfesion {
  id: number;
  nombre: string;
  area: string;
  areaColor: string;
  areaLight: string;
  descripcion: string;
  universidades: string[];
  duracion: string;
  activa: boolean;
}

export interface AdminUsuario {
  id: number;
  nombre: string;
  email: string;
  fechaRegistro: string;
  testCompletado: boolean;
  preguntasRespondidas: number;
  areaPrincipal: string;
  areaColor: string;
  areaLight: string;
  ultimaActividad: string;
  resultadosPorArea?: Record<string, number>;
}

export interface AdminStatistica {
  label: string;
  value: string | number;
  cambio: number;
  icon: string;
  color: string;
  light: string;
}

export interface AreaDistribucion {
  area: string;
  porcentaje: number;
  color: string;
  light: string;
  cantidad: number;
}

export interface ActividadReciente {
  id: number;
  tipo: "registro" | "test" | "resultado";
  usuario: string;
  descripcion: string;
  tiempo: string;
  icon: string;
  color: string;
}

// ─── NavLinks Admin ──────────────────────────────────────────────────────────

export interface AdminNavLink {
  id: string;
  label: string;
  icon: string;
  badge?: number;
}

export const ADMIN_NAV_LINKS: AdminNavLink[] = [
  { id: "overview",    label: "Vista General",    icon: "ti-layout-dashboard" },
  { id: "preguntas",   label: "Preguntas",         icon: "ti-help-circle",     badge: 3 },
  { id: "profesiones", label: "Profesiones",       icon: "ti-briefcase" },
  { id: "usuarios",    label: "Usuarios",          icon: "ti-users",           badge: 12 },
];

// ─── Area lookup ──────────────────────────────────────────────────────────────

export const AREA_COLORS: Record<string, { color: string; light: string }> = {
  "Arte y Creatividad":         { color: "#C0533A", light: "#FAF0ED" },
  "Ciencias Sociales":          { color: "#3A5BD9", light: "#EEF2FD" },
  "Económica / Administrativa": { color: "#B06010", light: "#FDF5E8" },
  "Ciencia y Tecnología":       { color: "#0A7A70", light: "#E5F5F3" },
  "Ciencias de la Salud":       { color: "#5C2FA8", light: "#F0EAFB" },
};

export function normalizeAreaName(raw: string): string {
  const map: Record<string, string> = {
    "arte y creatividad": "Arte y Creatividad",
    "ciencia y tecnología": "Ciencia y Tecnología",
    "ciencia y tecnologia": "Ciencia y Tecnología",
    "ciencias ecológicas, biológicas y de salud": "Ciencias de la Salud",
    "ciencias ecologicas, biologicas y de salud": "Ciencias de la Salud",
    "ciencias sociales": "Ciencias Sociales",
    "económica, administrativa y financiera": "Económica / Administrativa",
    "economica, administrativa y financiera": "Económica / Administrativa",
  };
  return map[raw.toLowerCase().trim()] || raw;
}

// ─── Mock (fallback) ─────────────────────────────────────────────────────────

export const MOCK_AREAS_DISTRIBUCION: AreaDistribucion[] = [
  { area: "Arte y Creatividad",         porcentaje: 28, color: "#C0533A", light: "#FAF0ED", cantidad: 69  },
  { area: "Ciencia y Tecnología",       porcentaje: 35, color: "#0A7A70", light: "#E5F5F3", cantidad: 88  },
  { area: "Ciencias Sociales",          porcentaje: 15, color: "#3A5BD9", light: "#EEF2FD", cantidad: 37  },
  { area: "Económica / Administrativa", porcentaje: 12, color: "#B06010", light: "#FDF5E8", cantidad: 30  },
  { area: "Ciencias de la Salud",       porcentaje: 10, color: "#5C2FA8", light: "#F0EAFB", cantidad: 24  },
];
