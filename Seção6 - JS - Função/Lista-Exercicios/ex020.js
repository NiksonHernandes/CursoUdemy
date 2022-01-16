/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

    function banco(valor){
        let notaCem = 0;
        let notaCinq = 0;
        let notaDez = 0;
        let notaCinco = 0;
        let notaUm = 0;
        
        let verifica = verificaValor(valor)
        while(valor>= verifica){
            switch(verifica){
                case 100:
                    notaCem ++;
                    valor = valor - 100
                    break
                case 50:
                    notaCinq ++;
                    valor = valor - 50
                    break
                case 10:
                    notaDez ++;
                    valor = valor - 10
                    break
                case 5:
                    notaCinco ++;
                    valor = valor - 5
                    break
                case 1:
                    notaUm ++
                    valor = valor - 1
                    break

            }
            verifica = verificaValor(valor)
        }
       
        return exibi(notaCem, notaCinq, notaDez, notaCinco, notaUm)
    }

    function verificaValor(valor){
        if(valor >= 100){
            return 100
        }else if(valor >=50){
            return 50
        }else if(valor >=10){
            return 10
        }else if(valor >=5){
            return 5
        }else if(valor >=1){
            return 1
        }
    }

    function exibi(notaCem, notaCinq, notaDez, notaCinco, notaUm){
        let resultado = ''
        if(notaCem > 0){
            resultado += `${notaCem} notas de 100.`
        }if(notaCinq > 0){
            resultado += `${notaCinq} notas de 50.`
        }if(notaDez > 0){
            resultado += `${notaDez} notas de 10.`
        }if(notaCinco > 0){
            resultado += `${notaCinco} notas de 5.`
        } if(notaUm > 0){
            resultado += `${notaUm} notas de 1.`
        }

        return resultado

    }

    console.log(banco(153));