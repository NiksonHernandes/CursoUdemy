//var com looping 
    
console.log("Looping com var")
    for(var i=0; i<10; i++){
        console.log(i)
    }
    console.log('valor de i=', i) //imprime o valor que ele estava qnd saiu do laõ, ou seja, 10. 
    //como é um var, ele é visível fora do looping


    const funcs = []
    
    for(var k=0; k<10; k++){
        funcs.push(function(){
            console.log(k)
        })
    }
    funcs[2]()
    funcs[8]() //pelo fato de q var não tem escopo, ele vai pegar o último valor de k, ou seja, sempre 10

//let com looping

console.log("Looping com let")
    for(let j=0; j<10; j++){
        console.log(j)
    }
    //console.log('valor de j=', j)//vai dar erro, pq j só é visível dentro do looping

    const funcs2 = []
    
    for(let m=0; m<10; m++){
        funcs2.push(function(){
            console.log(m)
        })
    }
    funcs2[2]()
    funcs2[8]()