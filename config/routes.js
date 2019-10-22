miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/',{templateUrl:'control-temp/home/template.html',controller:'homeController'})
    $routeProvider.when('/suma',{templateUrl:'control-temp/suma/template.html',controller:'sumaController'})
    $routeProvider.when('/resta',{templateUrl:'control-temp/resta/template.html',controller:'restaController'})
    $routeProvider.when('/multi',{templateUrl:'control-temp/multiplicacion/template.html',controller:'multiplicacionController'})
    $routeProvider.when('/dividir',{templateUrl:'control-temp/dividir/template.html',controller:'dividirController'})

    $routeProvider.otherwise({redirectTo:'/'})


}])