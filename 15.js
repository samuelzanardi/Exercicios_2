/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function parPar(array){
    const novoArray = []
    for(let i = 0 ; i < array.length; i++){
        if( i % 2 === 0 && array[i] % 2 === 0){
            novoArray.push(array[i])
        }
    }
    return novoArray
}

const array1 = [0,1,2,3,4]
console.log(parPar(array1))