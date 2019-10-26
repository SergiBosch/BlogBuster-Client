var miControlador = miModulo.controller(
    "postPlistController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.paginaActual =  parseInt($routeParams.page);
        $scope.rppActual  =  parseInt($routeParams.pageRows);
        $scope.controller = "plist";

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getcount"
        }).then(function (response) {
            $scope.numPaginas = Math.ceil(response.data.response / $scope.rppActual);
            paginacion(2);
        });

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=" + $scope.paginaActual + "&rpp=" + $scope.rppActual
        }).then(function (response) {
            $scope.tablaPosts = response.data.response;
        });

        $scope.showSelectValue = function (mySelect) {
            $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/" + mySelect;
        }

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
                } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)){
                    $scope.botonera.push('...');
                }
            }
        }
    }]
)
