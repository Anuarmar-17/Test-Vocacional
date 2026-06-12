import traceback
import sys

try:
    import django
    import os
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    django.setup()
except Exception as e:
    with open("errlog.txt", "w", encoding="utf-8") as f:
        traceback.print_exc(file=f)
