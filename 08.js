/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicacao(num1,num2){
    let result= 0
    for(let i = 0; i < num2; i++){
        result += num1
    }
    return result
}

console.log(multiplicacao(2,9))