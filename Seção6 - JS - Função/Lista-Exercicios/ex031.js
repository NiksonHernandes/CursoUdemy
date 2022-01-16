//​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
    function negativos(vetor){
        let neg = 0
        for(let i in vetor){
            if(vetor[i] < 0){
                neg++
            }
        }
        return neg
    }

    console.log(negativos([-1, 1,3,4,-234, 4,2,-4]))