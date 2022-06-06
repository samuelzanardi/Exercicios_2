/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

const array1 = [1,5,3,4,2]
let soma = (e,a) => e + a
const somaArray =(array) => array.reduce((e,a) => a + e)

console.log(somaArray(array1))

