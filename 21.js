/*Criar uma função que receba um array de números e retorne o menor número desse array.
*/
const menor = (a,b) => {
    let menor = 0
    if(a < menor){
        menor = a
    }
    return menor
}
const menorN = (array) => array.filter(menor)[0]
const array1 = [-5,1,2,4,6]
console.log(menorN(array1))