/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
*/

function primeiroEUltimo(array){
    const novoArray = []
    novoArray.push(array.shift())
    novoArray.push(array.pop())

    return novoArray
}

const array1 = [1,2,3,4,5]
console.log(primeiroEUltimo(array1))