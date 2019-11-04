miModulo.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/home/:page/:pageRows', {
        templateUrl: 'app/post/home/home.html',
        controller: 'postHomeController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/post/plist/:page/:pageRows/:colOrder?/:order?', {
        templateUrl: 'app/post/plist/plist.html',
        controller: 'postPlistController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/post/view/:id', {
        templateUrl: 'app/post/view/view.html',
        controller: 'postViewController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/post/remove/:id', {
        templateUrl: 'app/post/remove/remove.html',
        controller: 'postRemoveController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/post/edit/:id', {
        templateUrl: 'app/post/edit/edit.html',
        controller: 'postEditController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/post/new', {
        templateUrl: 'app/post/new/new.html',
        controller: 'postNewController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })

    $routeProvider.when('/login', {
        templateUrl: 'app/usuario/login/login.html',
        controller: 'usuarioLoginController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    })
    $routeProvider.when('/logout', {
        templateUrl: 'app/usuario/logout/logout.html',
        controller: 'usuarioLogoutController',
        resolve: {
            auth: function (promesasService) {
                return promesasService.ajaxCheck();
            }
        }
    });

    $routeProvider.otherwise({ redirectTo: '/home/1/10' })


}])