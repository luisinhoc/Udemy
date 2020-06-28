const primos = [2, 3, 5];
const iterator = primos[Symbol.iterator]()
const equipaDesenvolvimento = {
    "quantidade": 3,
    "senior": "Luís",
    "pleno": "Márcia",
    "junior": "Christian",
    [Symbol.iterator]: function* () {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    }
}

const equipaNegocios = {
    "quantidade": 2,
    "director": "Marcelo",
    "vice": "Guilherme",
    [Symbol.iterator]: function* () {
        yield this.director;
        yield this.vice;
    }
}

const equipa = {
    equipaDesenvolvimento,
    equipaNegocios,
    [Symbol.iterator]: function* () {
        yield* equipaDesenvolvimento,
            yield* equipaNegocios
    }
}


for (let integrante of equipa) {
    console.log(integrante)
}