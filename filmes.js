const prompt = require("prompt-sync")()



// declara os vetores a serem utilizados no programa

const t1 = []

const generos = []

const duracoes = []



function incluir() {

    console.log("\nInclusão de Filmes")

    console.log("-".repeat(40))



    const x = prompt("Título do Filme: ")

    const y = prompt("Gênero do Filme: ")

    const z = Number(prompt("Duração em min.: "))



    // insere as variáveis no final de cada vetor

    t1.push(x)

    generos.push(y)

    duracoes.push(z)



    console.log("Ok! Filme Cadastrado com Sucesso...")

}



function listar() {

    console.log("\nListagem dos Filmes Cadastrados")

    console.log("-".repeat(40))



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    for (let i = 0; i < t1.length; i++) {

        console.log(` ${i + 1} ${t1[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

    }

}



function pesq_titulo() {

    console.log("\nPesquisa por Título do Filme")

    console.log("-".repeat(40))



    // ao ler a palavra, converte para letras maiúsculas

    const palavra = prompt("Informe a palavra-chave do título: ").toUpperCase()



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < t1.length; i++) {

        if (t1[i].toUpperCase().includes(palavra)) {

            console.log(` ${i + 1} ${t1[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

            existe = 1

        }

    }



    if (existe == 0) {

        console.log(`* Obs.: Não há filmes com a palavra "${palavra}"`)

    }

}



function pesq_genero() {

    console.log("\nPesquisa por Gênero")

    console.log("-".repeat(40))



    // ao ler o gênero, converte para letras maiúsculas

    const pesq = prompt("Informe o Gênero: ").toUpperCase()



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < t1.length; i++) {

        if (generos[i].toUpperCase() == pesq) {

            console.log(` ${i + 1} ${t1[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

            existe = 1

        }

    }



    if (existe == 0) {

        console.log(`* Obs.: Não há filmes do gênero ${pesq}`)

    }

}
function pesq_duracao() {

    console.log("\nPesquisa por Duração dos Filmes")

    console.log("-".repeat(40))



    const maximo = Number(prompt("Duração Máxima dos Filmes: "))



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < t1.length; i++) {

        if (duracoes[i] <= maximo) {

            console.log(` ${i + 1} ${t1[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

            existe = 1

        }

    }



    if (existe == 0) {

        console.log(`* Obs.: Não há filmes com duração até ${maximo} min`)

    }

}



function excluir() {

    listar()



    console.log("\nExclusão de Filmes")

    console.log("-".repeat(40))



    const numExcluir = Number(prompt("Nº do Filme a ser Excluído (ou 0 para retornar): "))



    if (numExcluir == 0) {

        return

    }



    if (numExcluir > t1.length) {

        console.log("Erro... número inválido")

        return

    }



    const excluido = t1.splice(numExcluir - 1, 1)

    generos.splice(numExcluir - 1, 1)

    duracoes.splice(numExcluir - 1, 1)



    console.log(`Ok! Filme "${excluido.toString()}" removido com sucesso...`)

}



function estatistica() {

    console.log("\nEstatística do Cadastro de Filmes")

    console.log("-".repeat(40))



    let soma = 0



    // percorre todos os elementos do vetor

//    for (let i = 0; i < duracoes.length; i++) {

//        soma = soma + duracoes[i]

//    }



    // percorre todos os elementos do vetor    

    for (const duracao of duracoes) {

        soma = soma + duracao

    }



    const num = t1.length

    const media = soma / num

    

    console.log(`Nº de Filmes Cadastrados..: ${num}`)

    console.log(`Duração Total dos Filmes..: ${soma}`)

    console.log(`Duração Média dos Filmes..: ${media.toFixed(1)}`)



    // 310 => 5h e 10min

    const horas = Math.floor(soma / 60)

    const min = soma % 60



    console.log(`Total em horas e minutos..: ${horas}h e ${min}min`)

}
// -------------------------------------------------- Programa Principal

do {

    console.log("\nControle Pessoal de Filmes")

    console.log("-".repeat(40))

    console.log("1. Incluir Filmes")

    console.log("2. Listar Filmes")

    console.log("3. Pesquisar por Título do Filme")

    console.log("4. Pesquisar por Gênero")

    console.log("5. Pesquisar por Duração")

    console.log("6. Excluir Filme")

    console.log("7. Estatística do Cadastro")

    console.log("8. Finalizar")

    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {

        incluir()

    } else if (opcao == 2) {

        listar()

    } else if (opcao == 3) {

        pesq_titulo()

    } else if (opcao == 4) {

        pesq_genero()

    } else if (opcao == 5) {

        pesq_duracao()

    } else if (opcao == 6) {

        excluir()

    } else if (opcao == 7) {

        estatistica()

    } else if (opcao == 8) {

        break

    } else {

        console.log("Opção Inválida...")

    }

} while (true)