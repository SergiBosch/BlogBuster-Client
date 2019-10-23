miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/:page/:pageRows',{templateUrl:'app/homeTemplate.html',controller:'homeController'})
    
    $routeProvider.when('/multi',{templateUrl:'app/multiplicacionTemplate.html',controller:'multiplicacionController'})
    $routeProvider.when('/suma',{templateUrl:'app/sumaTemplate.html',controller:'sumaController'})

    $routeProvider.otherwise({redirectTo:'/1/10'})


}])