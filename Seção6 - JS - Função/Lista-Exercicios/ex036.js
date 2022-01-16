/*​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
o valor do elemento for maior que 5. */

    let vetor = [1,2,3,4,5]
    let n = 10

    function fun1(vetor, numero){
        let vetorFun1 = []

        for(let i in vetor){  
            vetorFun1.push(vetor[i] * numero) 
        }

        if(numero >  5){
            return fun2(vetorFun1, numero)
        }else{
            return vetorFun1
        }

    }

    function fun2(vetor, numero){
        let vetorFun2 = []

        for(let i in vetor){
            vetorFun2.push(vetor[i] * numero) 
        }
        return vetorFun2
    }

    console.log(fun1(vetor, n))