'use strict'

//Function para calcular o imc
const calcularImc = (peso, altura) => (peso / (altura * altura))

//Function para tratar a altura
const tratarAltura = function (altura) {
    let alturaConvertida = altura.toString().replace(',', '.')
    if (altura > 3)
        return Number(alturaConvertida) / 100
    else
        return Number(alturaConvertida)
}

//Function para tratar o peso
const tratarPeso = function (peso) {
    let pesoConvertido = peso.toString().replace(',', '.')
    if (pesoConvertido > 1000) {
        return Number(pesoConvertido) / 1000
    } else
        return Number(pesoConvertido)
}

//Function para escolher a cor da caixa de mensagem
const escolherCor = function (calcularImc) {
    if (calcularImc < 18.5)
        return 'status1'
    else if (calcularImc >= 18.5 && calcularImc <= 24.9)
        return 'status2'
    else if (calcularImc >= 25 && calcularImc <= 29.9)
        return 'status3'
    else if (calcularImc >= 30 && calcularImc <= 34.9)
        return 'status4'
    else if (calcularImc >= 35 && calcularImc <= 39.9)
        return 'status5'
    else if (calcularImc >= 40)
        return 'status6'
}

const mensagem = function (resultado) {
    if (resultado < 18.5)
        return 'Abaixo do peso'
    else if (resultado >= 18.5 && resultado <= 24.9)
        return 'Peso normal'
    else if (resultado >= 25 && resultado <= 29.9)
        return 'Sobrepeso'
    else if (resultado >= 30 && resultado <= 34.9)
        return 'Obesidade grau I'
    else if (resultado >= 35 && resultado <= 39.9)
        return 'Obesidade grau II'
    else if (resultado >= 40)
        return 'Obesidade grau III'
}

const handleClick = function () {
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let resultado = document.getElementById('resultado')

    if (peso != undefined && altura != undefined) {
        let alturaConvertida = tratarAltura(altura)
        if (alturaConvertida != undefined) {
            let pesoConvertido = tratarPeso(peso)
            if (pesoConvertido != undefined) {
                let resultadoImc = calcularImc(pesoConvertido, alturaConvertida)
                if (resultadoImc != undefined) {
                    let mensagemFinal = mensagem(resultadoImc)
                    if (mensagemFinal != undefined) {
                        let cor = escolherCor(resultadoImc)
                        if (cor != undefined) {
                            resultado.textContent = `${mensagemFinal} - ${resultadoImc.toFixed(2)}`
                            resultado.classList.remove('status1', 'status2', 'status3', 'status4', 'status5', 'status6')
                            resultado.classList.add(cor)
                        } else
                            return false
                    }else
                        return false
                } else
                    return false
            } else
                return false
        } else
            return false
    } else
        return false
}

