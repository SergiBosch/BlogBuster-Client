miModulo.factory('miServicio01', function(){
    return {
        suma: function (operador1,operador2){
            return parseInt(operador1) + parseInt(operador2);
        },
        restar: function (operador1,operador2){
            return operador1 - operador2;
        },
        multiplicacion: function (operador1,operador2){
            return operador1 * operador2;
        },
        dividir: function (operador1,operador2){
            return operador1 / operador2;
        }
    }
})
