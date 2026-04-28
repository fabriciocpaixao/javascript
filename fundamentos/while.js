/**
 * Estudo do laço de repetição while e do-while
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

let x = 12

console.clear()
while (x < 10) {
    console.log(x)
    x++
}

do {
    console.log(x)
    x++
} while (x < 10)


console.log("")
console.log("Tabuada While")
console.log("")

let tabuada, i
i = 1
tabuada = Number(prompt("Digite a tabuada desejada: "))

while (i < 11 ) {
    console.log(`${tabuada} x ${i} = ${tabuada * 1}`)
    i++
}
