//Closure é o escopo criado quando uma função é declarada. 
//Esse escopo permite a função acessar e manipular variáveis externas à função 
//Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

//contexto léxico: 
     const x = "Global";

     function fora(){
        const x = "Local"
        function dentro(){
            return x
        }
        
        return dentro()
     }

    const myFun = fora()
    console.log(myFun) //retorna Local

    /*A função tem memória do escopo que ela acontece, mesmo vc atribuindo ela a uma variável fora do escopo, ela lembra das suas origens. A função dentro() esta deifinida apenas dentro do escopo da função fora(). Dentro() não tem variável local própria, por isso reusa a variável do pai.*/

    console.log(fora()) //retorna Local


//EXEMPLO 2:

    var name ='Explorer'
    function init() {
        var name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        displayName();
    }

    init();

    /*A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai. */