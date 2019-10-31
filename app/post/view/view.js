var miControlador = miModulo.controller(
    "postViewController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
            $scope.post = response.data.message;
        });
    }]
)