var miControlador = miModulo.controller(
    "postNewController",
    ['$scope', '$http', '$routeParams', '$window', '$location', 'auth', function ($scope, $http, $routeParams, $window, $location, auth) {
        if (auth.data.status != 200) {
            $location.path('/login');
        }
        $scope.authStatus = auth.data.status;
        $scope.authUsername = auth.data.message;
        $scope.id = $routeParams.id
        $scope.controller = "new";
        $scope.fallo = false;
        $scope.hecho = false;

        $scope.anyadir = function () {
            $http({
                method: "POST",
                data: "data={\"titulo\": \"" + $scope.titulo + "\", \"cuerpo\": \"" + $scope.cuerpo + "\", \"etiquetas\": \"" + $scope.etiquetas + "\", \"fecha\": \"" + $scope.fecha + "\"}",
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: "http://localhost:8081/blogbuster/json?ob=post&op=insert"
            }).then(function (response) {
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