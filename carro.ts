interface CarroInterface {
    NomeCarro: number | string,
    AnoCarro: number,
    ModeloCarro: number|string
}

const carro: CarroInterface ={
    NomeCarro : 'Mustang',
    AnoCarro : 1988,
    ModeloCarro: 'Sportivo'
}

const carro1: CarroInterface = {
    NomeCarro : 'Corvette',
    AnoCarro : 1985,
    ModeloCarro: 'Sedan'
}

const carro2: CarroInterface = {
    NomeCarro : 'BMW',
    AnoCarro : 1982,
    ModeloCarro: 'SUV'
}

console.log(carro2);