// arguments

function somaTudo(){
  let soma = 0;
  for(let i = 0; i < arguments.length; i++){
    soma += arguments[i]
  }

  console.log(soma)
}

somaTudo(1);
somaTudo(1,2);
somaTudo(1,2,3)

function somaTudo(...valores){
  return valores.reduce((soma, valor) => soma + valor, 0)
}

console.log(somaTudo(1)); //valores[0] = 1
console.log(somaTudo(1,2)); //valores[0] = 1 valores[1] = 2
console.log(somaTudo(1,2,3)); //valores[0] = 1 valores[1] = 2 valores[2] = 3

// Rest x Arguments

function multiplicaPorSoma(multiplicador, ...valores){
  return valores.reduce((soma, valor) => soma + (valor*multiplicador), 0)
}

console.log(multiplicaPorSoma(2,1,2))
console.log(multiplicaPorSoma(2,6,7))


//metodo apply
const args = [1,2,3];
console.log.apply(console, args)


//metodo spread
const argumentos = [1,2,3];
console.log(...argumentos)

// Operador Spread

const listMae = ["leite", "ovos", "papel"];
const listNamorada = ["arroz", "feijao", "sumo"];
const listEscritorio = ["papel A4", "caneta", "clipper"];

const listaCompras = listMae.concat(listNamorada, listEscritorio);
const listaCrompasSpread = [...listMae, ...listNamorada, ...listEscritorio]

console.log(listaCompras)
console.log(listaCrompasSpread)

// utilização spread
function contaQuantidadeVogaisNaoAcentuadas(...palavras){
  let qtdVogais = 0;
  for(let palavra of palavras){
    let palavralowercase = palavra.toLowerCase();
    const letras = [...palavralowercase];
    for(let letra of letras){
      if("aeiou".indexOf(letra) !== -1) qtdVogais++;
    }
  }
  console.log(qtdVogais)
}

contaQuantidadeVogaisNaoAcentuadas("es6");
contaQuantidadeVogaisNaoAcentuadas("java", "javascript", "delphi");
contaQuantidadeVogaisNaoAcentuadas("Não Considera AcentUADos")
