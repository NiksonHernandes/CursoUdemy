//exemplo 1:

var a =2
console.log(a);

qualquer = () => {
    console.log(a);
    var a = 3;
    console.log(a)
    /*meio q ficaria:
    var a = undefined;
    console.log(a)
    a = 3
    console.log(a)
    */
}
qualquer()


//exemplo 2:

function getValor(){
    function retornaValor(){
        return 1;
    }

    return retornaValor();

    function retornaValor(){
        return 2;
    }
    
    /*meio q ficaria -> método tmb sofre hoisting:
        function retornaValor(){
            return 1;
        }
    
        function retornaValor(){
            return 2;
        }
        
        return retornaValor(); ->resultado seria 2, pq prevalece o último valor.
        
    */
}
var resultado = getValor();
console.log(resultado);