    const a = 1;
    const b = 2;
    const c = 3;

//adicionar variável no obj:

    const obj1 = { //forma antiga:
        a: a,
        b: b,
        c: c
    }

    const obj2 = { //nova forma
        a, //msm q -> a: a
        b,
        c
    }

//juntar 2 variáveis como propriedade e valor: 

    const propri = "Preco"
    const valor = 1542
    
    const obj3 ={}
    obj3[propri] = valor