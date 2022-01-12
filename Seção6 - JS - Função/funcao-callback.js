//forEach(element, index, array) -> O método forEach()executa uma função em cada elemento de um array.

    const carros = ["Mercedes", "Audi", "Ferrari"]

    function imprimir(nome, indice, array) { //ordem de chamada para o array (element, index, array)
        console.log(indice, nome, array)
               
    }

    carros.forEach(imprimir)