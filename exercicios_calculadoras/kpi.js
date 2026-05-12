/**
 * Desafio Calculadora KPI's do RH
 * 
 * @author Fabrício Paixão
 */
const prompt = require('prompt-sync')()

//variáveis
let opcao //menu
let admissao, desligamentos, totalFuncionarios, turnOverValor //turnOver
let totalHorasPerdidas, totalHorasEsperadas, absenteismoValor //absenteismo
let totalAusencia, totalDias, score //bradFordFactor
let lucroInvestimento, custoInvestimento, roiValor //roi

//funções das operações
function turnOver(turnOverValor) {
    turnOverValor = (((admissao + desligamentos)/2)/totalFuncionarios)*100
    return turnOverValor
}

function absenteismo(absenteismoValor) {
    absenteismoValor = (totalHorasPerdidas / totalHorasEsperadas)*100
    return absenteismoValor
}

function bradFordFactor(score) {
    score = (totalAusencia * totalAusencia) * totalDias
    return score
}

function roi(roiValor) {
    roiValor = ((lucroInvestimento - custoInvestimento) / custoInvestimento) * 100
    return roiValor
}

// Função principal
function iniciarCalculadora() {
    do {
        mostrarMenu()
        //escolha a opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch(opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop
            case 1:
                admissao = Number(prompt("Quantas admissões houveram nesse período:  "))
                desligamentos = Number(prompt("Quantas demissões houveram nesse período:  "))
                totalFuncionarios = Number(prompt("Quantos colaboradores ativos nesse período:  "))
                resultado = turnOver(turnOverValor)
                console.log("")
                console.log(`O Turn Over do período foi: ${resultado.toFixed(2)}%`)
                console.log("")
                break
            case 2:
                totalHorasPerdidas = Number(prompt("Digite a quantidade de horas perdidas ou não trabalhadas: "))
                totalHorasEsperadas = Number(prompt("Digite a quantidade de horas esperadas ou a somatoria das jornadas de trabalho: "))
                resultado = absenteismo(absenteismoValor)
                console.log("")
                console.log(`A quantidade de Absenteímo do período foi: ${resultado.toFixed(2)}%`)
                console.log("")
                break
            case 3:
                totalDias = Number(prompt("Digite a quantidade total de dias de ausência no período: "))
                totalAusencia = Number(prompt("Digite a quantidade de vezes que o colaborador se ausentou no período: "))
                resultado = bradFordFactor(score)
                console.log("")
                console.log(`Score: ${resultado}`)
                if (resultado < 50){
                    console.log("")
                    console.log("Sem preocupações.")
                } else if (resultado < 125) {
                    console.log("")
                    console.log("Monitoramento ou conversa informal.")
                } else if (resultado < 400) {
                    console.log("")
                    console.log("Advertência verbal ou plano de melhoria.")
                } else if (resultado <= 600) {
                    console.log("")
                    console.log("Advertência formal ou suspensão.")
                } else if (resultado > 600) {
                    console.log("")
                    console.log("Possibilidade de demissão.")
                }
                break
            case 4:
                custoInvestimento = Number(prompt("Qual o custo total de investimento: "))
                lucroInvestimento = Number(prompt("Qual o lucro totoal que essa investimento trouxe: "))
                resultado = roi(roiValor)
                console.log("")
                console.log(`ROI de: ${resultado}%`)
                if (resultado < 100){
                    console.log("")
                    console.log("ROI insuficiente!")
                } else if (resultado < 400){
                    console.log("")
                    console.log("ROI atingiu o previsto!")
                } else {
                    console.log("")
                    console.log("ROI superiou o previsto!")
                }
                break

            default:
                console.log("Opção Inválida")
                console.log("")
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
    console.log("=== Calculadora de KPI's RH ===")
    console.log("|                             |")
    console.log("|   1. Turn Over              |")
    console.log("|   2. Absenteísmos           |")
    console.log("|   3. BradFord Factor        |")
    console.log("|   4. ROI                    |")
    console.log("|   0. Sair                   |")
    console.log("")
}

// Executar a função principal
iniciarCalculadora()