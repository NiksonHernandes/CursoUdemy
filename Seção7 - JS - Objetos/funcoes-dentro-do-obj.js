//Funções que existem dentro do OBJ
    const pessoa = {
        nome: 'Rebeca',
        idade: 12,
        peso: 15
    }

//Pegar todas as chaves ou valores do objeto passado -> key: value
    console.log(Object.keys(pessoa)) //chaves
    console.log(Object.values(pessoa)) //valores

//Gerar uma array com as propriedades e valores -> key: value
    console.log(Object.entries(pessoa)) //entries -> entradas

    //pode percorrer esse array:
    Object.entries(pessoa).forEach(elemento =>{
        console.log(`${elemento[0]}: ${elemento[1]}`)
    })
    console.log("-----//-----")
    //ou

    Object.entries(pessoa).forEach(([chave, valor]) =>{
        console.log(`${chave}: ${valor}`)
    })

//Deinir uma propriedade:
    