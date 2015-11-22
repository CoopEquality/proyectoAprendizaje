# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.

# Creamos un modelo equipo , con los atributo.
class Equipo(models.Model):
	nombre = models.CharField(max_length=50)
	
	def __unicode__(self):              
		return self.nombre


# Creamos un modelo llamado persona el cual va a tener los atributos de cada persona.
class Persona(models.Model):
	nombre = models.CharField(max_length=50)
	apellido = models.CharField(max_length=50)
	edad = models.IntegerField()
	equipo = models.ForeignKey(Equipo)
	
	def __unicode__(self):            
		return self.nombre + ' ' + self.apellido
	
