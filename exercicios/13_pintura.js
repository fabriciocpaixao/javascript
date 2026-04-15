/**
 * Exercício para calcular o rendimento da tinta
 * @author Fabricio Paixão
 */

const prompt = require('prompt-sync')()
const colors = require('colors')
let tamanhoParede, quantidadeDemao, quantidadeLatas, rendimentoLata
console.clear()
console.log("")
tamanhoParede = Number(prompt("Insira o tamanho da parede em m²: "))
rendimentoLata = Number(prompt("Qual o rendimento da lata, descrito pelo fabricante em m²: "))
quantidadeDemao = Number(prompt("Quantas demãos deseja realizar: "))
quantidadeLatas = (tamanhoParede * quantidadeDemao) / rendimentoLata
console.log("")
console.log(colors.bgRed(`A quantidade de latas necessária é: ${Math.ceil(quantidadeLatas)} latas`))
