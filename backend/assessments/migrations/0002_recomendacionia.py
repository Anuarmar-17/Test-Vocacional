from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('assessments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecomendacionIA',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('resultado_id', models.IntegerField(unique=True)),
                ('carreras', models.JSONField(default=list, blank=True)),
                ('fecha_generacion', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'db_table': 'recomendaciones_ia',
                'managed': True,
            },
        ),
    ]
