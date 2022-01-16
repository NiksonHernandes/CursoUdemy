//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

    function maioremenor(vetor){
        let maior = 0;
        let menor = 111000;

        

        for(let i in vetor){
           
            if(vetor[i] > maior){
                maior = vetor[i]
            }if(vetor[i] < menor){
                menor = vetor[i]
            }

        }
        return [maior, menor]
    }

    console.log(maioremenor([1,2,0,4,5,6,4,6,8,6,9]))