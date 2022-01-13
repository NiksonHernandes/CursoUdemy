/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

    function triangulo(l1 = 0, l2 = 0, l3 = 0){
        if(l1 == l2 && l2 == l3){
            return "Equilátero"
        }else if(l1 == l2 || l1 == l3 || l2 == l3){
            return "Isóceles"
        }else{
            return "Escaleno"
        }
    }

    console.log(triangulo(10, 70, 80))
    console.log(triangulo(10, 10, 10))
    console.log(triangulo(10, 10, 2))
    