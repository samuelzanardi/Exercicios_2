/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

const produtos = [{
    nome:'Internet',
    categoria: 'Basico',
    preco: 99.90
},{
    nome:'Energia',
    categoria: 'Basico',
    preco: 200
},{
    nome:'spotify',
    categoria: 'Entreterimento',
    preco: 24.90
},{
    nome:'Agua',
    categoria: 'Basico',
    preco: 80
}]


const soma = (e,a) => e + a
function despesas(array){
    const novoArray = []
    array.forEach(e => {
        novoArray.push(e.preco)
    })
    let result = novoArray.reduce(soma).toFixed(2)
    return result
}

console.log(despesas(produtos))
