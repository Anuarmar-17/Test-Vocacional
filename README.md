# 🎓 Sistema Web de Orientación Vocacional

Aplicación web full stack desarrollada para ayudar a estudiantes de educación media a identificar sus intereses profesionales mediante un test vocacional interactivo, recomendaciones impulsadas por IA y construcción de proyecto de vida.

---

## 📌 Descripción del Proyecto

La plataforma permite:

- Registro e inicio de sesión de usuarios
- Desarrollo de test vocacional de 80 preguntas
- Procesamiento automático de resultados
- Clasificación de áreas de interés
- Recomendaciones profesionales con IA (Gemini 2.5 Flash)
- Gestión de proyecto de vida
- Panel administrativo con estadísticas y exportación de datos
- Visualización gráfica de resultados

---

## 🚀 Tecnologías Utilizadas

### Frontend

- Next.js
- React
- TailwindCSS
- Recharts
- Tabler Icons

### Backend

- Django + Django REST Framework
- Simple JWT (autenticación)
- Django CORS Headers
- Openpyxl (exportación Excel)
- google-genai (Gemini 2.5 Flash)

### Base de Datos

- MySQL (Aiven)

### Despliegue

- Frontend: Vercel
- Backend: Render
- Base de datos: Aiven

---

## 🏗️ Arquitectura del Proyecto

```bash
Frontend (Next.js - Vercel)
        ↓
API REST (Django - Render)
        ↓
MySQL Database (Aiven)

        ──► Gemini 2.5 Flash API (recomendaciones IA)
```

---

## 📂 Estructura del Proyecto

```bash
project-root/
│
├── frontend/          # Aplicación Next.js
│   ├── app/           # Páginas y layout
│   ├── src/views/     # Vistas del estudiante
│   ├── src/context/   # Contextos React
│   ├── src/hooks/     # Custom hooks
│   ├── src/lib/       # Cliente API y utilidades
│   ├── src/constants/ # Constantes y tipos
│   ├── src/components/# Componentes reutilizables
│   └── public/        # Archivos estáticos (profesiones.json, imágenes)
│
├── backend/           # API REST con Django
│   ├── accounts/      # Módulo de usuarios
│   ├── assessments/   # Test vocacional, resultados y recomendaciones IA
│   │   ├── services/  # GeminiCareerService
│   │   ├── data/      # preguntas.json
│   │   └── migrations/
│   ├── core/          # Utilidades compartidas
│   ├── config/        # Configuración de Django
│   └── static/        # Diagramas de casos de uso
│
└── README.md
```

---

## ⚙️ Funcionalidades Principales

### 👤 Gestión de Usuarios

- Registro e importación masiva desde Excel
- Inicio de sesión con JWT
- Roles: estudiante y administrador

---

### 🧠 Módulo de Autoconocimiento

- 9 preguntas reflexivas
- Registro de respuestas personales
- Contenido educativo y motivacional

---

### 📝 Test Vocacional

- 80 preguntas con imágenes ilustrativas
- Dos opciones: "Me interesa" / "No me interesa"
- Navegación secuencial con avance automático
- Persistencia en base de datos por usuario
- 5 áreas vocacionales evaluadas

---

### 📊 Procesamiento de Resultados

- Cálculo automático de puntajes por área
- Identificación de área principal y secundaria
- Visualización con gráfico de pastel interactivo
- Barra de progreso por área

Áreas vocacionales:

1. Arte y Creatividad
2. Ciencias Sociales
3. Económica / Administrativa
4. Ciencia y Tecnología
5. Ciencias de la Salud

---

### 🤖 Recomendaciones con IA

- Al completar el test, el backend envía a Gemini 2.5 Flash:
  - Preguntas donde el estudiante respondió "Me interesa"
  - Área principal y secundaria detectadas
  - Profesiones candidatas filtradas por esas áreas
- Gemini devuelve máximo 10 carreras con:
  - Nombre y descripción detallada
  - Explicación personalizada de por qué se adapta al estudiante
  - Puntaje de afinidad (0-100)
- Las recomendaciones se cachean en base de datos
- Si la IA falla, se muestran las carreras del archivo `profesiones.json` como fallback

---

### 🎯 Proyecto de Vida

