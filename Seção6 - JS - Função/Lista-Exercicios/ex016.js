/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. */   

    function calculadora(n1 = 0, op, n2 = 0){
        switch(op){
            case '+':
                return `Soma: ${n1 + n2}`
            case '-':
                return `Subtração: ${n1 - n2}`
            case '*':
                return `Multiplicação: ${n1 * n2}`
            case '/':
                return `Divisão: ${n1 / n2}`
            default:
                return "Operação inválida!"
        }
    }

    console.log(calculadora(10, '+', 10))
    console.log(calculadora(10, '-', 10))
    console.log(calculadora(10, '*', 10))
    console.log(calculadora(10, '/', 10))
    console.log(calculadora(10, '4', 10))