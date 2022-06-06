/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

const array1 = [1,"kekw",4,'kek']

function filtrar(array){
    const array2 = array.filter(e => typeof e == typeof 0)
    return array2
}
console.log(filtrar(array1))