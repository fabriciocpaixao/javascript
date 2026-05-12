/**
 * Calculadora JS - Exemplo de uso de funções
 * @author Fabrício Paixão
 */

// importação de pacotes
const prompt = require('prompt-sync')()

//variáveis globais
let num1, num2, opcao, resultado, valor

//funções das operações (com parâmentos)
function somar(num1, num2) {
    return num1 + num2 
}

function subtrair(num1, num2) {
    return num1 - num2 
}

function multiplicar(num1, num2) {
    return num1 * num2 
}

function dividir(num1, num2) {
    //validação
    if( num2 === 0) {
        console.log("Error! Impossível dividir por 0")
    } else {
        return num1 / num2
    }
}

function raizquadrada(num1) {
    return Math.sqrt(num1)
}

function porcentagem(valor) {
    
    valor = (num1 * num2) /100
   return valor
    
}


// Função principal
function iniciarCalculadora() {
    //gerando loop infinito
    do {
        mostrarMenu()
        //escolha a opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch(opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop
            case 1:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = somar(num1, num2)
                console.log(`Resultado: ${resultado}`)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = subtrair(num1, num2)
                console.log(`Resultado: ${resultado}`)
                break
            case 3:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = multiplicar(num1, num2)
                console.log(`Resultado: ${resultado}`)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = dividir(num1, num2)
                console.log(`Resultado: ${resultado}`)
                break
            case 5:
                num1 = Number(prompt("Digite o primeiro número: "))
                resultado = raizquadrada(num1)
                console.log(`Resultado: ${resultado}`)
                break
            case 6:
                num1 = Number(prompt("Digite o valor da porcetagem: "))
                num2 = Number(prompt("Digite o valor total: "))
                resultado = porcentagem(valor)
                console.log(`A porcentagem de ${num2} é: ${resultado.toFixed(2)}`)
                break
            default:
                console.log("Opção Inválida")
                prompt("Pressione [Enter] para continuar ")
                continue
            }
            //exibir resultado
            
            prompt("Pressione [Enter] para continuar ")
    } while (true)
}

//Função menu
function mostrarMenu() {
    console.clear()
    console.log("=== Calculadora JS ===")
    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Raiz Quadrada")
    console.log("6. Porcentagem")
    console.log("0. Sair")
}




// Executar a função principal
iniciarCalculadora()
