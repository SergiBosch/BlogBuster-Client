var miControlador = miModulo.controller(
    "usuarioLoginController",
    ['$scope', '$http', '$window', 'promesasService', '$location', function ($scope, $http, $window, promesasService, $location) {
        $scope.controller = "login";

        $scope.iniciarSesion = function () {
            promesasService.ajaxLogin($scope.form.username, $scope.form.password)
                .then(function (response) {
                    if (response.data.status == 200){
                        $window.sessionStorage.setItem("username",$scope.form.username);
                        $location.path("/post/plist/1/10")
                    }else {
                        $scope.form.username = "";
                        $scope.form.password = "";
                    }
                })
        }

    }]
)