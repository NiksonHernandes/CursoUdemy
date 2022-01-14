/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.  */

    function divisao(dividendo = 0, divisor = 0){
        let vetor = []
    
        vetor.push(`o resultado da divisão é: ${dividendo / divisor}`);
        vetor.push(`o resto da divisão é: ${dividendo % divisor}`)    
      
        for(let i in vetor){
            console.log(vetor[i])
        }
    }

    divisao(10, 2);
    divisao(123,4)
