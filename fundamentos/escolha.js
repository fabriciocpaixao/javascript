/**
 * Exemplo de uso da estrutura switch case
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

let opcao

console.clear()
console.log("Menu de opções: ")
console.log("")
console.log("1. Cadastro de clientes")
console.log("2. Cadastro de produtos")
console.log("3. Relatórios")
opcao = Number(prompt("Digite a opção desejada: "))

// Uso da estrutura switch case, para tratamento do valor digitado. obs: essa estrutura aceita variáveis numéricas do tipo números inteiros e caracteres únicos, dentro da estrutura o default é opcional

switch (opcao) {
    case 1:
        console.clear()
        console.log("Tela de cadastro de cliente")
        break
    case 2:
        console.clear()
        console.log("Tela de Cadastro de produtos")
        break
    case 3:
        console.clear()
        console.log("Impressão de Relatórios")
        break
    default:
        console.clear()
        console.log("Opção Inválida")
        break
}