//for...in em OBJETOS

    const pessoa = {
        nome: 'João',
        idade: 18,
        sexo: 'Masculino',
        time: 'Santos'
    };

    //loop 

    //chave = key-value;
    for(let propriedade in pessoa){ /*Propriedade de pessoa*/
        console.log(`${propriedade} = ${pessoa[propriedade]}`); 
    }

    //------------------------------------------------------------------
    //for...in em ARRAYS;

    const cores = ['vermelho', 'azul', 'preto', 'branco'];

    //loop
    for(let indice in cores){
        //console.log(indice); //imprime só o indice dos elementos no array
        //console.log(cores[indice]);//imprime só a cor, sem o índice na frente
        //ou
        console.log(indice, cores[indice])//imprime o indice e a cor na frente
    }

    //------------------------------------------------------------------

    //JEITO SIMPLIFICADO COM O ARRAYS - for...of

    for(let cor of cores){//imprimir cor(indice) de cores(array)
        console.log(cor);
    }
