// forEach()
// map()
// filter()
// find()
// every()
// some()
// reduce()


/*const nomes = ["luis", "diego", "jose"];
nomes.forEach(element => console.log(element))*/

/*const canais = ["sbt", "globo", "record"];
canais.forEach(element => {canais.push('cultura'); console.log(element)})
console.log('----------')
canais.forEach(element => {console.log(element)})*/

const numeros = [1,2,3,4,5];

const alunos = [
  {"nome": "joao", "idade": 10},
  {"nome": "jose", "idade": 20},
  {"nome": "marcos", "idade": 30}
]
/*const dobro = numeros.map((numero) => numero*2)
console.log(dobro)*/

/*const jogos = [
  {"nome": "Uncharted 4: A Thiefs End", "categoria" : "ação"},
  {"nome": "Grand Turismo 6", "categoria" : "plataforma"},
  {"nome": "Need for Speed Most Wanted", "categoria" : "aventura"},
  {"nome": "Mario Kart 8", "categoria" : "shooter"},
  {"nome": "Forza Motorsport", "categoria" : "corrida"}
]*/

const todosJogosCorrida = jogos.every((jogo) => jogo.categoria === "corrida");
console.log(todosJogosCorrida);

/*const maiores = alunos.filter((maiores) => maiores.idade <18)
console.log(maiores);*/

const alunoProcurado = alunos.find((aluno) => aluno.nome === "jose");
console.log(alunoProcurado);

/*const corrida = alunos.some((aluno) => aluno.categoria === "corrida");
console.log("Tem Jogo de corrida? : " , corrida)*/

/*const nomes = alunos.reduce((arrayNomes,aluno) => {
  arrayNomes.push(aluno.nome);
  return arrayNomes;
}, [])
console.log(nomes);*/