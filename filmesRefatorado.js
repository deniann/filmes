const prompt = require("prompt-sync")()



// declara os vetores a serem utilizados no programa

const titulos = []

const generos = []

const duracoes = []



function incluir() {

    console.log("\nInclusão de Filmes")

    console.log("-".repeat(40))



    const titulosFilme = prompt("Título do Filme: ")

    const generoFilme = prompt("Gênero do Filme: ")

    const duracao = Number(prompt("Duração em min.: "))



    titulos.push(titulosFilme)

    generos.push(generoFilme)

    duracoes.push(duracao)



    console.log("Ok! Filme Cadastrado com Sucesso...")

}



function listar() {

    console.log("\nListagem dos Filmes Cadastrados")

    console.log("-".repeat(40))



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    for (let i = 0; i < titulos.length; i++) {

        console.log(` ${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

    }

}



function pesq_titulo() {

    console.log("\nPesquisa por Título do Filme")

    console.log("-".repeat(40))


    const nomeTitulo = prompt("Informe o nome do título: ").toUpperCase()



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < titulos.length; i++) {

        if (titulos[i].toUpperCase().includes(nomeTitulo)) {

            console.log(` ${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

            existe = 1

        }

    }



    if (existe == 0) {

        console.log(`* Obs.: Não há filmes com o nome "${nomeTitulo}"`)

    }

}



function pesq_genero() {

    console.log("\nPesquisa por Gênero")

    console.log("-".repeat(40))


    const pesq = prompt("Informe o Gênero: ").toUpperCase()



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < titulos.length; i++) {

        if (generos[i].toUpperCase() == pesq) {

            console.log(` ${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

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



    const maximaDuracao = Number(prompt("Duração Máxima dos Filmes: "))



    console.log("\nNº Título do Filme.........: Gênero........: Duração")

    console.log("----------------------------------------------------")



    let existe = 0



    for (let i = 0; i < titulos.length; i++) {

        if (duracoes[i] <= maximaDuracao) {

            console.log(` ${i + 1} ${titulos[i].padEnd(25)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)

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



    if (numExcluir > titulos.length) {

        console.log("Erro... número inválido")

        return

    }



    const excluido = titulos.splice(numExcluir - 1, 1)

    generos.splice(numExcluir - 1, 1)

    duracoes.splice(numExcluir - 1, 1)



    console.log(`Ok! Filme "${excluido.toString()}" removido com sucesso...`)

}



function estatistica() {

    console.log("\nEstatística do Cadastro de Filmes")

    console.log("-".repeat(40))



    let duracaoTotal = 0
 

    for (const duracao of duracoes) {

        duracaoTotal = duracaoTotal + duracao

    }



    const numeroFilmes = titulos.length

    const duracaoMedia = duracaoTotal / numeroFilmes

    

    console.log(`Nº de Filmes Cadastrados..: ${numeroFilmes}`)

    console.log(`Duração Total dos Filmes..: ${duracaoTotal}`)

    console.log(`Duração Média dos Filmes..: ${duracaoMedia.toFixed(1)}`)


    const horas = Math.floor(duracaoTotal / 60)

    const minutos = duracaoTotal % 60



    console.log(`Total em horas e minutos..: ${horas}h e ${minutos}min`)

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