var miControlador = miModulo.controller(
    "homeController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        var page = $routeParams.page
        var pageRows = $routeParams.pageRows
        $scope.paginaActual = page;
        $scope.filasPagina = pageRows;

        $http({
            method:"GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getcount"
        }).then( function(response) {
            var totalRows = response.data.message; 
            var totalPages = totalRows / pageRows;
            if(totalRows % pageRows > 0){
                totalPages+=1;
            }
            var arrayPaginas = []
            for (i=1;i<=totalPages;i++){
                arrayPaginas.push(i);
            }
            $scope.paginas = arrayPaginas;
         });

        $http({
            method:"GET",
            withCredentials: true,
            url: "http://localhost:8081/blogbuster/json?ob=post&op=getpages&page="+page+"&rowPage="+pageRows
        }).then( function(response) {
            $scope.tablaPosts = response.data.message; 
         });

         $scope.showSelectValue = function(mySelect) {
            $window.location.href = "/blogbusterclient/BlogBuster-Client/#/1/"+mySelect;
        }
    }]
)
