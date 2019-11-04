var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$http', '$routeParams', '$window', 'auth', '$location', 'promesasService', function ($scope, $http, $routeParams, $window, auth, $location, promesasService) {
        if (auth.data.status != 200) {
            $location.path('/login');
        }
        $scope.authStatus = auth.data.status;
        $scope.authUsername = auth.data.message;
        $scope.id = $routeParams.id;

        promesasService.ajaxGet('post', $scope.id)
            .then(function (response) {
                $scope.post = response.data.message;
            });

        $scope.borrar = function () {
            promesasService.ajaxRemove('post', $scope.id)
                .then(function (response) {
                    if (response.data.status != 200) {
                        $scope.fallo = true;
                        $scope.falloMensaje = response.data.message;
                    } else {
                        $scope.fallo = false;
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $scope.hecho = true;
                    $scope.fallo = true;
                });
        }

        $scope.volver = function () {
            window.history.back();
        };
        $scope.cerrar = function () {
            $location.path('/home');
        };
    }]
)
