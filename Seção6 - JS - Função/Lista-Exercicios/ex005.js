/* ​Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).  */

//tofixed()
    // var numObj = 12345.6789;
    // numObj.toFixed();       // Retorna '12346': note o arredondamento, não possui nenhuma parte fracionária
    // numObj.toFixed(1);      // Retorna '12345.7': note o arredondamento

//O método  toString() não requer parâmetros e deve retornar uma string

//replace  -> só funciona cm String
    //substitui um valor por outro
    // console.log(escola.replace(3, 'e'))//sustitui o elemento no índice 3 por e 

    function dinheiro(valor){
        let arredondamento = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
        return arredondamento
    }

    console.log(dinheiro(0.30000000000000004))
