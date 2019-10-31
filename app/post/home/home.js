var miControlador = miModulo.controller(
    "postHomeController",
    ['$scope', '$http', '$routeParams', '$window','promesasService', function ($scope, $http, $routeParams, $window, promesasService) {
        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = parseInt($routeParams.pageRows);
        $scope.controller = "home";

        promesasService.ajaxGetCount('post')
        .then(function (response) {
            $scope.numPaginas = Math.ceil(response.data.message / $scope.rppActual);
            if ($scope.paginaActual < 1) {
                $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/home/1/" + $scope.rppActual;
            } else if ($scope.paginaActual > $scope.numPaginas) {
                $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/home/" + $scope.numPaginas + "/" + $scope.rppActual;
            }
            paginacion(2);
        });

        promesasService.ajaxGetPage('post',$scope.paginaActual, $scope.rppActual)
        .then(function (response) {
            $scope.posts = response.data.message;
        });

        function paginacion(vecindad) {
            vecindad++;
            $scope.botonera = [];
            for (i = 1; i <= $scope.numPaginas; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                } else if (i > ($scope.paginaActual - vecindad) && i < ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push(i);
                } else if (i == $scope.numPaginas) {
                    $scope.botonera.push(i);
                } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push('...');
                }
            }
        }
    }]
)