
function meuParametro(parametro1 = "", parametro2 = ""){
  console.log(`${parametro1} ${parametro2}`)
}



meuParametro("Luis", "Costa")
meuParametro()



function imprimeNomeCompleto(nome = "", sobrenome = "", nomeDoMeio = ""){
  console.log(`${nome} ${nomeDoMeio} ${sobrenome}`)
}

imprimeNomeCompleto("Luis", "Costa", "Pedro");
imprimeNomeCompleto("Luis", "Costa")

//valores padrão
function calculaPotencia(x = 2,y = x){
  console.log(Math.pow(x,y))
}

calculaPotencia(); // 2^2
calculaPotencia(3); // 3^3
calculaPotencia(2,3) // 2^3

const v = "valor 1";

function funcao(x = v){
  const v = "valor 2";
  console.log(x)
}

funcao();


function exibeNome(nome, callback = z => {console.log(z)}){
  callback(nome);
}

exibeNome("Muriel")



function parametroObrigadorioValid(parametro){
  throw new Error(`O parametro ${pametro} é obrigatório`);
}
function inserirNaTabela(objeto = parametroObrigatorioValid("objeto")){

}

inserirNaTabela()