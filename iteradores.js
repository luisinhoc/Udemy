const bruxos = ["Harry Potter", "Hermione", "Rony"];
const iteradorBruxos = bruxos[Symbol.iterator]()

console.log(iteradorBruxos.next())

const chapeuSelector = (bruxo) => {
  const casas = ["Grinfindoria", "Sonserina", "Corvinal", "Lufa-lufa"];
  const casa = casas[Math.floor(Math.random() * casas.length)];

  console.log(`Bruxo:${bruxo} | casa: ${casa}`);
}

for(bruxo of bruxos){
  chapeuSelector(bruxo);
}