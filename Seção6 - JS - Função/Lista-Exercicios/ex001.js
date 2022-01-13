/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.*/

    function calculo(n1 = 0, n2 = 0){
        console.log(`A soma é: ${n1 + n2}, Subtração é: ${n1 - n2}, Multiplicação: ${n1 * n2}, Divisão: ${n1 /n2}`);
    }

    calculo(10, 2)