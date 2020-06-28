/*const map = new Map();
const funcao = () => {};
const objeto = {};*/

//set
/*map.set("string", "sou uma string");
map.set("string2", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma funcao");*/

/*for(chave of map.values()){
  console.log(chave)
}*/

/*for(chave of map.entries()){
  console.log(chave)
}*/


/*
//get
console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

// delete
map.delete("string2");
console.log(map.has("string2"));

// clear all values
map.clear();*/


/*const livros = [
  {"titulo": "O Poder do Hábito", "autor": "Charles Duhigg", "local" : "A1"},
  {"titulo": "Como Fazer Amigos e Influenciar Pessoas", "autor": "Dale Carnegie", "local" : "D2"},
  {"titulo": "Geração de Valor", "autor": "Flavio Augusto da silva", "local" : "L3"},
  {"titulo": "Os segredos da mente milionária", "autor": "T. Harv Eker", "local" : "04"}
]

const estantes = new Map();
for(livro of livros){
  estantes.set(livro.titulo, livro.local);
}

function getLocalizacaoLivro(titulo){
  return estantes.get(titulo) === undefined ? "livro não encontrado"  :  estantes.get(titulo)
}

const localizacao = getLocalizacaoLivro("O Poder do Hábito");
console.log(localizacao)*/

/*const weakMap = new WeakMap();
let element1 = {"atr" : 1};
let element2 = {"atr": 2};

weakMap.set(element1, "sou o elemento 1");
weakMap.set(element2, "sou o elemento 2");

console.log(weakMap.get(element1));
console.log(weakMap.get(element2));

element2 = null;

setTimeout(() => {
  console.log(weakMap.get(element2))
}, 3000);*/

// delete weak
// has weak
// set weak

/*function Pessoa(nome){
  this._nome = nome;
}

Pessoa.prototype.getNome = () => {
  return this._nome;
}

const roberto = new Pessoa('Roberto');
console.log(roberto.getNome());
console.log(roberto._nome)*/

//**Músicas disponiveis */
/*
const musica_1 = {"titulo" : "Sem você meu coração é null", "autor": "Oracle"}
const musica_2 = {"titulo" : "Meu coração componentizado", "autor": "React"}
const musica_3 = {"titulo" : "Tudo isso é dinamico", "autor": "JavaScript"}
const musica_4 = {"titulo" : "Não me chame depois...", "autor": "Node"}
const musica_5 = {"titulo" : "No amor não existe rollback", "autor": "SQL"}

let playlist = new Set([musica_1, musica_3, musica_5]);

// add musica
playlist.add(musica_1);
playlist.add(musica_3);

//remover musica
//playlist.delete(musica_1)

// remover todas as musicas
//playlist.clear();

//adicionar duplicado
playlist.add(musica_3);

//ver quantas mucias tem

console.log(playlist.size)

for(music of playlist){
  console.log(music)
}*/


/*const pessoa = {nome: "joaizinho"};

pessoa.idade = 32

const novaPessoa = { nome : "mariazinha"}

pessoa = novaPessoa;*/


//hoisting
/*nome = "bruna";
imprimirNome(nome);

function imprimirNome(nome){
  console.log("nome", nome);
}

var nome;*/