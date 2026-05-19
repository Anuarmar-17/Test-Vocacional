from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # App URLs will be added here as we create them
    path('api/v1/users/', include('users.urls')),
    path('api/v1/vocational-tests/', include('vocational_tests.urls')),
    path('api/v1/results/', include('results.urls')),
    path('api/v1/professions/', include('professions.urls')),
    path('api/v1/life-project/', include('life_project.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
