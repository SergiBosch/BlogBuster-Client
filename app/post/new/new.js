var miControlador = miModulo.controller(
    "postNewController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id
        $scope.controller = "new";

        $scope.anyadir = function () {
            $http({
                method: "POST",
                data: "data={\"titulo\": \"" + $scope.titulo + "\", \"cuerpo\": \"" + $scope.cuerpo + "\", \"etiquetas\": \"" + $scope.etiquetas + "\", \"fecha\": \"" + $scope.fecha + "\"}",
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: "http://localhost:8081/blogbuster/json?ob=post&op=insert"
            }).then(function (response) {
                $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/10";
            });
        }
    }]
)