//função anônima é uma função que não tem nome!
    
    function soma(a, b) {
        return a + b;
    }

    let imprimeResultado = function(a, b, operacao = soma){ //função anonima, let estassociando o valor de operação à func soma, quando ela não receber nenhum parametro(ele assume soma)
        console.log(operacao(a,b))
    }

    imprimeResultado(1,3)
    imprimeResultado(1,3, soma)
    imprimeResultado(1,3, function (a,b) { //no lugar de operação, eu passo outra função
        return a - b;
    })