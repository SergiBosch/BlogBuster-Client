miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/post/plist/:page/:pageRows',{templateUrl:'app/post/plist.html',controller:'postPlistController'})
    $routeProvider.when('/post/view/:id',{templateUrl:'app/post/view.html',controller:'postViewController'})
    $routeProvider.when('/post/remove/:id',{templateUrl:'app/post/remove.html',controller:'postRemoveController'})

    $routeProvider.otherwise({redirectTo:'/post/plist/1/10'})


}])