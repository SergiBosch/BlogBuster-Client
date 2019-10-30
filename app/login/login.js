var miControlador = miModulo.controller(
    "loginController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;
        $scope.controller = "login";

        
    }]
)