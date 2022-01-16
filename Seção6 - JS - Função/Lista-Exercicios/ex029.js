/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.*/

    function vetor(valores){
        let intervalo = 0
        let foraIntervalo = 0
        for(let i in valores){
            if(valores[i] >=10 && valores[i] <=20){
                intervalo++
            }else{
                foraIntervalo++
            }
        }
        return `${intervalo} estão dentro do intervalo e ${foraIntervalo} estão fora do intervalo`
    }

    console.log(vetor([1,2,3,4,5,6,7,8,9,10,11,12]))