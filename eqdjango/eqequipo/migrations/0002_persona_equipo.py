# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eqequipo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='persona',
            name='equipo',
            field=models.ForeignKey(default=1, to='eqequipo.Equipo'),
            preserve_default=False,
        ),
    ]
