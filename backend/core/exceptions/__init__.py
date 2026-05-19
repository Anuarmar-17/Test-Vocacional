from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status

def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    if response is not None:
        custom_response_data = {
            'success': False,
            'error': {
                'status_code': response.status_code,
                'detail': response.data.get('detail', 'Ocurrió un error en el servidor.')
            }
        }
        
        # If it's a validation error, include the field errors
        if response.status_code == status.HTTP_400_BAD_REQUEST:
            custom_response_data['error']['detail'] = 'Error de validación.'
            custom_response_data['error']['fields'] = response.data

        response.data = custom_response_data

    return response
