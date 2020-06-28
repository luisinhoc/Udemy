// modelo, chassi, quantidade de portas

function Carro(modelo,chassi, qtdPortas){
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}

Carro.prototype.andar = () => console.log("vrum vrum");

/*const prototipo = new Carro("prototipo" , "123456", "2");
console.log(prototipo)
prototipo.andar();*/


function Sonix(modelo, chassi, qtdPortas){
  Carro.call(this, modelo, chassi, qtdPortas);

}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix
Sonix.prototype.abrirTectoSolar = () => console.log("A abrir tecto solar");

const sonix = new Sonix("Sonix", "56565", 5)

console.log(sonix);
sonix.andar();
sonix.abrirTectoSolar();

//ES6 classes

class Carro {
  constructor(modelo, chassi, qtdPortas){
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdPortas = qtdPortas
  }

  andar(){
    console.log("Vrum vrum");
  }
}

class Sonix extends Carro{
  constructor(modelo, chassi, qtdPortas){
    super(modelo, chassi, qtdPortas)
  }

  abrirTectoSolar(){
    console.log("A Abrir Tecto Solar")
  }
}

const carroBasico = new Carro("Basico", "56565", 2)
console.log(carroBasico)
console.log(carroBasico.andar())

const carroSonix = new Sonix("Sonix", "85959", 5);
console.log(carroSonix)
console.log(carroSonix.andar())
console.log(carroSonix.abrirTectoSolar())

// metodos estaticos


class Carro{
  static abrirPorta(){
    console.log("A abrir a porta")
  }

  static fecharPorta(){
    console.log("Fechar porta")
  }
}

Carro.abrirPorta()
Carro.fecharPorta()

// nome, numero de controlos, tipo de saida de video e midia
// vantagens WeakMap
const propriedades = new WeakMap();

class Jogo{
  constructor(nome,controlos,saida,midia){
    propriedades.set(this, {nome,controlos,saida,midia})
  }

  recuperarPropriedade(propriedade){
    return propriedades.get(this)[propriedade]
  }
}

const xbox360 = new Jogo('xbox360', 4, "hdmi", "dvd")

console.log(xbox360.recuperarPropriedade("nome"))
