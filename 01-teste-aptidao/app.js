'use strict'

const avaliar = function(){
    const tempo     = document.getElementById('tempo')
    const resultado = document.getElementById('resultado')
    removerClasses()
    if(tempo.value < 14){
        resultado.textContent = 'Apto'
        resultado.classList.add('apto')
    }else{
        resultado.textContent = 'Não apto'
        resultado.classList.add('naoApto')
    }
}

const removerClasses = function(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('Apto', 'naoApto')
} 