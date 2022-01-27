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

//Deinir uma propriedade: -> serve para restringir características únicas para a propriedade em questão.
    //antigo -> obj.nome = 'Carlos!'  

    /*Object.defineProperties(1º, 2º, 3º) 
    1º o OBJ que eu quero incluir a propriedade;
    2º definir o nome da propriedade dentro de aspas;
    3º OBJ com todas as características dessa propriedade definida, tipos:
        enumerable:
            true se e somente se este propriedade aparece durante enumeração das propriedade sobre o objeto correspondente.
            Valor padrão é false.
        value:
            O valor associado com a propriedade. Pode ser qualquer valor válido em JavaScript value (número, objeto, função, etc).
            Valor padrão é undefined.
        writable:
            true se e somente se o valor associado com a propriedade pode ser modificada com um assignment operator (en-US).
            Valor padrão é false.
        get:
            Uma função a qual serve com um getter para a propriedade, ou undefined se não existe getter. A retorno da função será usado como o valor da propriedade.
            Valor padrão é undefined.
        set:
            Uma função a qual server com um setter para a propriedade, ou undefined se não existe setter. A função receberá como argumento somente o novo valor sendo atribuído à propriedade.
            Valor padrão é undefined.
    */
    Object.defineProperty(pessoa, 'dataNascimento', {
        enumerable: true, //poderá ser listada, ou seja, vai aparecer qnd eu chamar o obj PESSOA (Object.keys())
        writable: false,
        value: '14/04/2000'
    }) 

    pessoa.dataNascimento = '02/02/1900' //não vai mudar, pq o whitable ta travado 
    console.log(pessoa.dataNascimento)
    console.log(Object.keys(pessoa))

//SINTAXE DO OBJETO: 
    const car = {
        cor: 'Azul', // propriedade e valor // key-value
        modelo: 'Fiat',
        ano: '2003',
        placa: 'GXC-9013',

        hobbies: ['Correr', 'Jogar bola'],

        digaOi: function (nome) {
            return `Olá ${nome}! `
            
        }
    }

    car.dono = 'João Paulo'; //adiciona nova propriedade.
    delete car.dono; //deleta a propriedade dono.

    car.hobbies.push("comer"); //adicionar nova propriedade no array dentro do objeto.

    car.digaOi('Nikson'); //chama o método e passa o parêmetro.

    //CRIAR UM MÉTODO: 
    var teste = {
        digaBye: function (nome) {
            return `Até mais ${nome}!`
        }
    }

    console.log(teste.digaBye('João'))

    //JUNTAR DOIS OBJETOS: 
    var pessoa = {
        nome: 'Nikson',
        idade: 19
    };

    var infoExtra = {
        pais: 'Brasil',
        estado: 'São Paulo'
    };

    let obj1 = Object.assign({}, pessoa, infoExtra)//chaves vazias - gerar um objeto novo. Dps passa os objetos que vc quer unir

    let obj3 = Object.assign({
        sexo: 'Masculino'
    }, pessoa, infoExtra)//pode adicionar propriedades nas chaves vazias

    let obj2 = Object.assign(pessoa, infoExtra) //joga as infoExtra dentro do objeto pessoa

    //FORMA MAIS CURTA DE JUNTAR 2 OBJ COM SPREAD(...), ESPALHAR: 
    var nomes = {
        primeiro: 'Paulo',
        sobrenome: 'José'
    };

    var animais = {
        dog: 'Peludo',
        cat: 'Beterraba'
    };

    var juncao = {
        ...nomes, //nome do objeto, mais os ... na frente para indicar que você quer a propriedade e valor deles
        ...animais,

        ...{//sintaxe para adicionar um novo objeto com novas propriedades
            sexo: 'M',
            profissao: 'Jogador'
        }
    }

    const objTeste = {...nomes}
    console.log(objTeste)

    //COMO FAZER QUE O NOME DA MINHA VARIÁVEL PASSE SEJA O VALOR DELA E NÃO O SEU NOME: 
    //-basta colocar o nome da variável entre [] dentro do objeto

    var nomeVariavel = 'estado' //quero passar o valor dela, não o nome dela (nome: nomeVariável, valor: 'estado')

    var teste = {
        testeNome: 'Jorge',
        /*nomeVariavel: 'Rio de Janeiro'*/ //vai imprimir: nomeVariavel: 'Rio de Janeiro'
        [nomeVariavel]: 'Rio de Janeiro' // vai imprimir: estado: 'Rio de Janeiro'
    }