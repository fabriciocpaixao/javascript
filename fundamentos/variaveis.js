/**
 * Estudo das Variáveis
 * @author Fabricio Paixão
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

console.clear()
console.log("Estudos das Variáveis")
console.log('')
console.log("Variavel do tipo String")
// a linha abaixo cria uma variavel
let nome = prompt("Digite o nome do aluno: ")
console.log(nome)
// a linha abaixo mostra o tipo de variavel
console.log(typeof(nome))
console.log("")
console.log("Variavel do tipo Number")
let idade = Number(prompt("Digite a idade do aluno: "))
console.log(idade)
console.log(typeof(idade))
let peso = Number(prompt("Digite o peso em Kg: "))
console.log(peso)
console.log(typeof(peso))
let altura = Number(prompt("Digite a altura em metros: "))
console.log(altura)
console.log(typeof(altura))
console.log("")
console.log("Variavel do tipo Boolean")
let vip = true
console.log(vip)
console.log(typeof(vip))
let fcmax = (208 - (idade * 0.7))
console.log(fcmax)
let imc = (peso / (altura * altura))
imc.toPrecision(4)
console.log(imc.toPrecision (4))



console.log("")
console.log("-----------------------------------------")
console.log(" -             Ficha do Aluno           -")
console.log("-----------------------------------------")
// a linha abaixo concatena (união) um texto com o conteúdo da variavel
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} anos`)
console.log(`Peso: ${peso} kg`)
console.log(`Altura: ${altura} m`)
console.log(`VIP: ${vip}`)
console.log(`FCM: ${fcmax} bpm`)
console.log(`IMC: ${imc.toPrecision(4)}`)
if (imc < 18.6) {
    console.log("Aluno esta abaixo do peso".bgWhite)
} else if (imc < 25) {
    console.log("Aluno esta com peso normal".bgGreen)
} else if (imc < 30){
    console.log("Aluno esta com sobrepeso".bgCyan)
} else if (imc < 35){
    console.log("Aluno esta com obesidade grau I".bgYellow)
} else if (imc < 40){
    console.log("Aluno esta com obesidade grau II".bgMagenta)
} else {
    console.log("Aluno esta com obesidade grau III".bgRed)
}
console.log("-----------------------------------------")
console.log("")