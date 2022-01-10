const escola = "C0d3r"

console.log(typeof escola)

console.log(escola.charAt(4)) //pega o elemento no índice 4, ou seja, r
console.log(escola.charCodeAt(3)) //retorna o valor do elemento no índice 3 de acordo com a tabela ASC, ou seja, d = 100
console.log(escola.indexOf('0')) //procura o elemento na string e retorna o seu índice, ou seja, 0 índice 1. Caso n exista, ele retorna -1.

console.log(escola.substring(0, 3)) //retorna a string da localização colocada. (0, 3) inicia no índice zero e termina no 3, sem incluir o último índice, sendo ele opcional. Ou seja, C0d

//concatenar: 
console.log("Escola " .concat(escola).concat("!"))

//substitui um valor por outro
console.log(escola.replace(3, 'e'))//sustitui o elemento no índice 3 por e 
console.log(escola.replace(/\d/, 'e')) //sustitui todos os elementos do tipo letra pelo e 

//gerar um Array:
console.log("Ana, Marcio, Tainara".split(",")) //gera uma string com separação pela vírgula

//expressões:
function up(string){
    return string.toUpperCase()
}
//ou, só funciona sem os parenteses (string), qnd tem um único parametro, caso fosse (a,b) não funcionaria
const up = (string) => string.toUpperCase()

console.log(`Eii... ${up('cuidado')}`)