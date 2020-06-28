export const pi = 3.14;

function comprimento(raio){
   return 2 * pi * raio 
}

function area(raio){
    return pi * (raio * raio)
}

export default comprimento // padrao
export {area, comprimento} //nomeada