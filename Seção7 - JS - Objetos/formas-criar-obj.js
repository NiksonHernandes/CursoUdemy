//usando a notação literal:
    const obj1 = {}
    console.log(obj1)

//através do new Object:
    const obj2 = new Object()
    console.log(obj2)

//funções construtoras:
    function obj3(nome, idade , sexo = 'm'){
        this._nome = nome, //tornou o essa variável(_nome) pública, com o THIS, ela n esta encapsulada dentro do objeto, n esta exclusiva para ele
        this._sexo = sexo

        this.retornaNome = () => {
            return idade //idade esta encapsulada, não pode ser mudada apartir do momento q é colocada
        }
    }

    const teste1 = new obj3("Nikson", 21, 'Masculino')
    console.log(teste1.retornaNome())
  

//Função factory:
    function obj4(nome, salario, faltas){
        return{
            nome: nome,
            salario,
            faltas,

            retornaDados() {
                return `Seu nome: ${nome} \nsalário: ${salario}\nfaltas: ${faltas} `
            }

        }
    }

    const teste2 = new obj4("Paulo", 1200, 4)
    console.log(teste2.retornaDados())

//Object.create 
    const filha = Object.create(null)
    filha.nome = 'ANA'

    console.log(filha)

//Uma função famoas que retorna um Obj...
    const DeJSON = JSON.parse('{"info": "Eu sou um Json"}') //.parse, transforma os dados do Json em obj, ou seja, mais facil de trabalhar
    console.log(DeJSON.info)