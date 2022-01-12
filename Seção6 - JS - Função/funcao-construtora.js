//função de construtor
//instanciar -> A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente.

        //exemplo: 
        function novoCelular(marca, tamanhoTela, bateria){
            return{ 
                marca,
                tamanhoTela,
                bateria,
                ligar(){
                    return `Este celular é da marca: ${this.marca}`
                }
            }
        }
    
        //Pascal case: UmDoiTresQuatro
        //camelCase: umDoisTresQuatro

        //constructor function
        function Celular(marca = 'X', tamanhoTela = 123, bateria = 5000){
            this._marca = marca,
            this._tamanhoTela = tamanhoTela,
            this._bateria = bateria,
            this.ligar1 = () => {
                return `Este celular é da marca: ${this._marca}`
            },
            this.comentarios = [ ]
        }

        const NovoCelular = new Celular('Positivo', 124, 3500);
        console.log(NovoCelular);
        console.log(NovoCelular.ligar1())
        
//outro exemplo

    function Carro (velocidadeMax = 200, delta = 5) {
        //atributo privado da funcao
        let velAtual = 0

        //metodo publico - use o this para tornar ela global e publica
        this.acelerar = function() {
            if(velAtual + delta <= velocidadeMax){
                velAtual += delta
            }else{
                velAtual = velocidadeMax
            }
        }

        this.getVelAtual = function(){
            return velAtual;
        }
    }

    //instanciar -> A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente.

    const uno = new Carro //meio q eu copiei, instanciei, essa função na variável
    uno.acelerar() //chamou a func acelerar, ent botou 5 
    console.log(uno.getVelAtual())

    const ferrari = new Carro(350, 20)
    ferrari.acelerar() //20
    ferrari.acelerar() //40
    ferrari.acelerar() //60
    console.log(ferrari.getVelAtual())