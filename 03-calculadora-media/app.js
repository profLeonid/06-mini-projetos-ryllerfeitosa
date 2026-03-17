'use strict'

const calcularMedia = (nota1, nota2, nota3) => ((nota1 + nota2 + nota3) / 3)

const escolherCor = function(media){
    if(media >= 7)
        return 'aprovado'
    else if(media >= 5)
        return 'recuperacao'
    else
        return 'reprovado'
}


const handleClick = function(){
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    const resultado     = document.getElementById('resultado')
    const mediaDoAluno  = calcularMedia(nota1,nota2,nota3)
    const situacao      = escolherCor(mediaDoAluno) 
    resultado.textContent = `${situacao}`
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
    resultado.classList.add(situacao)
}