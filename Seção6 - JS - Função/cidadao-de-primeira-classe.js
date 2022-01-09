// Função em JS é First-Class Object (Citizens)
// Higher-order function

//criar uma função de forma literal:
    function fun1(){}

//armazenar uma função na variável / função anônima: 
    const fun2 = function(){}

//armazenar dentro de um array:
    const array = [function(a,b){return a+b}, fun1, fun2]
    //pode armazenar tanto a função literal, como uma externa, como uma anônima fora do bloco

//executar a função dentro do array: 
    console.log(array[0](2,3))

//armazenar dentro de um atributo de objeto:
    const obj = {
        sub: function(){
            return ("Subtração... dentro do obj")
        }
    }
    console.log(obj.sub())
 
    //atribuir uma função anÔnima ao obj
    obj.div = function(){ return ("divisão... fora do obj")}
    console.log(obj.div())

//passar uma função como parametro para outra função:
    function run(fun){/*recebendo (fun) como uma função, se n receber como função vai gerar erro, é bom tratar o erro.*/
        fun()/*tem q ter os parenteses pq de fato vc esta chamando/invocando a função ser executada*/
    }

    run(function(){console.log("Executando...")})

//retornar uma função como parametro de outra: 
    function soma(a,b) {
        return function(c){
            console.log(a + b + c )
        }
    }

    soma(2,3)(4) /*quando executa a função soma(2,3) ele vem com o retorno de outra função, ou seja, ficaria: 
    function(c)(4) que recebe o (4). ou poderia fazer assim: 

    const somatoria = (2,3);
    somatoria(4)
    
    */