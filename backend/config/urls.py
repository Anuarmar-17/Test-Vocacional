from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url=settings.FRONTEND_URL, permanent=False)),
    path('health/', lambda r: JsonResponse({'status': 'ok'})),
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('accounts.urls')),
    path('api/v1/', include('assessments.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
