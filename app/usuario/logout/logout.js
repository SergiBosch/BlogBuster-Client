var miControlador = miModulo.controller(
    "usuarioLogoutController",
    ['$scope', '$http', '$window', 'promesasService', '$location', function ($scope, $http, $window, promesasService, $location) {
        $scope.controller = "login";

            promesasService.ajaxLogout()
                .then(function (response) {
                    if (response.data.status == 200){
                        $window.sessionStorage.removeItem("username");
                        $location.path("/login")
                    }
                })

    }]
)