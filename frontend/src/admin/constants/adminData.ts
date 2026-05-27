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

// ─── Mock Preguntas ──────────────────────────────────────────────────────────

export const MOCK_PREGUNTAS: AdminPregunta[] = [
  { id: 1,  area: "Arte y Creatividad",           areaColor: "#C0533A", areaLight: "#FAF0ED", texto: "Me gusta dibujar, pintar o crear objetos artísticos",           activa: true,  createdAt: "2025-01-10" },
  { id: 2,  area: "Ciencias Sociales",            areaColor: "#3A5BD9", areaLight: "#EEF2FD", texto: "Disfruto ayudando a resolver conflictos entre personas",         activa: true,  createdAt: "2025-01-10" },
  { id: 3,  area: "Ciencia y Tecnología",         areaColor: "#0A7A70", areaLight: "#E5F5F3", texto: "Me interesa aprender cómo funcionan los computadores",           activa: true,  createdAt: "2025-01-10" },
  { id: 4,  area: "Económica / Administrativa",   areaColor: "#B06010", areaLight: "#FDF5E8", texto: "Me atrae administrar recursos y planear presupuestos",           activa: true,  createdAt: "2025-01-11" },
  { id: 5,  area: "Ciencias de la Salud",         areaColor: "#5C2FA8", areaLight: "#F0EAFB", texto: "Me preocupa el bienestar físico y emocional de las personas",    activa: true,  createdAt: "2025-01-11" },
  { id: 6,  area: "Arte y Creatividad",           areaColor: "#C0533A", areaLight: "#FAF0ED", texto: "Me gusta la fotografía, el cine o el teatro",                    activa: true,  createdAt: "2025-01-12" },
  { id: 7,  area: "Ciencia y Tecnología",         areaColor: "#0A7A70", areaLight: "#E5F5F3", texto: "Disfruto resolviendo problemas matemáticos complejos",           activa: true,  createdAt: "2025-01-12" },
  { id: 8,  area: "Ciencias Sociales",            areaColor: "#3A5BD9", areaLight: "#EEF2FD", texto: "Me interesa la psicología y el comportamiento humano",           activa: true,  createdAt: "2025-01-13" },
  { id: 9,  area: "Arte y Creatividad",           areaColor: "#C0533A", areaLight: "#FAF0ED", texto: "Me gusta diseñar espacios, muebles o productos",                 activa: false, createdAt: "2025-01-14" },
  { id: 10, area: "Ciencias de la Salud",         areaColor: "#5C2FA8", areaLight: "#F0EAFB", texto: "Me interesa estudiar el cuerpo humano y sus enfermedades",       activa: true,  createdAt: "2025-01-14" },
  { id: 11, area: "Económica / Administrativa",   areaColor: "#B06010", areaLight: "#FDF5E8", texto: "Me gusta analizar datos financieros y estadísticas económicas",  activa: true,  createdAt: "2025-01-15" },
  { id: 12, area: "Ciencia y Tecnología",         areaColor: "#0A7A70", areaLight: "#E5F5F3", texto: "Me apasiona investigar fenómenos naturales y científicos",        activa: false, createdAt: "2025-01-15" },
];

// ─── Mock Profesiones ────────────────────────────────────────────────────────

