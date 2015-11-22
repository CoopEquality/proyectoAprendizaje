"""eqdjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
import django_filters
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers, serializers, viewsets, filters, generics
from django.conf.urls import *
from eqequipo.models import *

router = routers.DefaultRouter()

class EquiposSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipo
        fields = ('id', 'nombre')

class PersonaSerializer(serializers.ModelSerializer):
    equipo = EquiposSerializer()
    class Meta:
      model = Persona
      fields = ('id', 'nombre', 'apellido', 'edad', 'equipo')

class EquipoViewSet(viewsets.ModelViewSet):
    queryset = Equipo.objects.all()
    serializer_class = EquiposSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'nombre')
    
class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('id', 'nombre', 'apellido', 'edad', 'equipo')

router.register(r'equipo', EquipoViewSet)
router.register(r'persona', PersonaViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]