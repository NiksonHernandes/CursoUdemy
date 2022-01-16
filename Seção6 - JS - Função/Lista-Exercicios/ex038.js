/*​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

    function contador(inicio = 0, fim = 100){
        let impar = [];
        if(inicio >= fim || fim >100){
            return 'valores invalidos'
        }else{
            for(inicio; inicio<=fim; inicio++){
                if(inicio % 2 != 0){
                    impar.push(inicio)
                }
            }
            return impar
        }
      
           
    }   

   console.log(contador(0, 100))