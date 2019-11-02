var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window','promesasService', function ($scope, $http, $routeParams, $window, promesasService) {
        $scope.id = $routeParams.id;
        $scope.user = $window.sessionStorage.getItem("username");

        promesasService.ajaxGet('post', $scope.id)
                .then(function (response) {
                    $scope.id = response.data.message.id;
                    $scope.titulo = response.data.message.titulo;
                    $scope.cuerpo = response.data.message.cuerpo;
                    $scope.etiquetas = response.data.message.etiquetas;
                    $scope.fecha = response.data.message.fecha;
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