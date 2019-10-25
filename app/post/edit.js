var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
            $scope.titulo = response.data.response.titulo;
            $scope.cuerpo = response.data.response.cuerpo;
            $scope.etiquetas = response.data.response.etiquetas;
            $scope.fecha = response.data.response.fecha;
        });
    }]
)