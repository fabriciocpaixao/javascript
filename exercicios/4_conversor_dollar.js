/**
 * Exercício para realizar a conversão de dollar a real
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()
let cotacaoHoje, valorReais, valorDollar
console.clear()
cotacaoHoje = Number(prompt("Qual a cotação do Dollar hoje? "))
valorReais = Number(prompt("Quanto reais, será convertido? "))
valorDollar = valorReais / cotacaoHoje
console.log("")
console.log(`O valor total será U$${valorDollar.toPrecision(5)}`)