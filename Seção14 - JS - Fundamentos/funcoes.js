//você pode definir o valor do parametro para que ele não defina como undefined caso o valor não seja passado:
    function soma(a = 0, b=0){
        return a + b;
    }

    console.log(soma(1)) //ou seja, ficou como 1 + 0 = 1 

//armazenar uma função na variável:
    const imprimeSoma = function(n1, n2){
        console.log(n1+n2)
    }
    imprimeSoma(2,3)

//função arrow: 
    const somaNumeros = (a,b) => { 
        console.log(a+b)
    }
    somaNumeros(3,3)

//mais reduzido ainda, retorno implícito, com apenas uma linha:
    const subtracao = (a,b) => a - b;

    console.log(subtracao(3,1))
 
