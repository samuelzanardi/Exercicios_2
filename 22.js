/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

function sorteio(num){
    let numero = ((Math.random(1) * 9)+1).toFixed(0)
    let numeroInt = parseInt(numero)
    if(num === numeroInt){
        return console.log(`Parabens voce acertou o numero sorteado ${numeroInt}`)
    }
    else console.log(`Voce errou o numero sorteado ${numeroInt}`)
    console.log(numeroInt)
}
sorteio(10)