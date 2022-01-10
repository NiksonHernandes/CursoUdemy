// arguments é um array interno que toda função tem! 
/* quando nenhum parametro é passado, esse array esta vazio e vc 
tem a possibilidade de pegar todos os parametros que foram passados*/ 

    function soma(){
        let soma = 0;
        for(i in arguments){
            soma += arguments[i]
        }
        return soma
    }

    console.log(soma())
    console.log(soma(1,2,3,4,6,4))
    console.log(12,3, "teste")
    console.log("Olá, meu nome é")