 //Função de fábrica -> É UMA FUNÇÃO QUE RETORNA UM OBJ
 //função de fabricar uma nova instancia de obj

        //exemplo: 
        const celular = {
            marca: "Samsung",
            tamanhoTela: function() {
                vertical: 155
                horizontal: 75
            },
            bateria: 5000,
            
            ligar: function(){
                console.log("Fazendo ligação...")
            }
        }

        //factory function vai encapsular essa informação dentro de um método que cria o objeto

        //factoryfunction: 
        function novoCelular() { 
            const celular = {
                marca: "Samsung",
                tamanhoTela: function() {
                    vertical: 155
                    horizontal: 75
                },
                bateria: 5000,
            
                ligar: function(){
                    console.log("Fazendo ligação...")
                }
            }
            return celular; 

        }

        //forma mais simplificada: 
        function novoCelular1(marca, tamanhoTela, bateria ) { 
            return {
                //marca: marca,
                //ou apenas:
                marca,
                tamanhoTela: tamanhoTela,
                bateria: bateria,
            
                ligar1(){
                    return `Realizando ligação para a empresa ${this.marca}`
                },

                descricao(){
                    return `A marca do aparelho: ${this.marca}\nO tamanho da tela em polegadas: ${this.tamanhoTela}\nA voltagem da bateria: ${this.bateria}`
                }
            }
        }

        const samsung = novoCelular1('Samsung', 123, 5000);
        console.log(samsung.descricao());
        console.log(samsung.ligar1())
      
