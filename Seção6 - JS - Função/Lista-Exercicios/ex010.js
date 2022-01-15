/* ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false. */

    function verifica(n1){
        if(n1 % 3 == 0){
            return true
        }else{
            return false
        }

    }
    
    console.log(verifica(3))
    console.log(verifica(2))
    console.log(verifica(150))    