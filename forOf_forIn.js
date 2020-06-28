const numeros = [1,2,3,4,5];
const carro = {"modelo" : "fiat", "ano": 1995}

for(item of numeros){
  if(item === 2) continue
  console.log(item)
  
}

for(const propriedade in carro){
  console.log(carro[propriedade])
}