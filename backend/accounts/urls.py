from django.urls import path
from .views import login_view, refresh_view, me_view, register_view

urlpatterns = [
    path('login/', login_view, name='login'),
    path('refresh/', refresh_view, name='token_refresh'),
    path('me/', me_view, name='current-user'),
    path('register/', register_view, name='register'),
]
