var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window','promesasService', function ($scope, $http, $routeParams, $window, promesasService) {
        $scope.id = $routeParams.id;

        promesasService.ajaxGet('post', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.response.id;
                    $scope.titulo = response.data.response.titulo;
                    $scope.cuerpo = response.data.response.cuerpo;
                    $scope.etiquetas = response.data.response.etiquetas;
                    $scope.fecha = response.data.response.fecha;
                });

        $scope.modificar = function () {
            $http({
                method: "POST",
                data: "data={\"id\": " + $scope.id + ", \"titulo\": \"" + $scope.titulo + "\", \"cuerpo\": \"" + $scope.cuerpo + "\", \"etiquetas\": \"" + $scope.etiquetas + "\", \"fecha\": \"" + $scope.fecha + "\"}",
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: "http://localhost:8081/blogbuster/json?ob=post&op=update"
            }).then(function (response) {
                $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/10";
            });
        }
    }]
)