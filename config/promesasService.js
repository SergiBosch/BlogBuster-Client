miModulo.factory('promesasService', ['$http',
    function ($http) {
        return {
            ajaxGet: function (objeto, identificador) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=get&id=' + identificador);
            },
            ajaxGetCount: function(objeto){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+ objeto +'&op=getcount');
            },
            ajaxGetPage: function(objeto, paginaActual, rppActual){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+ objeto +'&op=getpage&page=' + paginaActual + '&rpp=' + rppActual);
            },
            ajaxGetPageOrder: function(objeto, paginaActual, rppActual, colOrder, order){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+ objeto +'&op=getpage&page=' + paginaActual + '&rpp=' + rppActual + '&order=' + colOrder + ',' + order);
            },
            ajaxRemove: function(objeto, identificador){
                return $http.get('http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=remove&id=' + identificador);
            },
            ajaxLogin: function (username, password) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=login&username=' + username + '&password=' + forge_sha256(password));
            },
            ajaxLogout: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=logout');
            },
            ajaxCheck: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=check');
            }
        }
    }])