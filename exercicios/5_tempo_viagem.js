/**
 * Exercício para calcular o tempo de viagem
 * @author Fabrício Paixão
 */
const prompt = require('prompt-sync')()
const colors = require('colors')
let tempo, distanciaTotal, velocidadeMedia
console.clear()
distanciaTotal = Number(prompt("Qual a distância da viagem total em Km: "))
velocidadeMedia = Number(prompt("Qual a velocidade média do veículo em Km/h: "))
tempo = distanciaTotal / velocidadeMedia
console.log("")
console.log(colors.rainbow((`O tempo total de viagem é: ${Math.round(tempo)} horas`)))