export const MOCK_PROFESIONES: AdminProfesion[] = [
  { id: 1,  nombre: "Diseño Gráfico",           area: "Arte y Creatividad",         areaColor: "#C0533A", areaLight: "#FAF0ED", descripcion: "Creación de comunicación visual para medios digitales e impresos.", universidades: ["UNAD", "Unidad Central del Valle"], duracion: "4 años", activa: true  },
  { id: 2,  nombre: "Arquitectura",             area: "Arte y Creatividad",         areaColor: "#C0533A", areaLight: "#FAF0ED", descripcion: "Diseño y planificación de espacios y edificaciones.", universidades: ["Universidad Nacional", "Los Andes"], duracion: "5 años", activa: true  },
  { id: 3,  nombre: "Psicología",               area: "Ciencias Sociales",          areaColor: "#3A5BD9", areaLight: "#EEF2FD", descripcion: "Estudio del comportamiento humano y procesos mentales.", universidades: ["Javeriana", "Rosario"], duracion: "5 años", activa: true  },
  { id: 4,  nombre: "Trabajo Social",           area: "Ciencias Sociales",          areaColor: "#3A5BD9", areaLight: "#EEF2FD", descripcion: "Intervención social para el bienestar de comunidades.", universidades: ["UNAL", "UdeSantander"], duracion: "4 años", activa: true  },
  { id: 5,  nombre: "Ingeniería de Sistemas",   area: "Ciencia y Tecnología",       areaColor: "#0A7A70", areaLight: "#E5F5F3", descripcion: "Desarrollo de software y soluciones tecnológicas.", universidades: ["UNAL", "EAFIT", "UniAndes"], duracion: "5 años", activa: true  },
  { id: 6,  nombre: "Biotecnología",            area: "Ciencia y Tecnología",       areaColor: "#0A7A70", areaLight: "#E5F5F3", descripcion: "Aplicación de biología en procesos industriales y médicos.", universidades: ["Javeriana", "UniAndes"], duracion: "5 años", activa: true  },
  { id: 7,  nombre: "Administración de Empresas", area: "Económica / Administrativa", areaColor: "#B06010", areaLight: "#FDF5E8", descripcion: "Gestión y dirección de organizaciones empresariales.", universidades: ["Rosario", "EAFIT", "ICESI"], duracion: "4 años", activa: true  },
  { id: 8,  nombre: "Contaduría Pública",       area: "Económica / Administrativa", areaColor: "#B06010", areaLight: "#FDF5E8", descripcion: "Gestión contable y financiera de empresas.", universidades: ["UNAD", "Libre"], duracion: "4 años", activa: false },
  { id: 9,  nombre: "Medicina",                 area: "Ciencias de la Salud",       areaColor: "#5C2FA8", areaLight: "#F0EAFB", descripcion: "Diagnóstico, tratamiento y prevención de enfermedades.", universidades: ["UNAL", "CES", "UniAndes"], duracion: "6 años", activa: true  },
  { id: 10, nombre: "Enfermería",               area: "Ciencias de la Salud",       areaColor: "#5C2FA8", areaLight: "#F0EAFB", descripcion: "Cuidado integral de la salud del paciente.", universidades: ["Javeriana", "CES"], duracion: "4 años", activa: true  },
];

// ─── Mock Usuarios ───────────────────────────────────────────────────────────

