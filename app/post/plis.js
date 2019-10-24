var miControlador = miModulo.controller(
    "postPlistController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.paginaActual = $routeParams.page;
        $scope.filasPagina = $routeParams.pageRows;

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getcount"
        }).then(function (response) {
            totalPages = Math.ceil(response.data.message / $scope.filasPagina);
            paginacion(totalPages);            
        });

        $http({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getpages&page=" + $scope.paginaActual + "&rowPage=" + $scope.filasPagina
        }).then(function (response) {
            $scope.tablaPosts = response.data.message;
        });

        $scope.showSelectValue = function (mySelect) {
            $window.location.href = "/blogbusterclient/BlogBuster-Client/#!/post/plist/1/" + mySelect;
        }

        paginacion = function (totalPages) {
            $scope.paginas = [];
            for (i = 1; i <= totalPages; i++) {
                if (i == 1) {
                    $scope.paginas.push(i);
                }

                if (i == $scope.paginaActual && i-2> 1) {
                    // $scope.botonera.push(0);
                    $scope.paginas.push(i-2);
                }

                if (i == $scope.paginaActual && i-1> 1) {
                    // $scope.botonera.push(0);
                    $scope.paginas.push(i-1);
                }

                if (i == $scope.paginaActual && i != 1) {
                    $scope.paginas.push(i);
                }
                if (i == $scope.paginaActual && i+1< totalPages) {
                    $scope.paginas.push(i+1);
                    // $scope.botonera.push(0);
                }

                if (i == $scope.paginaActual && i+2< totalPages) {
                    $scope.paginas.push(i+2);
                    // $scope.botonera.push(0);
                }

                if (i == totalPages && i != 1 && i != $scope.paginaActual) {
                    $scope.paginas.push(i);
                }
            }
        }
    }]
)
