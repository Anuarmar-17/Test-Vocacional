from rest_framework.response import Response

class SuccessResponse(Response):
    """
    Standardized success response.
    """
    def __init__(self, data=None, message='Operación exitosa', status=None, template_name=None, headers=None, exception=False, content_type=None):
        response_data = {
            'success': True,
            'message': message,
            'data': data
        }
        super().__init__(data=response_data, status=status, template_name=template_name, headers=headers, exception=exception, content_type=content_type)

class ErrorResponse(Response):
    """
    Standardized error response.
    """
    def __init__(self, message='Ocurrió un error', status=400, template_name=None, headers=None, exception=False, content_type=None):
        response_data = {
            'success': False,
            'error': {
                'detail': message
            }
        }
        super().__init__(data=response_data, status=status, template_name=template_name, headers=headers, exception=exception, content_type=content_type)
