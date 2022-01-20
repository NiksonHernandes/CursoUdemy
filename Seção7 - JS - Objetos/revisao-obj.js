 //Objeto é um conjunto de dados que possuem propriedades e valores
 //OBJ é uma coleção dinâmica de pares - chave e valor/ propriedade e valor

    const produto = new Object //instanciar -> A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente.

// adiciona dinamicamente uma propriedade e seu valor no obj 
    produto.nome = "Cadeira" 
    produto['marca do produto'] = 'Generico' 
    produto.preco = 220

    console.log(produto)

//deletar um obj atraves do delete:
    delete produto.preco
    delete produto['marca do produto']

    console.log(produto)

    const Carro = {
        modelo: 'A5',
        valor: '1500',
        proprietario: {//obj dentro de obj
            nome: "Raul",
            idade: 56,
            endereco: {
                rua: "Rua dos Boldos",
                numero: 100,
                bairro: "Catedral"
            }
        },

        condutores: [{nome: 'Junior',idade: 19}, {nome: 'Marta', idade: 56}], //array de objetos

        calcularcombustivel: function(){//função dentro do objeto, ou seja, um método
            //...
        }
    }

    Carro.proprietario.endereco.numero = 120
    console.log(Carro.proprietario.endereco.numero)
 