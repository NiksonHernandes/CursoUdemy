const imprimirResultado = function (nota) {
    switch(nota){
        case 10: case 9: /*caso for 10 ou caso for 9*/
            console.log("Quadro de Honra!");
            break;
        default: 
            console.log('Nota Inválida')
    }
}

imprimirResultado(9);