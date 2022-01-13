   
    function getPreco(imposto = 0, moeda ="R$") {
        return `${moeda} ${this.preco} - imposto => ${this.preco - imposto}`
    }
   
    const produto = {
        nome: "Notebook",
        preco: 4500,
        getPreco //assim que chama a função externa para o obj

    }

    console.log(produto.getPreco(10))

//outras 2 formas q eu tenho pra executar a função getPreco() é com Call e Apply:

    const carro = {moeda: "$$$", preco: 1460}

    //quero chamar o getPreco e passar o obj carro
    console.log(getPreco.call(carro))

    console.log(getPreco.apply(carro))

    /*A diferença entre os 2 é só a forma de passar os parametros. No call vc passa diretamente nos parametros do contexto, ex:
        console.log(getPreco.call(carro, 1599, '$')) -> são os parametros q vc vai passar pra função getPreco, não as propriedades do obj
        
    Já no apply, vc deve passar os parametros como um ARRAY, ou seja:
        console.log(getPreco.apply(carro, [1599, '$']))
    */

    console.log(getPreco.call(carro, 1599, '$')) 
    console.log(getPreco.apply(carro, [1599, '$']))