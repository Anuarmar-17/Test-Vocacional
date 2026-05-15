# 🎓 Sistema Web de Orientación Vocacional

Aplicación web full stack desarrollada para ayudar a estudiantes de educación media a identificar sus intereses profesionales mediante un test vocacional interactivo, recomendaciones de carreras y construcción de proyecto de vida.

---

# 📌 Descripción del Proyecto

La plataforma permite:

- Registro e inicio de sesión de usuarios
- Desarrollo de test vocacional
- Procesamiento automático de resultados
- Clasificación de áreas de interés
- Recomendaciones profesionales
- Gestión de proyecto de vida
- Panel administrativo
- Visualización gráfica de resultados

El sistema busca digitalizar y optimizar los procesos de orientación vocacional realizados tradicionalmente mediante formularios físicos.

---

# 🚀 Tecnologías Utilizadas

## Frontend

- Next.js
- React
- TailwindCSS
- Axios
- React Hook Form
- Zod
- Recharts

## Backend

- Django
- Django REST Framework
- Simple JWT
- Django CORS Headers

## Base de Datos

- PostgreSQL

---

# 🏗️ Arquitectura del Proyecto

```bash
Frontend (Next.js)
        ↓
API REST (Django REST Framework)
        ↓
PostgreSQL Database
```

---

# 📂 Estructura del Proyecto

```bash
project-root/
│
├── frontend/          # Aplicación Next.js
├── backend/           # API REST con Django
├── database/          # Scripts y documentación DB
├── docs/              # Documentación técnica
│
├── README.md
└── .gitignore
```

---

# ⚙️ Funcionalidades Principales

## 👤 Gestión de Usuarios

- Registro de usuarios
- Inicio de sesión
- Autenticación JWT
- Gestión de perfiles

---

## 🧠 Módulo de Autoconocimiento

- Formularios reflexivos
- Registro de respuestas personales
- Contenido educativo y motivacional

---

## 📝 Test Vocacional

- Test de 80 preguntas
- Validación de respuestas obligatorias
- Persistencia en base de datos

---

## 📊 Procesamiento de Resultados

- Clasificación automática
- Cálculo de puntajes
- Identificación de áreas predominantes

Áreas vocacionales:

1. Arte y creatividad
2. Ciencias sociales
3. Económica y administrativa
4. Ciencia y tecnología
5. Ciencias de la salud y ecológicas

---

## 💼 Recomendaciones Profesionales

- Profesiones asociadas por área
- Recomendaciones automáticas
- Visualización gráfica de resultados

---

## 🎯 Proyecto de Vida

- Registro de metas
- Visión personal
- Objetivos a corto, mediano y largo plazo

---

## 🛠️ Dashboard Administrativo

- Gestión de preguntas
- Gestión de profesiones
- Estadísticas generales
- Administración de usuarios

---

# 🔐 Seguridad

El sistema implementa:

- Autenticación JWT
- Hash de contraseñas
- Validaciones frontend y backend
- Middleware de seguridad
- Protección CORS

---

# 📈 Características Técnicas

- Arquitectura cliente-servidor
- API RESTful
- Diseño responsive
- Arquitectura MVC
- Base de datos relacional
- Escalable y mantenible

---

# 📊 Modelo de Datos

Entidades principales:

- Usuario
- Pregunta
- Respuesta
- Resultado
- Área Vocacional
- Profesión

---

# 🌐 Despliegue

## Frontend

- Vercel

## Backend

- Render / Railway

## Base de Datos

- PostgreSQL Cloud

---

# 🧪 Requisitos del Sistema

## Frontend

- Node.js 20+
- npm o pnpm

## Backend

- Python 3.11+
- pip
- virtualenv

## Base de Datos

- PostgreSQL 15+

---

# ⚡ Instalación del Proyecto

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

---

# 🔵 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend disponible en:

```bash
http://localhost:3000
```

---

# 🟢 Backend Setup

## Crear entorno virtual

```bash
cd backend

python -m venv venv
```

## Activar entorno virtual

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

## Instalar dependencias

```bash
pip install -r requirements.txt
```

## Ejecutar migraciones

```bash
python manage.py migrate
```

## Ejecutar servidor

```bash
python manage.py runserver
```

Backend disponible en:

```bash
http://localhost:8000
```

---

# 📌 Variables de Entorno

## Frontend `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Backend `.env`

```env
DEBUG=True

SECRET_KEY=your_secret_key

DB_NAME=database_name
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
```

---

# 📷 Futuras Mejoras

- Generación de PDF
- IA para recomendaciones personalizadas
- Chatbot vocacional
- Sistema multilenguaje
- Dashboard analítico avanzado
- Notificaciones por correo

---

# 👨‍💻 Autor

Proyecto desarrollado como solución académica para orientación vocacional y proyecto de vida.

---

# 📄 Licencia

Este proyecto es de uso académico y educativo.