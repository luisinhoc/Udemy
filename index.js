
/*const nomes = ["luis", "diego", "jose"];
nomes.forEach(element => console.log(element))*/

/*const canais = ["sbt", "globo", "record"];
canais.forEach(element => {canais.push('cultura'); console.log(element)})
console.log('----------')
canais.forEach(element => {console.log(element)})

const numeros = [1,2,3,4,5];

const alunos = [
  {"nome": "joao", "idade": 10},
  {"nome": "jose", "idade": 20},
  {"nome": "marcos", "idade": 30}
]
/*const dobro = numeros.map((numero) => numero*2)
console.log(dobro)

const jogos = [
  {"nome": "Uncharted 4: A Thiefs End", "categoria" : "ação"},
  {"nome": "Grand Turismo 6", "categoria" : "plataforma"},
  {"nome": "Need for Speed Most Wanted", "categoria" : "aventura"},
  {"nome": "Mario Kart 8", "categoria" : "shooter"},
  {"nome": "Forza Motorsport", "categoria" : "corrida"}
]

const todosJogosCorrida = jogos.every((jogo) => jogo.categoria === "corrida");
console.log(todosJogosCorrida);

const alunoProcurado = alunos.find((aluno) => aluno.nome === "jose");
console.log(alunoProcurado);

/*const maiores = alunos.filter((maiores) => maiores.idade <18)
console.log(maiores);*/

/*const corrida = alunos.some((aluno) => aluno.categoria === "corrida");
console.log("Tem Jogo de corrida? : " , corrida)*/

/*const nomes = alunos.reduce((arrayNomes,aluno) => {
  arrayNomes.push(aluno.nome);
  return arrayNomes;
}, [])
console.log(nomes);*/
/*const chapeuSelector = (bruxo) => {
  const casas = ["Grinfindoria", "Sonserina", "Corvinal", "Lufa-lufa"];
  const casa = casas[Math.floor(Math.random() * casas.length)];

  console.log(`Bruxo:${bruxo} | casa: ${casa}`);
}

const bruxos = ["Harry Potter", "Hermione", "Rony"];
const iteradorBruxos = bruxos[Symbol.iterator]()

console.log(iteradorBruxos.next())


/*for(bruxo of bruxos){
  chapeuSelector(bruxo);
}*/

//const carro = {"modelo" : "fiat", "ano": 1995}

/*for(item of numeros){
  if(item === 2) continue
  console.log(item)
  
}*/

/*for(const propriedade in carro){
  console.log(carro[propriedade])
}*/


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



// Temporal Dead Zone
/*let valor = 0;
if(true){
const valor = 5;
console.log(valor);

}
console.log(valor);*/

//Template strings
/*const login = "ecmascript";
const dia = "13 de Setembro";
const ano = 2016;

const mensagem = `Olá, ${login} \nHoje é: ${dia} de ${ano}`;
const n1 = 1;
const n2 = 2;


console.log(`
            exibindo
uma
palavra
por
linha
`)*/

/*const nome = "nome";
const idade = 23;
const endereco = "rua dos paes";

const div = `
<div>
  <p><b>Nome: </b> ${nome}</p>
  <p><b>Idade: </b> ${idade}</p>
  <p><b>Endreço: </b> ${endereco}</p>
</div>`

console.log(div);

const nome = "Luis";
const anos = 25;

function marcacao(strings, ...valores){
  return "oi";
}

const mensagem = marcacao`Meu nome é ${nome+ "!"} e eu tenho ${anos} anos`;
console.log(mensagem)*/

//arrow functions

/*const boasVindas = (nome) => `Seja bem-vindo ${nome}`

console.log(boasVindas("Luis"))*/

// entender o contexto das coisas
// ThisBinding
// this

/*const equipe = {
  "nome" : "Linguagens de Programação",
  "membros": ["Luis", "André", "Rui"],
  membrosDaEquipa : function() {
    this.membros.forEach((membro) => console.log(`${membro} faz parte da equipa ${this.nome}`))
  }
}

equipe.membrosDaEquipa()*/

//ES6

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
  constructor(modelo, chassi, qtdPortas, pneu){
    super(modelo, chassi, qtdPortas);
    this.pneu = pneu
  }

  abrirTectoSolar(){
    console.log("A Abrir Tecto Solar")
  }
}

const carroBasico = new Carro("Basico", "56565", 2)
console.log(carroBasico)
console.log(carroBasico.andar())

const carroSonix = new Sonix("Sonix", "85959", 5, 15);
console.log(carroSonix)
console.log(carroSonix.andar())
console.log(carroSonix.abrirTectoSolar())