- Registro de visión personal
- Metas a corto, mediano y largo plazo
- Preguntas de autoevaluación académica
- Compromisos personales

---

### 🛠️ Dashboard Administrativo

- Estadísticas generales (usuarios, tests completados)
- Distribución de áreas vocacionales entre estudiantes
- Listado de usuarios con filtros
- Exportación de usuarios a Excel (.xlsx)
- Importación masiva de estudiantes desde Excel
- Visualización de respuestas de autoconocimiento y proyecto de vida por usuario
- Control de apertura/cierre de registro

---

## 🔐 Seguridad

El sistema implementa:

- Autenticación JWT
- Hash de contraseñas
- Validaciones frontend y backend
- Middleware de seguridad
- Protección CORS

---

## 📊 Modelo de Datos

Entidades principales:

- **Usuario** — estudiantes y administradores
- **Área Vocacional** — clasificación de intereses
- **Profesión** — carreras asociadas a cada área
- **Resultado** — respuestas del test y puntajes por área
- **RecomendacionIA** — carreras recomendadas por Gemini (cache)
- **ReflexionAutoconocimiento** — respuestas del módulo reflexivo
- **ProyectoVida** — metas y visión del estudiante

---

## 📂 Diagramas de Casos de Uso

Caso de uso 01 - 04: (Registrarse, Iniciar sesión, Realizar autoconocimiento, Realizar test vocacional).
![CU01 - CU04](./backend/static/img/CU01.png)

Caso de uso 05 - 08: (Visualizar resultados, Obtener recomendaciones profesionales, Gestionar proyectos de vida, Descargar resultados).
![CU05 - CU08](./backend/static/img/CU02.png)

Caso de uso 09 - 12: (Consultar información educativa, Gestionar preguntas, Gestionar profesiones y áreas, Gestionar usuarios y estadísticas).
![CU09 - CU12](./backend/static/img/CU03.png)

---

## 🗄️ Diseño de la DB

![Diagrama de la base de datos](./frontend/public/Mockups/Diseño%20de%20la%20db/DB.jpeg)

---

## 🎨 Mockups

### Login

**Pantalla de inicio de sesión**
![Login](./frontend/public/Mockups/Login/Login.png)

**Pantalla de registro de usuario**
![Registro](./frontend/public/Mockups/Login/Registro.png)

### Estudiante

**Vista de inicio del estudiante**
![Inicio](./frontend/public/Mockups/Estudiante/Inicio.png)
**Panel principal del estudiante**

![Panel](./frontend/public/Mockups/Estudiante/Panel.png)

**Perfil del estudiante**
![Perfil](./frontend/public/Mockups/Estudiante/Perfil.png)

**Módulo de autoconocimiento**
![Autoconocimiento](./frontend/public/Mockups/Estudiante/Autoconocimiento.png)

**Proyecto de vida del estudiante**
![Proyecto de vida](./frontend/public/Mockups/Estudiante/Proyecto%20de%20vida.png)

**Test vocacional**
![Test vocacional](./frontend/public/Mockups/Estudiante/Test%20vocacional.png)

**Resultados del test vocacional**
![Resultados](./frontend/public/Mockups/Estudiante/Resultados.png)

### Admin

**Vista general del panel administrativo**
![Vista general](./frontend/public/Mockups/Admin/Vista%20general.png)
**Panel de administración**

![Panel](./frontend/public/Mockups/Admin/Panel.png)

**Gestión de preguntas**
![preguntas](./frontend/public/Mockups/Admin/preguntas.png)

**Gestión de profesiones**
![profesiones](./frontend/public/Mockups/Admin/profesiones.png)

**Listado de profesiones**
![profesiones2](./frontend/public/Mockups/Admin/profesiones2.png)

**Gestión de usuarios**
![Usuarios](./frontend/public/Mockups/Admin/Usuarios.png)

**Detalles del usuario**
![Detalles de usuario](./frontend/public/Mockups/Admin/Detalles%20de%20usuario.png)

---

## 👨‍💻 Autor

Proyecto desarrollado como solución académica para orientación vocacional y proyecto de vida.

---

## 📄 Licencia

Este proyecto es de uso académico y educativo.
