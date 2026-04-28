/**
 * Desafio JoKenPo 
 * @author Fabrício Paixão
 */

// Importação de pacotes
const prompt = require('prompt-sync')()

// variáveis
let jogador, computador, novoJogo
novoJogo = "n"

do {
    // UX

    console.clear()
    console.log("          JJJJJJJJJJJ               kkkkkkkk                                              PPPPPPPPPPPPPPPPP                  ");
    console.log("          J:::::::::J               k::::::k                                              P::::::::::::::::P                 ");
    console.log("          J:::::::::J               k::::::k                                              P::::::PPPPPP:::::P                ");
    console.log("          JJ:::::::JJ               k::::::k                                              PP:::::P     P:::::P                ");
    console.log("            J:::::J   ooooooooooo    k:::::k    kkkkkkk eeeeeeeeeeee    nnnn  nnnnnnnn      P::::P     P:::::P  ooooooooooo   ");
    console.log("            J:::::J oo:::::::::::oo  k:::::k   k:::::kee::::::::::::ee  n:::nn::::::::nn    P::::P     P:::::Poo:::::::::::oo ");
    console.log("            J:::::Jo:::::::::::::::o k:::::k  k:::::ke::::::eeeee:::::een::::::::::::::nn   P::::PPPPPP:::::Po:::::::::::::::o");
    console.log("            J:::::jo:::::ooooo:::::o k:::::k k:::::ke::::::e     e:::::enn:::::::::::::::n  P:::::::::::::PP o:::::ooooo:::::o");
    console.log("            J:::::Jo::::o     o::::o k::::::k:::::k e:::::::eeeee::::::e  n:::::nnnn:::::n  P::::PPPPPPPPP   o::::o     o::::o");
    console.log("JJJJJJJ     J:::::Jo::::o     o::::o k:::::::::::k  e:::::::::::::::::e   n::::n    n::::n  P::::P           o::::o     o::::o");
    console.log("J:::::J     J:::::Jo::::o     o::::o k:::::::::::k  e::::::eeeeeeeeeee    n::::n    n::::n  P::::P           o::::o     o::::o");
    console.log("J::::::J   J::::::Jo::::o     o::::o k::::::k:::::k e:::::::e             n::::n    n::::n  P::::P           o::::o     o::::o");
    console.log("J:::::::JJJ:::::::Jo:::::ooooo:::::ok::::::k k:::::ke::::::::e            n::::n    n::::nPP::::::PP         o:::::ooooo:::::o");
    console.log(" JJ:::::::::::::JJ o:::::::::::::::ok::::::k  k:::::ke::::::::eeeeeeee    n::::n    n::::nP::::::::P         o:::::::::::::::o");
    console.log("   JJ:::::::::JJ    oo:::::::::::oo k::::::k   k:::::kee:::::::::::::e    n::::n    n::::nP::::::::P          oo:::::::::::oo ");
    console.log("     JJJJJJJJJ        ooooooooooo   kkkkkkkk    kkkkkkk eeeeeeeeeeeeee    nnnnnn    nnnnnnPPPPPPPPPP            ooooooooooo   ");
    console.log("")
    console.log("")

    // Lógica do jogador
    console.log("1. Pedra")
    console.log("2. Papel")
    console.log("3. Tesoura")
    console.log("")
    jogador = Number(prompt("Digite a opção desejada: "))
    console.log("")


    switch (jogador) {
        case 1:
            console.log("Jogador escolheu Pedra")
            break
        case 2:
            console.log("Jogador escolheu Papel")
            break
        case 3:
            console.log("Jogador escolheu Tesoura")
            break
        default:
            console.log("Opção inválida")
            break

    }
    console.log("")

    // Lógica do computador
    computador = Math.ceil(Math.random() * 3)
    switch (computador) {
        case 1:
            console.log("Computador escolheu Pedra")
            break
        case 2:
            console.log("Computador escolheu Papel")
            break
        case 3:
            console.log("Computador escolheu Tesoura")
            break
        default:
            console.log("Opção inválida")
            break

    }
    console.log("")

    // Lógica para determinar o Vencedor ou declarar Empate

    if (jogador === computador) {
        console.log("EMPATE")
    } else if ((jogador === 1 && computador === 3) || (jogador === 2 && computador === 1) || (jogador === 3 && computador === 2)) {
        console.log("Jogador Venceu")
    } else {
        console.log("Computador Venceu")
        console.log("")
        novoJogo = prompt("Deseja jogar novamente (s/n)? ")
    }
} while (novoJogo === "s" || novoJogo === "S") 