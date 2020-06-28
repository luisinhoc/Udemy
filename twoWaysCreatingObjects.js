// duas formas de criar objetos
// - funções construtoras
// - objectos literais

// funcões constructoras
/*function Livro(titulo){
  this.titulo = titulo;
}

const livro = new Livro("Harry Potter");
console.log(livro);
*/
/*
- Um novo objecto literal é criado
- O constructor do nosso objecto livro é definido como livro, assim como o seu tipo (que pode ser verificado com o instanceof)
- O protótipo do objeto livro é definido como Livro.prototype
- É criado um novo contexto de execução para o objecto
 */

// objetos literais
const livro = {
  "titulo": "Anjos e Demónios"
}

/*console.log(livro)
const livro2 = livro
livro.titulo = "O Código da Vinci";
console.log(livro);
console.log(livro2)*/

livro.autor = "luis";
livro["mostrarlivro"] = function() {console.log(this.titulo)} 
livro.mostrarlivro()

const nome = "Maria";
const sobrenome = "Madalena";

const pessoa = {
  nome,
  sobrenome, 
  seApresentar() {
  console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`)
}
  }

pessoa.seApresentar()


// propriedade computada
const nomeMetodo = "invocar";
const objeto = {
  [nomeMetodo](){
    console.log("executou o método")
  }
}

objeto.invocar();

const nomeFuncao = "mostrar";
const propriedade = "Nome";

const objeto = {
  "Nome": "Objeto",
  [`${nomeFuncao}${propriedade}`](){
    console.log(this[propriedade])
  }
}

objeto.mostrarNome()