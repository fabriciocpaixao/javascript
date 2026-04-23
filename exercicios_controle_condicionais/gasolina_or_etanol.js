/** 
 * Exercício para desenvolver o controle de condições IF ELSE
 * @author Fabrício Paixão
*/
const colors = require('colors')
const prompt = require('prompt-sync')()
let etanol, gasolina
console.clear()

etanol = Number(prompt("Digite o valor do litro do Etanol hoje: "))
gasolina = Number(prompt("Digite o valor do litro do Gasolina hoje: "))

console.log("")

if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com Etanol".bgGreen)
} else {
    console.log("Abasteça com Gasolina".bgRed)
}

