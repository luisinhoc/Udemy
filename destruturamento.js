// Extrair propriedades objecto 
const Utilizador = {
  "nome" : "Luis",
  "sobrenome" : "Costa",
  "password": "123456",
  "email": "luiscosta@hotmail.com",
  "profissao": "Engenheiro Informático",
  "github" : "https://github.com"
}

//const email = Utilizador.email;
const {email, profissao} = Utilizador
console.log(email, profissao)


const Pessoa = {
  "sobrenome" : "Alberto",
  "nomeDaMae": "Luisa"
}

//rotulos
const {sobrenome:apelido, nomeDaMae:mae} = Pessoa;
console.log(mae)

const sumo = {
  "sabor" : "uva",
  "quantidade" : "500ml"
}

const doce = {
  "tipo" : "açucar"
}

function descreveSumo({sabor, quantidade}, {tipo}){
  return `Este sumo é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`
}

descreveSumo(sumo,doce)

//destruturar arrays
const cores = ["azul", "cinza", "branco", "preto"];

const [cor1,,, cor3] = cores; 

console.log(cor1, cor3)

const contactos = [
  {
    "nome" : "Alex Junior",
    "numero" : "1234-5678"
  },
  {
    "nome" : "Carolina Maia",
    "numero" : "1234-56781"
  },
  {
    "nome" : "Fernando Jorge",
    "numero" : "1234-5678"
  }
]

function mostraNumeroDaCarol([,{numero}]){
  console.log(numero)
}

mostraNumeroDaCarol(contactos)
