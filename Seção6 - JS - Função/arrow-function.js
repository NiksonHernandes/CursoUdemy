//Arrow function só funciona quando é atribuida a alguma função

    let dobro1 = (a) =>{
        return a + 1;
    }

//MODO SIMPLIFICADO:

    let dobro = a => a + 1 //return e parenteses implícito (para valores únicos)
    console.log(dobro(1))

//EXEMPLO 2: 

    function Pessoa(){
        this.idade= 0;
    
        setInterval(() => {
            this.idade++
            console.log(this.idade)     
        }, 1000);
    }

    new Pessoa

//EXEMPLO 3:

//comportamento do THIS dentro da arrow function    
     