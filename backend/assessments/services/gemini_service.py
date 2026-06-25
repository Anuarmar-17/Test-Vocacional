import os
import json
from google import genai
from google.genai import types
from django.conf import settings


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PREGUNTAS_PATH = os.path.join(BASE_DIR, 'assessments', 'data', 'preguntas.json')


def _cargar_preguntas():
    if not os.path.exists(PREGUNTAS_PATH):
        return []
    with open(PREGUNTAS_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)


class GeminiCareerService:
    def __init__(self):
        api_key = os.environ.get('GEMINI_API_KEY')
        if not api_key:
            api_key = getattr(settings, 'GEMINI_API_KEY', None)
        self.api_key = api_key
        self.api_key_configured = bool(api_key)
        self.model_name = 'gemini-2.5-flash'

    def _build_prompt(self, area_principal, area_secundaria, preguntas_interes_principal,
                      preguntas_interes_secundaria, profesiones_filtradas):
        preguntas_texto = []
        for q in preguntas_interes_principal:
            preguntas_texto.append(f"[{area_principal}] {q}")
        for q in preguntas_interes_secundaria:
            preguntas_texto.append(f"[{area_secundaria}] {q}")

        profesiones_texto = json.dumps([
            {
                "nombre": p.get("nombre"),
                "descripcion": p.get("descripcion", ""),
                "duracion": p.get("duracion", ""),
                "area": p.get("area", "")
            }
            for p in profesiones_filtradas
        ], ensure_ascii=False, indent=2)

        prompt = f"""Eres un orientador vocacional experto en español. Tu tarea es recomendar carreras universitarias basadas en los intereses del estudiante.

DATOS DEL ESTUDIANTE:
- Área principal: {area_principal}
- Área secundaria: {area_secundaria}

PREGUNTAS QUE LE INTERESARON (respondió "Me interesa"):
{chr(10).join(f"- {t}" for t in preguntas_texto)}

PROFESIONES CANDIDATAS (selecciona SOLO de esta lista, NO inventes carreras):
{profesiones_texto}

INSTRUCCIONES IMPORTANTES:
1. Selecciona un MÁXIMO de 10 carreras de la lista de profesiones candidatas.
2. NO inventes carreras que no estén en la lista proporcionada.
3. Prioriza las carreras que más se alineen con las preguntas que le interesan al estudiante.
4. Distribuye las recomendaciones entre el área principal y secundaria según el puntaje de cada área.
5. Responde SOLO con JSON válido, sin explicaciones adicionales.

FORMATO DE RESPUESTA (JSON):
{{
  "carreras_recomendadas": [
    {{
      "nombre": "Nombre exacto de la carrera",
      "descripcion": "Descripción detallada de la carrera",
      "por_que_recomendada": "Explicación personalizada de por qué esta carrera se adapta a sus intereses específicos",
      "puntaje_afinidad": 95,
      "duracion": "5 años",
      "area": "Área a la que pertenece"
    }}
  ]
}}"""
        return prompt

    def generar_recomendaciones(self, area_principal, area_secundaria,
                                respuestas_estudiante, profesiones_filtradas):
        if not self.api_key_configured:
            raise RuntimeError("GEMINI_API_KEY no está configurada")

        preguntas = _cargar_preguntas()
        interes_principal = []
        interes_secundaria = []

        area_principal_lower = area_principal.lower()
        area_secundaria_lower = area_secundaria.lower()

        for q in preguntas:
            qid = q.get("id")
            qarea = (q.get("area") or "").lower()
            respuesta = respuestas_estudiante.get(str(qid)) or respuestas_estudiante.get(qid)

            if respuesta == "Me interesa":
                if qarea in area_principal_lower or area_principal_lower in qarea:
                    interes_principal.append(q.get("pregunta", ""))
                elif qarea in area_secundaria_lower or area_secundaria_lower in qarea:
                    interes_secundaria.append(q.get("pregunta", ""))

        prompt = self._build_prompt(
            area_principal, area_secundaria,
            interes_principal, interes_secundaria,
            profesiones_filtradas
        )

        client = genai.Client(api_key=self.api_key)
        response = client.models.generate_content(
            model=self.model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json"
            )
        )

        text = response.text.strip()
        if text.startswith("```"):
            text = text.split("\n", 1)[-1]
            text = text.rsplit("\n", 1)[0]
            if text.endswith("```"):
                text = text[:-3]
        text = text.strip()

        try:
            data = json.loads(text)
            return data.get("carreras_recomendadas", [])
        except json.JSONDecodeError:
            raise ValueError(f"Gemini devolvió JSON inválido: {text[:500]}")
