# proyectoAprendizaje

###### Que vamos a intentar hacer ?
la idea es poder llegar a conocer :
* como funciona de manera simple el framework django como backend utilizandolo como una api rest.
* como funciona angularjs como frontend consumiendo datos desde la api rest de django.
* un poco de css y html para mostrar los datos de una manera "linda".

###### de que se va a tratar este mini-proyecto ?
se me ocurrio pensar en algo sencillo :
en el modelo vamos a tener personas y equipos, con una pequeña relacion entre ellos, con esto vamos a generar una api rest en django.
estos datos van a esr consumidos por angularjs y mostrarlos en una web con un poco de css.

###### Que es Django ?
------
es un framework web de código abierto escrito en Python que permite construir aplicaciones web más rápido y con menos código.

* Código abierto
* Permite construir aplicaciones web más rápido
* Utilizando menos código
* Principio DRY (Don’t Repeat Yourself).
* Legible, casi pseudocódigo

###### Comparación entre Django y otros frameworks con sus ficheros y carpetas
------
* Ruby on Rail: 149 ficheros y 35 carpetas
* Php Symfony: 117 ficheros y 29 carpetas
* Python Django: 4 ficheros y 1 carpeta
Al igual que otros frameworks de desarrollo web, django también trabaja con el patrón MVC (Modelo Vista Controlador) o específicamente con el MVT (Modelo Vista Template). 


###### Sitios web que utilizan o utilizaron el framework Django
------
* Google.
* Yahoo
* Discovery Comunication
* Instagram
* Pinterest
* National Geographic
* Walt Disney
* The New York Times
* Mozilla Fundation
Y otros mas!

### Instalar Django

###### Instalar pip
------
pip es una herramienta escrita en Python para facilitar la descarga e instalación de paquetes del lenguaje que se encuentren en el Python Package Index (PyPI).
```sudo apt-get install python-pip```

###### Instalar Django a traves de pip
------
```sudo pip install django```

###### Instalar requerimientos para hacer andar la api rest.
------
```pip install -r requirements.pip ```


### Configurar Django

###### Crear usuario para panel de administracion
python manage.py createsuperuser 


### Creamos un app llamada : EqEquipo (esta app ya esta creada en este repositorio)
```python manage.py startapp eqequipo```

esto nos crea la estructura :
admin.py
__init__.py
models.py
tests.py
views.py 


### Editores
-----
* gdit (ya viene instalado en linux)
* notepad (ya viene instalado en windows)
* https://code.visualstudio.com/ (windows/linux)
* https://atom.io/ (linux)
entre otros...


