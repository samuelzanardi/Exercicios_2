/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/

function remover(word){
    let newWord = word
    newWord = word.replace('a',"")
    newWord = newWord.replace('e',"")
    newWord = newWord.replace('i',"")
    newWord = newWord.replace('o',"")
    newWord = newWord.replace('u',"")
    return newWord  
}

console.log(remover('abcdeiou'))