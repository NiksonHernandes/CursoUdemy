//forEach(element, index, array) -> O método forEach()executa uma função em cada elemento de um array.

    const carros = ["Mercedes", "Audi", "Ferrari"]

    function imprimir(nome, indice, array) { //ordem de chamada para o array (element, index, array)
        console.log(indice, nome, array)
               
    }

    carros.forEach(imprimir) //passa a função como parâmetro para o forEach

//Sem callback

    const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

    let notasBaixas = []
    for(let indice in notas){
        if(notas[indice] < 7){
            notasBaixas.push(notas[indice])
        }
    }

    console.log(notasBaixas)

//Com callback
/*O filter()método cria um novo array preenchido com elementos que passam em um teste fornecido por uma função, retorna TRUE ou FALSE
é chamada pra cada elemento do array, pra verificar se atende a função ou n*/
    
    function testeValor(nota) {
        return nota < 7 //retorna true ou false
    }

    notasBaixas = notas.filter(testeValor) //o resultado do notas.filter() vai ser um novo array, ou seja, o notasBaixas.

    console.log(notasBaixas)
