//Arrow function só funciona quando é atribuida a alguma função

    let dobro1 = (a) =>{
        return a + 1;
    }

//MODO SIMPLIFICADO:

    let dobro = a => a + 1 //return e parenteses implícito (para valores únicos)
    //console.log(dobro(1))

//EXEMPLO 2: 

    function Pessoa(){
        this.idade= 0;
    
        setInterval(() => {
            this.idade++
            console.log(this.idade)     
        }, 1000);
    }

    //new Pessoa

//EXEMPLO 3:

//comportamento do THIS dentro da arrow function(o THIS aponta para o módulo) e em uma função normal(o THIS aponta pro global)

    let comparaComThis = function(param) {
        console.log(this === param)
    }
     
    comparaComThis(global) //retorna true ((global) é meio que o window do DOM, mas do NODE) -> nesse caso ele aponta para a função
    //tomar cuidado qnd for mexer com o THIS dentro de uma função, pois vc estara mexendo no escopo global

    const obj = {}
    //associamos a função comparaComThis a o obj
    comparaComThis = comparaComThis.bind(obj)
    comparaComThis(global) //retorna false, ele n aponta mais para o escopo globarl, pois agr o comparaComThis vai apontar para obj, aponta para o escopo do obj

    comparaComThis(obj)//retorna true, pq de fato o this, dentro da função, aponta para o obj por conta do BIND

//testando com arrow function

    let comparaComArrow = param => console.log(this === param)
    /* a diferença entre o Arrow e a função normal, é que o this das Arrow são armazenadas dentro do módulo(um arquivo) do NODE,
    no contexto léxico, o this foi escrito dentro de um arquivo, um módulo, ou seja, ele pertence a esse módulo! */

    comparaComArrow(global)//retorna false, pois o dono desse THIS é o módulo, não o escopo global
    comparaComArrow(module.exports)//retorna true. Pronto, provei pra vc que aponta para o Módulo e não para o Global

    /*No arrow function, o THIS não é flexivel, ou seja, ele sempre vai apontar para a arrow function, msm q vc peça pra ele apontar
    para um obj, diferente ddas funções normais*/

    comparaComArrow = comparaComArrow.bind(obj)
    comparaComArrow(obj) //retorn false, pq n é flexível
    
  