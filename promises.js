let promise = new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = 2000;
    setTimeout(() => {
        resultado ? resolve("ok") : reject("not ok")
    }, tempo)
});

promise.then((res) => console.log(res));
promise.catch((err) => console.log(err));

console.log("fui executado antes!")

let promise = new Promise((resolve, reject) => {
    resolve("ok");

})

promise
    .then((res) => {
        console.log(`sucesso: ${res}`);

        throw new Error("Erro!!");

        return res
    })
    .then((res) => console.log(`sucesso: ${res}`))
    .catch((erro) => console.log(`falha: ${erro}`))
    .finally((fin) => console.log("Acabou promise"))