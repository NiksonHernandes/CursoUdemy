//caso eu queira relacionar o método que tem o THIS.SAUDACAO com uma variável, eu tenho q usar o método BIND(obj) -> obj - é o objeto em que o this esta relacioando

//BIND-> significa VINCULAR

    const pessoa = {
        saudacao: "Bom dia",
        falar(){
            console.log(this.saudacao)
        }
    }

    pessoa.falar()
    const fala = pessoa.falar //adiciona o método falar em uma função
    fala() /*quando chama a vaiável fala como se fosse a função, da erro(undefined). Pq a this.saudacao esta relacionada ao obj e restrito a ele.
    Ou seja, da um conflito entre paradigmas: funcional e OO*/

//caso eu queira relacionar o método que tem o THIS.SAUDACAO com uma variável, eu tenho q usar o método BIND(obj) -> obj - é o objeto em que o this esta relacioando
//vai VINCULAR o THIS a uma VARIÁVEL 

    const falaSaudacacao = pessoa.falar.bind(pessoa)
    falaSaudacacao()

//MÉTODO 2:

    function Pessoa() {
        this.idade = 0;

        setInterval(function (){/*dispara outra função a partir de um intervalo q vc passou, a cada 1000seg a função vai er disparada novamente*/
            this.idade++
            console.log(this.idade)
        }.bind(this), 1000)
    }

    new Pessoa/*nesse caso, vai dar NaN, pq quem esta disparando a função com this.idade++ é o setInterval, o seu temporizador, ou seja, o this não aponta para o objteto pessoa, pois quem esta disparando é o temporizado e não o proprio objeto pessoa. 
    Para resolver, colocamos no final da função dentro do setInterval .bind(this)
    Você esta amarrando o THIS na função Pessoa, que de fato o this vai apontar para Pessoa, pois esta amarrado com a função que foi chamada
    
    OUTRA FORMA:

    Quando o This esta associado a uma variável (const a = this), ele aponta para quem a variável esta associada, ou seja, se ela estiver dentro de um obj, ela o this vai apontar para o objeto qnd a variável for chamada e assim por diante.

    Entendendo isso, podemos fazer assim: 
    criar uma variável dentro da função Pessoa recebendo THIS, ou seja, const self = this
    E substitua o THIS de dentro de setInterval por self.
    
      function Pessoa() {
        this.idade = 0;

        const self = this

        setInterval(function (){
            self.idade++
            console.log(self.idade)
        }, 1000)
    }
    */