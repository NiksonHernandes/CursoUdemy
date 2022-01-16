//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
    
    function media(vetor){
        let soma = 0;
        let media = 0;
        for(let i in vetor){
            soma += vetor[i];
        }
        media = soma / (vetor.length)
        return media
    }
    
    console.log(media([1,2,3]))