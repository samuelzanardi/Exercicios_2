/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
*/
let nome ="samuel moreira zanrdi"
function contar(string){
    let novaString= nome
    let space = 0
    if(string[0] === ' '){
        novaString = string.slice(1,string.length)
    }
    if (novaString[novaString.length - 1] === ' '){
        novaString = novaString.slice(0,novaString.length -1)
    }
    for(let i = 0 ; i < novaString.length; i++){
        if(novaString[i]=== ' '){
            space++
        }
    }
    return space +1

}
console.log(contar(nome))
