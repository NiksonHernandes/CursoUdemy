/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

    function plano (idade){
        let resultado  = ''
        if(idade < 10){
            resultado += `Pagar: ${100 + 80}`
        }else if(idade >= 10 && idade <= 30){
            resultado += `Pagar: ${100 + 50}`
        }else if(idade > 30 && idade < 60){
            resultado += `Pagar: ${100 + 95}`
        }else if(idade >=60){
            resultado += `Pagar: ${100 + 130}`
        }

        return resultado
    }

    console.log(plano(60))