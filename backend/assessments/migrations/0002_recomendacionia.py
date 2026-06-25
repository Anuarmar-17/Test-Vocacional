from django.db import migrations, models
import django.db.models.deletion
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
                ('carreras', models.JSONField(default=list, blank=True)),
                ('fecha_generacion', models.DateTimeField(default=django.utils.timezone.now)),
                ('resultado', models.OneToOneField(
                    db_column='resultado_id',
                    on_delete=django.db.models.deletion.CASCADE,
                    related_name='recomendacion_ia',
                    to='assessments.resultado',
                )),
            ],
            options={
                'db_table': 'recomendaciones_ia',
                'managed': True,
            },
        ),
    ]
