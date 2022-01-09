 //Objeto é um conjunto de dados que possuem propriedades e valores
 
 
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
    //qnd vc usa o conchetes, vc pega o valor q tem dentro da variável 
}