/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(param1,param2){
    let array1 = []
    for(let i = 0 ; i< param2; i++){
        array1.push(param1)
    }
    return array1
}
console.log(repetir('alo',4))