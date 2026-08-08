'use strict'
const botaoGerarTabuada = document.getElementById('gerar-tabuada')

function criarLinha(numero, numero2) {
    const containerLinha = document.createElement('div')
    containerLinha.className = 'linha'

    const calculo = document.createElement('div')
    calculo.className = 'calculo'
    calculo.textContent = `${numero} x ${numero2}`
    

    const igual = document.createElement('div')
    igual.className = 'igual'
    resultado.textContent = '='

    const resultado = document.createElement('div')
    resultado.className = 'resultado'
    resultado.textContent = numero * numero2

    containerLinha.append(calculo, igual, resultado)

    return containerLinha
}

function gerarTabuada() {
    const container = document.getElementById('container')

    const numero = document.getElementById('numero')

    container.replaceChildren()
    for (let i = 1; i <= 10; i++) {
        const linha = criarLinha(i)
        container.append(linha)
    }

}

botaoGerarTabuada.addEventListener('click', gerarTabuada)