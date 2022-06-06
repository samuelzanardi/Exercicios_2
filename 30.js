/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/
// Array.prototype.getMedia = (array)=> array.reduce((e,a) => e+a) / 4
const obj1 = {
    Joao: [8, 7.6, 8.9, 6], //média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}


const getMedia = (array) => array.reduce((e,a) => e+a) / 4

function Aluno(nome,media){
    this.nome = nome
    this.media = media
    }

function media(obj){
    let maiorMedia = 0
    let i = 0
    let me = Object.values(obj)
    me.forEach(e => {
        i++
       let aluno = new Aluno(Object.keys(obj1)[i -1],getMedia(e))
        if(maiorMedia < aluno.media){
            maiorMedia = aluno
        }
        if(maiorMedia.media < aluno.media){
            maiorMedia = aluno
        }
    })
    return console.log(maiorMedia)
 
}

media(obj1)



