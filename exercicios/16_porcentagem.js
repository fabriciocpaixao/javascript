/**
 * Exercício para calcular a porcentagem de um valor usando regra de 3
 * @author Fabrricio Paixão
 */
const prompt = require('prompt-sync')()
let x,y,valor
console.clear()
x = prompt("Qual o valor de X: ")
y = prompt("Qual o valor de Y: ")
valor = (x *y) / 100

console.log("")
console.log(`O valor é: ${valor}`)