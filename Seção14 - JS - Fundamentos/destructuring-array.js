//A desestruturação torna fácil extrair apenas o que é necessário de um array, objeto;

    const veiculos = ['mustang', 'f-1450', 'caminhonete', ['avião']]

//acessar o 1º e 2º indices através do desestruturação
    const [carro, moto] = veiculos //você atribui o valor de moto:f-145 a uma variável que tem o nome de moto! 
    console.log(carro, moto)

//caso queira pular algum valor: 
    const[carro1, , suv] = veiculos
    console.log(carro1, suv);

//array dentro do array:
    const [, , ,[voo]] = veiculos//ignora o primeiro elemento, o segundo, o terceiro... 
    console.log(voo)