export const MOCK_USUARIOS: AdminUsuario[] = [
  { id: 1,  nombre: "María López",       email: "maria.lopez@edu.co",     fechaRegistro: "2025-01-08", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Arte y Creatividad",         areaColor: "#C0533A", areaLight: "#FAF0ED", ultimaActividad: "hace 2 horas"  },
  { id: 2,  nombre: "Carlos Ramírez",    email: "c.ramirez@edu.co",       fechaRegistro: "2025-01-09", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Ciencia y Tecnología",       areaColor: "#0A7A70", areaLight: "#E5F5F3", ultimaActividad: "hace 5 horas"  },
  { id: 3,  nombre: "Sofia Herrera",     email: "sofia.h@school.co",      fechaRegistro: "2025-01-10", testCompletado: false, preguntasRespondidas: 45, areaPrincipal: "Ciencias Sociales",          areaColor: "#3A5BD9", areaLight: "#EEF2FD", ultimaActividad: "hace 1 día"    },
  { id: 4,  nombre: "Andrés Martínez",   email: "andres.m@edu.co",        fechaRegistro: "2025-01-12", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Económica / Administrativa", areaColor: "#B06010", areaLight: "#FDF5E8", ultimaActividad: "hace 3 horas"  },
  { id: 5,  nombre: "Valeria Torres",    email: "vt.torres@school.co",    fechaRegistro: "2025-01-13", testCompletado: false, preguntasRespondidas: 20, areaPrincipal: "Ciencias de la Salud",       areaColor: "#5C2FA8", areaLight: "#F0EAFB", ultimaActividad: "hace 2 días"   },
  { id: 6,  nombre: "Sebastián Gómez",   email: "sgomez@edu.co",          fechaRegistro: "2025-01-14", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Ciencia y Tecnología",       areaColor: "#0A7A70", areaLight: "#E5F5F3", ultimaActividad: "hace 30 min"   },
  { id: 7,  nombre: "Camila Vargas",     email: "c.vargas@school.co",     fechaRegistro: "2025-01-15", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Arte y Creatividad",         areaColor: "#C0533A", areaLight: "#FAF0ED", ultimaActividad: "hace 4 horas"  },
  { id: 8,  nombre: "Daniel Pedraza",    email: "d.pedraza@edu.co",       fechaRegistro: "2025-01-16", testCompletado: false, preguntasRespondidas: 0,  areaPrincipal: "—",                          areaColor: "#9CA3AF", areaLight: "#F3F4F6", ultimaActividad: "hace 3 días"   },
  { id: 9,  nombre: "Laura Jiménez",     email: "l.jimenez@school.co",    fechaRegistro: "2025-01-17", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Ciencias Sociales",          areaColor: "#3A5BD9", areaLight: "#EEF2FD", ultimaActividad: "hace 6 horas"  },
  { id: 10, nombre: "Felipe Castillo",   email: "fcastillo@edu.co",       fechaRegistro: "2025-01-18", testCompletado: false, preguntasRespondidas: 60, areaPrincipal: "Ciencias de la Salud",       areaColor: "#5C2FA8", areaLight: "#F0EAFB", ultimaActividad: "hace 1 día"    },
  { id: 11, nombre: "Isabella Mora",     email: "i.mora@school.co",       fechaRegistro: "2025-01-19", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Económica / Administrativa", areaColor: "#B06010", areaLight: "#FDF5E8", ultimaActividad: "hace 8 horas"  },
  { id: 12, nombre: "Tomás Suárez",      email: "t.suarez@edu.co",        fechaRegistro: "2025-01-20", testCompletado: true,  preguntasRespondidas: 80, areaPrincipal: "Ciencia y Tecnología",       areaColor: "#0A7A70", areaLight: "#E5F5F3", ultimaActividad: "hace 2 horas"  },
];

// ─── Mock Statistics ─────────────────────────────────────────────────────────

export const MOCK_STATS: AdminStatistica[] = [
  { label: "Usuarios Registrados",  value: 248,   cambio: +12, icon: "ti-users",           color: "#4F6AF5", light: "#EEF1FF" },
  { label: "Tests Realizados",      value: 183,   cambio: +8,  icon: "ti-clipboard-check", color: "#0F9B8E", light: "#E0F5F3" },
  { label: "Preguntas Activas",     value: 80,    cambio: 0,   icon: "ti-help-circle",     color: "#D97706", light: "#FEF3C7" },
  { label: "Profesiones Cargadas",  value: 42,    cambio: +3,  icon: "ti-briefcase",       color: "#C0533A", light: "#FAF0ED" },
];

export const MOCK_AREAS_DISTRIBUCION: AreaDistribucion[] = [
  { area: "Arte y Creatividad",         porcentaje: 28, color: "#C0533A", light: "#FAF0ED", cantidad: 69  },
  { area: "Ciencia y Tecnología",       porcentaje: 35, color: "#0A7A70", light: "#E5F5F3", cantidad: 88  },
  { area: "Ciencias Sociales",          porcentaje: 15, color: "#3A5BD9", light: "#EEF2FD", cantidad: 37  },
  { area: "Económica / Administrativa", porcentaje: 12, color: "#B06010", light: "#FDF5E8", cantidad: 30  },
  { area: "Ciencias de la Salud",       porcentaje: 10, color: "#5C2FA8", light: "#F0EAFB", cantidad: 24  },
];

export const MOCK_PROFESIONES_TOP: { nombre: string; cantidad: number; color: string; light: string }[] = [
  { nombre: "Ingeniería de Sistemas",   cantidad: 52, color: "#0A7A70", light: "#E5F5F3" },
  { nombre: "Diseño Gráfico",           cantidad: 41, color: "#C0533A", light: "#FAF0ED" },
  { nombre: "Psicología",               cantidad: 35, color: "#3A5BD9", light: "#EEF2FD" },
  { nombre: "Medicina",                 cantidad: 28, color: "#5C2FA8", light: "#F0EAFB" },
  { nombre: "Administración de Empresas", cantidad: 22, color: "#B06010", light: "#FDF5E8" },
];

export const MOCK_ACTIVIDAD_RECIENTE: ActividadReciente[] = [
  { id: 1, tipo: "registro",  usuario: "Tomás Suárez",    descripcion: "Se registró en la plataforma",            tiempo: "hace 2h",   icon: "ti-user-plus",       color: "#4F6AF5" },
  { id: 2, tipo: "test",      usuario: "Sebastián Gómez", descripcion: "Completó el test vocacional",             tiempo: "hace 30m",  icon: "ti-clipboard-check", color: "#0F9B8E" },
  { id: 3, tipo: "resultado", usuario: "María López",     descripcion: "Área principal: Arte y Creatividad",      tiempo: "hace 2h",   icon: "ti-chart-bar",       color: "#C0533A" },
  { id: 4, tipo: "test",      usuario: "Carlos Ramírez",  descripcion: "Completó el test vocacional",             tiempo: "hace 5h",   icon: "ti-clipboard-check", color: "#0F9B8E" },
  { id: 5, tipo: "registro",  usuario: "Isabella Mora",   descripcion: "Se registró en la plataforma",            tiempo: "hace 8h",   icon: "ti-user-plus",       color: "#4F6AF5" },
  { id: 6, tipo: "resultado", usuario: "Andrés Martínez", descripcion: "Área principal: Económica / Admin.",      tiempo: "hace 3h",   icon: "ti-chart-bar",       color: "#B06010" },
];
