/**
 * Calculo do IMC
 * @author Fabricio Paixão
 */
const prompt = require('prompt-sync')()

let peso, altura, imc

console.clear()
console.log("Cálculo do IMC -----------")

peso = Number(prompt("Digite seu peso em Kg: "))
altura = Number(prompt("Digite sua altura em metros: "))

imc = peso / (altura * altura)

console.log(`IMC: ${imc.toFixed(2)}`)
console.log("")

if (imc < 18.6) {
    console.log("Você esta abaixo do peso")
} else if (imc < 25) {
    console.log("Você esta com peso normal")
} else if (imc < 30){
    console.log("Você esta com sobrepeso")
} else if (imc < 35){
    console.log("Você esta com obesidade grau I")
} else if (imc < 40){
    console.log("Você esta com obesidade grau II")
} else if (imc > 40){
    console.log("Você esta com obesidade grau III")
}
console.log("")



