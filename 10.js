/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function repetir(param1){
    let string1 = ''
    for(let i = 0 ; i< param1; i++){
        string1 += '+'
    }
    return string1
}
console.log(repetir(4))