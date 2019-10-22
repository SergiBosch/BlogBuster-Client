var miControlador = miModulo.controller(
    "dividirController",
    ['$scope', '$http', 'miServicio01', function ($scope, $http, myService) {
    	$scope.resultado=null;

        $scope.tabla=function(){
        	var total=[];
            var datos;
            
            for(i=1;i<=$scope.op1;i++){
            	var total2={fila: []};
            	for(j=1;j<=$scope.op2;j++){
            		datos={columna: myService.dividir(i,j)};
            		total2.fila.push(datos);
            	}
            	total.push(total2);
            	
            }
            
            $scope.resultado=total;
        }
    }]
)
