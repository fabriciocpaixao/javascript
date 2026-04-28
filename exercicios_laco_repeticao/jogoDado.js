/**
 * Jogo do Dado
 * Exemplo de uso da estrutura do while
 * @author Fabrício Paixão
 */

const prompt = require('prompt-sync')()

let novoJogo = "n"

do {
    console.clear()
    console.log("Jogo do Dado")
    prompt("Pressione [Enter] para lançar o dado...")
    console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)
    novoJogo = prompt("Deseja jogar novamente (s/n)? ")

} while (novoJogo === "s")

