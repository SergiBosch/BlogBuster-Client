miModulo.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home/:page/:pageRows', { templateUrl: 'app/post/home/home.html', controller: 'postHomeController' })
    $routeProvider.when('/post/plist/:page/:pageRows/:colOrder?/:order?', { templateUrl: 'app/post/plist/plist.html', controller: 'postPlistController' })
    $routeProvider.when('/post/view/:id', { templateUrl: 'app/post/view/view.html', controller: 'postViewController' })
    $routeProvider.when('/post/remove/:id', { templateUrl: 'app/post/remove/remove.html', controller: 'postRemoveController' })
    $routeProvider.when('/post/edit/:id', { templateUrl: 'app/post/edit/edit.html', controller: 'postEditController' })
    $routeProvider.when('/post/new', { templateUrl: 'app/post/new/new.html', controller: 'postNewController' })

    $routeProvider.when('/login', { templateUrl: 'app/login/login.html', controller: 'loginController' })

    $routeProvider.otherwise({ redirectTo: '/home/1/10' })


}])