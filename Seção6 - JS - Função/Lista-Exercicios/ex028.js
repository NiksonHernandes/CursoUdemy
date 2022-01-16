// ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. 

    function vetor(valores){
        let pares = 0;
        let impares = 0

        for(let i in valores){
            if(valores[i] % 2 == 0){
                pares++
            }else{
                impares++
            }
        }
        return ['pares: ', pares, 'impares: ', impares]
    }   

    console.log(vetor([1, 2, 3, 4]))