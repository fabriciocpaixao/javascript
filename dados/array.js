/**
 * Estrutura de dados array (vetor)
 * @author  Fabrício Paixão
 */

// A linha a baixo cria um array(vetor)
let alunos = ['Juan', 'Maria', 'José', 'ana']
console.clear()
console.log('================== ARRAY ==================')
console.log("")
console.log(alunos)
console.log(`Um array do tipo: ${typeof(alunos)}`)
 
 
// Obtendo o tamanho do array (length)
console.log(`Tamanho do arrya ${alunos.length}`)
console.log("")
 
 
// Adicionando dados de uma arrey (CRUD create)
console.log('================== CRUD create ==================')
console.log("")
// O método push adiciona de forma segura u, dado ao array
alunos.push('Adelson')
console.log(alunos)
console.log(`Tamanho do arrya ${alunos.length}`)
console.log("")
 
 
// Adicionando dados de uma arrey (CRUD read)
console.log('================== CRUD read ==================')
console.log("")
console.log(alunos)
console.table(alunos)
// Exibindo um dado especifico do array
console.log(`Aluno [2]: ${alunos[2]}`)
console.log("")
 
 
// Adicionando dados de uma arrey (CRUD update)
// Usar o índice paraq alterar um dado do vetor
console.log('================== CRUD update ==================')
console.log("")
alunos[3] = 'Ana'
alunos[4] = 'Adeilson'
console.table(alunos)
console.log("")
 
 
// Adicionando dados de uma arrey (CRUD delete)
 console.log('================== CRUD delete ==================')
console.log("")

// delete exclui de forma segura um dados do array
delete alunos[1]
console.table(alunos)
console.log(alunos.length)
alunos.push("Sirlene")
console.table(alunos)
console.log("")
console.log(alunos.length)
console.log("")
console.log("")
console.log('================== Pecorrendo um array  ==================')
console.log("")
// indici   [0][1][2][3][4][5]
let notas = [3, 8, 5, 9, 2, 7]
console.log(notas)
console.table(notas)
console.log("")

// Pecorrendo um array com laço for
console.log("Laço For")
console.log("")
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
console.log("")

// simplificação do laço for(forEach)
console.log("Laço forEach")
console.log("")
notas.forEach((notas) => {
    console.log(notas)
})
console.log("")
console.log("")
console.log('=== Manipulação e filtragem de dados  ===')
console.log("")
console.log("Exemplo 1: Adicionar 1 ponto as notas dos alunos")
console.log("")
let notasAtualizadas = notas.map((na) => {
    return na + 1
})

console.log(`Notas Originais: ${notas}`)
console.log("")
console.log(`Notas Atualizadas: ${notasAtualizadas}`)
console.log("")
console.log("Exemplo 2: Conversão de um sistema de notas(números) para letras(caracteres)")
console.log("")

/* 
    NA - Não atendeu (notas < 5)
    PA - Parcialmente atendido (notas entre 5 e 7)
    A - Atendido (notas > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(`Notas Originais: ${notas}`)
console.log("")
console.log(`Notas Convertidas: ${notasConvertidas}`)
console.log("")

//nova estrutura de dados
let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
 
    },
]
 
console.log("")
console.log("Estrutura de dados usando array")
console.log("")
console.log(alunosDC)
console.table(alunosDC)

// Filtros
console.log("")
console.log("Filtros : Exemplo 1: Alunos bolsistas")
console.log(alunosDC.filter((b) => {
    return b.bolsista === true
}))
console.log("")
console.log("Filtros : Exemplo 2: Alunos com idade superior a 40 anos")
console.log(alunosDC.filter((i) => {
    return i.idade > 40
}))
console.log("")
console.log("Filtros : Exemplo 3: Ordenar os alunos")
//Dica: criar uma copia do array original, para não modificar o index ([...array] criar uma copia)
let alunosOrdenados = [...alunosDC]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

/* alunosOrdenados.sort((b, c) => {
    return (b.idade - c.idade)
})

console.table(alunosOrdenados)

codigo feito somente para saber sobre a ordenação de números
*/