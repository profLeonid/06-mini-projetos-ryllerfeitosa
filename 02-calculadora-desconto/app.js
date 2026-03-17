'use strict'
/*
    As funções puras tem como utilidade possuir uma responsabilidade única,
    elas recebem os parâmetros e retorna o que foi processado de acordo com
    os parâmetros, são completamente independentes, ou seja, podem ser reutilizadas
    em outros projetos.
    Paradigma: Formas de programar
*/

// const calcularValorEconomizado = function(preco, desconto) {
//     return preco * (desconto / 100)
// }

// const calcularPrecoFinal = function(preco, valorEconomizado){
//     return preco - valorEconomizado
// }

//Função com seta
const calcularValorEconomizado      = (preco, desconto) => preco * (desconto / 100)
const calcularPrecoFinal            = (preco, valorEconomizado) => preco - valorEconomizado

const escolherCor = function(desconto){
    if(desconto <= 5)
        return 'desconto1'
    else if(desconto <= 10)
        return 'desconto2'
    else
        return 'desconto3'
}

const handleClick = function(){
    let preco       = Number(document.getElementById('preco').value)
    let desconto    = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)
}