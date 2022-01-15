//faça um algoritmo que calcule o fatorial de um número.
    
    function fatorial(n){
        let fat = 1;       

        for(let i = n; i>1; i--){ 
            fat = fat * i           

        }
        console.log(fat)
        
    }  

    fatorial(5)