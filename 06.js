/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function inverso(param){
    result = param
    if (typeof param !== typeof 0 && typeof param !== typeof true ){
        console.log( `booleano ou número esperados, mas o parâmetro é do tipo ${typeof param}`)
    }
    else if(typeof param === typeof 0){
        if(Math.sign(param) === -1){
            result = param - (param * 2)
            return console.log(result)
        }
        else result = param - (param * 2)
        return console.log(result)
    }
    else if(typeof param === typeof true){
        if(param === true){
            return console.log(false)
        }
        else console.log(true)
    }
}
inverso(10)
inverso(-10)
inverso(true)
inverso(false)
inverso('false')