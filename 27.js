/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:*/

function inverter(obj){
    newObj = {}
    for (const [chave, valor] of Object.entries(obj)) {
        newObj[valor] = chave
      }
      return newObj
}


const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(inverter(obj1))