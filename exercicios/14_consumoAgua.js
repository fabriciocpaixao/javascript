/**
 * Exercício para calcular o consumo diário de água
 * @author Fabrício Paixão
 */
const prompt = require('prompt-sync')()
let peso, totalDiario
console.clear()
peso = Number(prompt("Qual o seu peso em Kg: "))
totalDiario = peso * 0.035
console.log("")
console.log(`O consumo total diário de água recomendado é: ${totalDiario.toFixed(2)} litros`)
