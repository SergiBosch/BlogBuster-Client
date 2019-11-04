var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$http', '$routeParams', '$window', 'auth', '$location',function ($scope, $http, $routeParams, $window, auth, $location) {
        if (auth.data.status != 200) {
            $location.path('/login');
        }
        $scope.authStatus = auth.data.status;
        $scope.authUsername = auth.data.message;
        $scope.id = $routeParams.id;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=get&id=" + $scope.id
        }).then(function (response) {
            $scope.post = response.data.message;
        });

        $scope.borrar = function () {
            $http({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:8081/blogbuster/json?ob=post&op=remove&id=" + $scope.id
            }).then(function (response) {
                $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/10";
            });
        }

        $scope.volver = function () {
            $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/10";
        }
    }]
)
