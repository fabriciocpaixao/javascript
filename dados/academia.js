/**
 * Estudo de array em um sistema de gestão de academia
 * @author Fabrício Paixão
 */

// importação de pacotes
const prompt = require('prompt-sync')()
const colors = require('colors')

// Variáveis globais
let nome, idade, peso, altura, vip
let matricula = 1 // contador de matrícula
let opcaoMenu, opcaoConsulta, opcaoRelatorio

//Array principal (estrutura de dados)
let alunos = []

/*
    Estrutura de dados:
    [0] matricula
    [1] nome
    [2] idade
    [3] peso
    [4] altura
    [5] vip
 */

//Main >>>>>>>>>>>>>>>>>>>>>>

function mainAcademia() {
    //Menu Principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadastrarAlunos()
                break;
            case 2:
                consultarAluno()
                break;
            case 3:
                editarAluno()
                break;
            case 4:
                excluirAluno()
                break;
            case 5:
                gerarFichaAluno()
                break;
            case 6:
                gerarRelatorios()
                break;
            case 0:
                console.log("Encerrando o sistema...")
                break;
            default:
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoMenu !== 0)
}

//Main (End) <<<<<<<<<<<<<<<<<<<<<<<



//CRUD - Create >>>>>>>>>>>>>>>>>>>>>>

function cadastrarAlunos() {
    console.clear()
    console.log(" === CADASTRO DE ALUNO ===")
    console.log("")
    //Lógica principal 
    //Captura dos dados
    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura em metros: "))
    vip = prompt("Aluno VIP (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    //adicionar os dados na matriz
    alunos.push({
        matricula [0],
        nome [1],
        idade [2],
        peso [3],
        altura [4],
        vip [5]
    })
    matricula++ //autoincremento da matricula

    console.log("")
    console.log("Aluno cadastrado com sucesso!")
    console.log("")
    prompt("ENTER ...")
}

//CRUD - Create (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Read >>>>>>>>>>>>>>>>>>>>>>

function consultarAluno() {
    // Sub menu

    do {
        console.clear()
        console.log(" === CONSULTA DE ALUNOS ===")
        console.log("")
        console.log("1. Buscar Aluno")
        console.log("2. Lista Alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;
            case 2:
                listarAlunos()
                break;
            case 0:
                break;
            default:
                console.log("")
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoConsulta !== 0);

    //Buscar Aluno
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")

        prompt("ENTER ...")
    }
        //Listar Aluno
    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        //Validação (se nenhum aluno for cadastrado)
        if (alunos.length === 0) {
            console.log("Nenhum Aluno cadastrado!")
        } else {
            //console.table(alunos)
            //ordenar os nome (criar cópia)
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a.nome.localeCompare(z[1])
            })
            console.table(alunosOrdenados)

        }
        console.log("")
        prompt("ENTER ...")
    }

}

//CRUD - Read (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Update >>>>>>>>>>>>>>>>>>>>>>

function editarAluno() {

    console.clear()
    console.log(" === ALTERAR ALUNO ===")
    console.log("")

    prompt("ENTER ...")
}

//CRUD - Update (End) <<<<<<<<<<<<<<<<<<<<<


//CRUD - Delete >>>>>>>>>>>>>>>>>>>>>>

function excluirAluno() {

    console.clear()
    console.log(" === EXCLUIR ALUNO ===")
    console.log("")

    prompt("ENTER ...")
}

//CRUD - Delete (End) <<<<<<<<<<<<<<<<<<<<<

//Ficha do Aluno >>>>>>>>>>>>>>>>>>>>>>

function gerarFichaAluno() {

    console.clear()
    console.log(" === FICHA DO ALUNO ===")
    console.log("")

    prompt("ENTER ...")
}

//Ficha do Aluno (End) <<<<<<<<<<<<<<<<<<<<<


//Relatorios >>>>>>>>>>>>>>>>>>>>>>

function gerarRelatorios() {
    do {
    console.clear()
        console.log(" === RELATÓRIOS ===")
        console.log("")
        console.log("1. Aluno VIP")
        console.log("2. Média de Idade dos Alunos")
        console.log("3. % IMC dos Alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break;
            case 2:
                gerarRelatorioMediaIdade()
                break;
            case 3:
                gerarRelatorioImc()
                break;
            case 0:
                break;
            default:
                console.log("")
                console.log("Opção Inválida!")
                prompt("ENTER ...")
        }
    } while (opcaoRelatorio !== 0);
    
    //Relatorio de Alunos VIP
    function gerarRelatorioVip() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")

        prompt("ENTER ...")
    }
    //Média de Idade
        function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        prompt("ENTER ...")
    }
    //Percentual de IMC
        function gerarRelatorioImc() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")

        prompt("ENTER ...")
    }
}

//Relatorios (End) <<<<<<<<<<<<<<<<<<<<<


//Iniciar Sistema >>>>>>>>>>>>>>>>>>>>>>

mainAcademia()

//Iniciar Sistema (End) <<<<<<<<<<<<<<<<<<<<<
