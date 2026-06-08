"""
Lógica de negocio para el test vocacional.
El frontend envía respuestas ya calculadas con la estructura de resultados_acumulados.json.
"""

from .models import Student, TestResult


def save_test_result(session_id, respuestas):
    """
    Guarda el resultado del test.
    Recibe el session_id y las respuestas del estudiante.
    El frontend ya calculó los puntajes usando preguntas.json.
    """
    student = Student.objects.get(session_id=session_id)

    result = TestResult.objects.create(
        student=student,
        respuestas=respuestas,
        estado='COMPLETADO'
    )

    return result
