var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.id = $routeParams.id;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
            $scope.post = response.data.response;
        });

        $scope.borrar = function (mySelect) {
            $http({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:8081/blogbuster/json?ob=post&op=remove&id=" + $scope.id
            }).then(function (response) {
                $window.location.href = "/baseAngularJS2/#!/post/plist/1/10";
            });
        }

        $scope.volver = function () {
            $window.location.href = "/baseAngularJS2/#!/post/plist/1/10";
        }
    }]
)
