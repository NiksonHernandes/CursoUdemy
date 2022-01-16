/*O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto    Preço 
100     Cachorro Quente         R$ 3,00 
200     Hambúrguer Simples      R$ 4,00 
300     Cheeseburguer           R$ 5,50 
400     Bauru                   R$ 7,50 
500     Refrigerante            R$ 3,50 
600     Suco                    R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente.*/

    function cardapio(codigo, quantidade = 0){
        switch(codigo){
            //parseFloat(conta.toFixed(2));
            case 100:
                return `Código 100 - Cachorro Quente - Valor: ${(quantidade * 3.00).toFixed(2)}`
            case 200:
                return `Código 200 - Hambúrguer Simples - Valor: ${(quantidade * 4.00).toFixed(2)}`
            case 300:
                return `Código 300 - Cheeseburguer - Valor: ${(quantidade * 5.50).toFixed(2)}`
            case 400:
                return `Código 400 - Bauru - Valor: ${(quantidade * 7.50).toFixed(2)}`
            case 500:
                return `Código 500 - Refrigerante - Valor: ${(quantidade * 3.50).toFixed(2)}` 
            case 600:
                return `Código 700 - Suco - Valor: ${(quantidade * 2.80).toFixed(2)}`  
            default:
                return "Código inválido"
        }
    }

    console.log(cardapio(100, 3))
    console.log(cardapio(200, 3))
    console.log(cardapio(300, 3))
    console.log(cardapio(400))
    console.log(cardapio(500, 3))
    console.log(cardapio(600, 3))
    console.log(cardapio(700, 3))
