//A desestruturação torna fácil extrair apenas o que é necessário de um array, objeto, função:

    const pessoa = {
        nome: 'Ana',
        idade: 22,
        hobbies: {
            casa: 'ler',
            rua: 'correr'
        }
    }

//acessar o nome e idade através do desestruturação
    const {nome, idade} = pessoa //'tire de dentro do objeto pessoa o nome e a idade' 
    console.log("usando destructuring:", nome, idade)

    //é a msm coisa q isso, só que de forma mais resumida: 
    console.log("método antigo:", pessoa.nome, pessoa.idade)

//atribuindo o valor a uma variável:
    const {nome: n, idade: i} = pessoa 
    console.log(n, i)

//acessando obj dentro do obj:
    const {hobbies: {casa, rua}} = pessoa          
    console.log(rua, casa)
