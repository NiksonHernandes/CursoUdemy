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

  
    //EXPLICAÇÃO PRECISA

    /*
    Cara, realmente é um pouco chato de entender mesmo, mas vamos lá:

            let comparaComThis = function(param){
                console.log(this === param)
            }
    
            comparaComThis(global)
            //Console: true

    Nesse primeiro caso aqui ele vai retornar true pois esse global é como o próprio nome diz, é um objeto global. Depois verifica se o this e o global são estritamente iguais e exibe true, pois ambos estão nesse contexto global (tanto o this quanto o global). No navegador segue o mesmo estilo, só que ao invés de usarmos global usaremos o window que é a mesma coisa (no contexto do navegador).

    Vamos para a próxima implementação:

            const obj = {}
            comparaComThis = comparaComThis.bind(obj)
            comparaComThis(global)
            //Console: false

    Tá, mas por que isso aqui da false? A resposta é simples, nesse exemplo o comparaComThis irá ser apontado para o obj (nessa linha aqui comparaComThis = comparaComThis.bind(obj)) e não mais para o escopo global, ou seja, quando passamos o objeto global "global" e comparamos com o "this" ele da false, já que o escopo foi alterado.

    E agora, por que isso dá true?

            const obj = {}
            comparaComThis = comparaComThis.bind(obj)
            comparaComThis(obj)
            //Console: true

    Pois agora estamos passando o obj (Vale lembrar que agora estamos referenciando a função para o obj e não mais para o escopo global) e consequentemente quando passamos o obj ele retorna true.


    Agora vamos para as ArrowFunction:

            let comparaComThisArrow = param => console.log(this === param)
            comparaComThisArrow(global)
            //Console: false

    Ele vai imprimir false aqui, pois esse this se referencia ao seu próprio modulo (coisa da arrow function) e não ao objeto global da aplicação, sacou? Para fazer isso retornar true pra gente é só fazer isso:

            let comparaComThisArrow = param => console.log(this === param)
            comparaComThisArrow(module.exports)
            //Console: true
    
            let comparaComThisArrow = param => console.log(this === param)
            comparaComThisArrow(this)
            //Console: true

    Isso quer dizer que estamos referenciando a esse mesmo modulo da arrow function (digamos que estamos referenciando ao seu escopo local da função). As duas implementações acima estão corretas.


    E por fim, o Léo tenta forçar a mudança de referencia da Arrow function para vermos o que acontece, só que como ele fala no vídeo, o comportamento da arrow permanece intacta, ou seja, se tentarmos isso aqui:

            let comparaComThisArrow = param => console.log(this === param)
            comparaComThisArrow = comparaComThisArrow.bind(obj)
            comparaComThisArrow(obj)
            //Console: false
    Não vai dar certo, pois não podemos usar o bind para mudar esse escopo da arrow.

    */