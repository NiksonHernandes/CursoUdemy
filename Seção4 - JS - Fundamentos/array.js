//é um vetor unidirecional

//VETORES - ARRAYS: 
        
let familia = [1,2,"amendoim",4,5];
console.log(familia);//todos os elementos do array

console.log("Na posição 2:", familia[2]);//elemento 2 do array;

console.log(familia.length); //tamanho do array;

let colega = [

    "Nikson",
    "Monte Alto",
    "Homem"

];

//adiciona itens no array:
coleguinha = [1,2,3]
    //inicio:
    coleguinha.unshift(0);

    //meio:
    coleguinha.splice(3, 0, 19)//quando não quiser deletar nada, só colocar o primeiro indice, onde quer começar e dps coloca o 0, no terceiro indice coloca o valor que quer inserir

    //fim:
    coleguinha.push(5);
    coleguinha.push("Corintiano");
    coleguinha.push({id:'ok'}, false, null, 'teste');

console.log(`Array coleguinha: ${coleguinha}`)//retorna: 0,1,2,19,3,5


//remover elementos do array:

    //pop - remove o ultimo elemento do array;
    colega.pop();
    console.log(colega);

    //shift - remove o primeiro elemento 
    colega.shift()
    console.log(colega);

    //splice - remove qualquer elemento de acordo com a posição do elemento
    colega.splice(2,1);//elemento da posição 2, "quantos a partir dele?" apenas 1.
    //concole.splice(2); remove tudo a partir do elemento 2;
    console.log(colega);

//alterar um elemento no array
    colega[0] = "Paulo"; //passa o elemento que vc quer mudar e passa o outro valor
    console.log(colega);

//executar os elementos do array:
let total_elementos = colega.length;
let aux = ''; // '' -  pra dizer q vai entrar uma string; nikson+br+paulo+br+montealto...

for(var i = 0; i < total_elementos; i++){
    aux = aux + colega[i] + `<br>`;
}
console.log(aux);


//array de array: matriz;

var matriz = [];

matriz.push(['1a', '1b', '1c']); // 1- linha;  a - coluna;
matriz.push(['2a', '2b', '3c']); 
matriz.push(['3a', '3b', '3c']);

//mostrar na tela:
//let total_elementos2 = matriz.length;
let aux2 = '<table border="5">';

for(let linha = 0; linha < matriz.length; linha++)
{   
    aux2 += '<tr>';
    for(let coluna = 0; coluna < matriz[linha].length; coluna++) // .length é referente as matriz[linhas]
    {
        aux2 += '<td>' + matriz[linha][coluna] + '</td>';
    }
    aux2 += '</tr>';
}
aux2 += '</table>';
console.log(aux2);

//Encontrar Elementos do Tipo Primitivo:
    const numeros = [1,2,3,4,1,5]
    // indexOf método que descobre se tem um valor dentro do Array
    numeros.indexOf(2)//retorno o indice do número se ele existir, caso não encontre retorna o -1
    console.log(numeros.indexOf(2))

    //lastIndexof():
    numeros.lastIndexOf(1)//retorna o indice da ultima ocorrencia do valor passado, caso contrário -1
    console.log(numeros.lastIndexOf(1)) //-> retorna 4

    //includes():
    numeros.includes(2) //retorna true ou false
    console.log(numeros.includes(2))

//Encontrar Elementos do Tipo Referencia: (objeto dentro de um array, por exemplo):
    const marcas = [
        {id:1, nome:'Paulo'},
        {id:2, nome:'Carlos'}
    ]
    marcas.includes({id:1, nome:'Paulo'})//não funciona com Referencia

    //find: 
        //retorna o valor do primeiro elementos que passa no teste, caso contrário retorna 'undefined'
        const teste = marcas.find(function(marca){
            return marca.nome === 'Paulo';
        })

        console.log(teste)

        const number = [ 1,2,344, 10, 123, 55454]

        const teste1 = number.find((number) => {
            return number > 10;
        })
        
        console.log(teste1)//vai retornar o primeiro valor maior que 10 que for encontrado

//Esvaziar um array:
    let numeros1 = [1,2,3,5]

    //Solução 1:
    numeros1 = [];

    //Solução 2: 
    numeros1.length = 0;
    
    //Solução 3: 
    numeros1.splice(0, numeros1.length);

    //Solução 4: -> menos usada!
    while(numeros1.length > 0)
        numeros1.pop();

//Combinar e dividir Arrays:
const primeiro = [1,2,3];
const segundo = [4,5,6];

    //juntar/combinar arrays: 
    let combinado = primeiro.concat(segundo);
    console.log(combinado)
    
    //juntar com SPREAD
    combinado = [...primeiro, ...segundo ]
    console.log( combinado = [...primeiro, 'a', ...segundo, 'abacate'])

    //dividir array: 
    combinado.slice(1, 3)//inicio e fim, inicia no indice 1 e para no indice 3, ele sempre pega o último indice -1. É O INDICE, NÃO O ELEMENTO!!!
    //ou
    combinado.slice(1) // vai do primeiro indice até o ultimo
    console.log(combinado.slice(1, 3))//retorna 2,3 

//FOREACH -> Iterar sobre array, percorrer sobre o aray

    const numeros2 = [1,2,3,57,10];

    for(num of numeros2){
        console.log( num);
    }

    //outra forma:
    numeros2.forEach(function(num){//ele recebe uam função de callback
        console.log(num)
    })

    //para obter o indice tmb
    numeros2.forEach(function(num, indice){//ele recebe uam função de callback
        console.log(indice + ': ' + num)
    })


//JOIN -> Separa o array com string

    const numeros3 = [10,20,30,40]

    numeros3.join('.') //adicionado entre eles um ponto
    console.log(numeros3.join('.'))

    //caso queira fazer ao contrário, separar baseado em algo
    const frase = "Meu cachorro se chama Martelo!"
    let result = frase.split(' ')//separa por palavras a cada espaço
    console.log(frase.split(' '))
    
    console.log(result.join('-'))