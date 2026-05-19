from django.db import transaction
from vocational_tests.models import Question, Option, Area
from professions.models import Profession
from .models import Result, AreaScore

@transaction.atomic
def calculate_result(user, answers):
    """
    Calcula el resultado del test vocacional dado un conjunto de respuestas.
    Formato esperado de answers: [{'question_id': 1, 'option_id': 2}, ...]
    """
    # Inicializar puntuaciones por área
    area_scores = {}
    
    for answer in answers:
        question_id = answer.get('question_id')
        option_id = answer.get('option_id')
        
        try:
            question = Question.objects.get(id=question_id)
            option = Option.objects.get(id=option_id)
            
            area_id = question.area.id
            if area_id not in area_scores:
                area_scores[area_id] = 0
            
            area_scores[area_id] += option.score
        except (Question.DoesNotExist, Option.DoesNotExist):
            continue

    # Crear el objeto de resultado
    result = Result.objects.create(user=user)
    
    # Guardar las puntuaciones por área y encontrar las áreas top
    top_areas = []
    max_score = -1
    
    for area_id, score in area_scores.items():
        area = Area.objects.get(id=area_id)
        AreaScore.objects.create(result=result, area=area, score=score)
        
        # Lógica simple para encontrar las áreas con mayor puntuación
        if score > max_score:
            top_areas = [area]
            max_score = score
        elif score == max_score:
            top_areas.append(area)

    # Asignar profesiones recomendadas basadas en las áreas top
    if top_areas:
        recommended_professions = Profession.objects.filter(areas_related__in=top_areas).distinct()
        result.recommended_professions.set(recommended_professions)

    return result
