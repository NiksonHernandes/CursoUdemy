
    function rand({min, max=1000}){ /*esse min=0 e max=1000 é para não correr o risco de retornar undefined, ou seja, caso ele passe só o min=10, ele automaticamente vai atribuir o max=1000
        CHAMADO DE PARAMETRO PADRÃO! */
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    
    const obj = {
        min: 10,
        max: 50
    }

    console.log(rand(obj))

//exemplo 2

    const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red'
    }

    myVehicle(vehicleOne)

    function myVehicle({type, color, brand, model}) {
        const message = 'Meu ' + type + ' é um ' + color + ' ' + brand + ' ' + model + '.';
        console.log(message)
    }

    
   