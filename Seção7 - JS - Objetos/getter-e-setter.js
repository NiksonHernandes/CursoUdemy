/*get e set -> pegar e definir
    Dá uma sintaxe mais simples
    Permite sintaxe igual para propriedades e métodos
    Pode garantir uma melhor qualidade de dados
    É útil para fazer coisas nos bastidores*/

    const Obj = {
        nome: "Paulo",
        curso: "ADM",
        semestre: 5,

        dados: function() {
            return this.nome
        }
    }

    console.log(Obj.dados())

    //com GET: -> chamar a função

    const Obj1 = {
        nome: "Miguel",
        curso: "Biologia",
        semestre: 2,

        get dados() {
            return `nome: ${this.nome} e curso: ${this.curso}`
        }
    }

    console.log(Obj1.dados)//não precisa dos () para chamar

    //com SET: -> setar um valor para uma propriedade
    
    const Obj2 = {
        nome: "",
        curso: "Matemática",
        semestre: 7,

        set dados(nome) {
            this.nome = nome//só vai mudar o valor da proriedade nome
        }
    }

    Obj2.nome = "Laura"
    console.log(Obj2.nome)

    //com GET e SET: 

    const Obj3 = {
        nome: "Nikson",
        curso: "Matemática",
        semestre: 7,

        get dados(){
            return this.nome
        },

        set dados(nome) {
            this.nome = nome//só vai mudar o valor da proriedade nome
        }
    }

    console.log(Obj3.dados)      //chamando o GET

    Obj3.nome = "Jaqueline"     //mudando com SET
    console.log(Obj3.nome)

    console.log(Obj3)
    



