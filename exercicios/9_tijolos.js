/**
 * Exercício para calcular a quantidade de tijolos 
 * @author Fabricio Paixão
 */
const prompt = require('prompt-sync')()
let total, alturaParede, larguraParede
console.clear()
alturaParede = Number(prompt("Qual a altura da parede em m²: "))
larguraParede = Number(prompt("Qual a largura da parede em m²: "))
total = (alturaParede * larguraParede) / 0.02
console.log("")
console.log(`A quantidade de tijolo necessários é: ${Math.ceil(total)} tijolos comuns`)
