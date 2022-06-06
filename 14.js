/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/

function novoArray(obj){
    return Object.entries(obj)
}

let obj1 = {
    nome: "samuel",
    idade: 23,
    tamanho: 185
}
console.log(novoArray(obj1))