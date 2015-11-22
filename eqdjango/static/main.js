var app = angular.module('equality', ["ngResource", "ngRoute"]);

app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});

// Crea el recurso Persona , haciendo referencia a nuestra api en django
app.factory('PersonasResource', function ($resource) {
  return $resource('/persona/:id', {id:'@id'},
    {
      'get':    {method:'GET', isArray:false},
      'query':  {method:'GET', isArray:true},
    });
});

app.factory('EquipoResource', function ($resource) {
  return $resource('/equipo/:id', {id:'@id'},
    {
      'get':    {method:'GET', isArray:false},
      'query':  {method:'GET', isArray:true},
    });
});

// rutas
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'contenido.html',
      controller  : 'principalController'
    })

    .when('/equipo/:equipoId', {
      templateUrl : 'contenido.html',
      controller  : 'principalController'
    })

    .otherwise({
      redirectTo: '/'
    });
});

app.controller('principalController', function ($scope, PersonasResource, EquipoResource, $routeParams, $location, anchorSmoothScroll) {
  
  // ir a x seccion de la pagina
  $scope.scrollTo = function(id) {
      $location.hash(id);
      anchorSmoothScroll.scrollTo(id);
   }
  
  // obtiene el id de la tarea desde la url y la convierte a int
  if($routeParams.equipoId)
  {
    var equipoId = parseInt($routeParams.equipoId, 10);  
  }else{
    var equipoId = 1;
  }
  
  
  // Forma de mostrar datos en angularjs, consumiendo nuestra api como recurso
  $scope.equipo = EquipoResource.get({id: equipoId});
  $scope.personas = PersonasResource.query({equipo: equipoId});
  
  
  // Forma de mostrar datos en angularjs  
  $scope.frases = [
    {
      "frase": "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos",
      "autor": "Michael Jordan"
    },
    {
      "frase": "Yo hago lo que tú no puedes, y tú haces lo que yo no puedo. Juntos podemos hacer grandes cosas",
      "autor": "Madre Teresa de Calcuta"
    },
    {
      "frase": "Trabajar en equipo divide el trabajo y multiplica los resultados",
      "autor": "Anónimo"
    },
    {
      "frase": "No preguntes qué puede hacer por ti el equipo. Pregunta qué puedes hacer tú por él",
      "autor": "Magic Johnson"
    },
    {
      "frase": "Los individuos marcan goles, pero los equipos ganan partidos",
      "autor": "Zig Ziglar"
    },
    {
      "frase": "La unidad es la variedad, y la variedad en la unidad es la ley suprema del universo",
      "autor": "Isaac Newton"
    },
    {
      "frase": "Las fortalezas están en nuestras diferencias, no en nuestras similitudes",
      "autor": "Stephen Covey"
    },
    {
      "frase": "No hay problema que no podamos resolver juntos, y muy pocos que podamos resolver por nosotros mismos",
      "autor": "Lyndon Johnson"
    },
    {
      "frase": "Los logros de una organización son los resultados del esfuerzo combinado de cada individuo",
      "autor": "Vince Lombardi"
    },
    {
      "frase": "Llegar juntos es el principio. Mantenerse juntos, es el progreso. Trabajar juntos es el éxito",
      "autor": "Henry Ford"
    },
    {
      "frase": "Ninguno de nosotros es tan bueno como todos nosotros juntos",
      "autor": "Ray Kroc"
    },
    {
      "frase": "Si quieres ir rápido, ve solo. Si quieres llegar lejos, ve acompañado", 
      "autor": "Proverbio africano"
    },
    {
      "frase": "Si estamos juntos no hay nada imposible. Si estamos divididos todo fallará", 
      "autor": "Winston Churchill"
    },
    {
      "frase": "Los cinco dedos separados son cinco unidades independientes. Ciérralos y el puño multiplica la fuerza. Ésta es la organización",
      "autor": "James Cash Penney"
    },
    {
      "frase": "Lo más hermoso del trabajo en equipo es que siempre tienes a otros de tu lado",
      "autor": "Margaret Carty"
    },
    {
      "frase": "No des a tus empleados por sentado. Si no valoras a tu equipo, ellos no valorarán a tus clientes",
      "autor": "Richard Branson"
    },
    {
      "frase": "Solos podemos hacer muy poco; unidos podemos hacer mucho",
      "autor": "Hellen Keller"
    },
    {
      "frase": "El espíritu de equipo es lo que da a muchas empresas una ventaja sobre sus competidores",
      "autor": "George Clements"
    }
  ]

  

})