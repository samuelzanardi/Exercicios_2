/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function conta(a,string){
    let result = 0
    for(let i = 0;i < string.length;i++){
        if(a === string[i]){
            result++
        }
    }
    return result
}
console.log(conta('a','SAmuel Moreira Zanardi'))