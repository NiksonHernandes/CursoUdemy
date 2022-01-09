//Tratativa de erro com Try (tentar)/Catch (pegue)/Throw (lançar):

/*
try -> um bloco de código, em que vc coloca o código que é mt propício a gerar algum erro. 
catch -> para tratar esse erro gerado pelo try, usamos o catch. Quando gerar um erro no try, ele cai automaticamente no catch.
  |=> no catch vc pode tratar o erro, mostrar uma mensagem, por exemplo, e enviar para o throw.
throw -> lança o erro ou relança o erro.
finally -> vai ser executado independente de ocorrer erro ou não.
*/

    function tratarErro(erro){
        throw new Error('ocorreu um erro...') /*new Error() -> mostra a mensagem direto na aba de erros*/
        //throw "ocorreu um erro"
        //throw 10
        //throw true 
        /*throw {
            nome: erro.name,
            msg: erro.mensage,
            date: new Date()
        }*/
    }

    function imprimirNome(obj){
        try{
            console.log(obj.name.toUpperCase() + "!!!")/*aq está como NAME e no objeto esta como NOME*/
        } catch(e){
            tratarErro(e)
        }finally{ /*finally -> vai ser executado independente de ocorrer erro ou não*/
            console.log("Passou no finally")
        }      
        
    }

    const obj = {
        nome: "Franco"
        //name: "Franco"
    }

    imprimirNome(obj)

