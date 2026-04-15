/**
 * Exercício para calcular o valor de corrida de taxi
 * @author Fabricio Paixão
 */
const prompt = require('prompt-sync')()
const colors = require('colors')
let valorTotal, valorBandeira, distancia, precoKm
console.clear()
valorBandeira = Number(prompt("Qual o valor da Bandeira: "))
distancia = Number(prompt("Qual a distancia total da viagem em Km: "))
precoKm = Number(prompt("Qual o valor por Km: "))
valorTotal = valorBandeira + (distancia * precoKm)
console.log("")
console.log(colors.bgRed(`O valor total da viagem é: ${valorTotal} reais`))