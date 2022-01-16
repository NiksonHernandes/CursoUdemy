/*Um funcionário irá receber um aumento de acordo com o seu plano de 
trabalho, de acordo com a tabela abaixo:  
Plano  Aumento 
A       10% 
B       15% 
C       20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

    function plano(plano, salarioAtual =0){
        switch(plano){
            case 'A': case 'a':
                return `Aumento de 10% no salário: ${Math.floor(salarioAtual * 1.10)}`
            case 'B': case 'b':
                return `Aumento de 15% no salário: ${Math.floor(salarioAtual * 1.15)}`
            case 'C': case 'c':
                return `Aumento de 20% no salário: ${Math.floor(salarioAtual * 1.20)}`
            default:
                return "Plano inválido"
        }
    }

    console.log(plano('a', 100))
    console.log(plano('B', 100))
    console.log(plano('C', 100))
    console.log(plano('d', 100))