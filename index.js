const { select, input,checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite sua meta:"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return //se digitar cadastrarMeta apos return a pessoa fica presa no cadastrar meta ate escrever algo, se n, volta pro menu
    }

    metas.push({ 
        value: meta, checked: false } //comeca falsa pq n foi cadastrada ainda
    )
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar/desmarcar e o enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
        })

        metas.forEach((m) => {
            m.checked = false
        }) //desmarcar todas antes de selecionar


        if(respostas.length == 0) {
            console.log("Nenhuma meta selecionada!")
            return
        }


        respostas.forEach((resposta) => { //para cada
            const meta = metas.find((m) => { 
                return m.value == resposta
            })

            meta.checked = true //true ta funcionando apenas para marcar e se desmarcar, volta a ficar marcado
        } )

        console.log("Meta(s) marcadas como concluída(s)")

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        console.log('Não existem metas realizadas :(')
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true // return !meta.checked (no boleano muda o sig da frase)
    }) //esse return esta dentro da funcao do filter, a const async n sabe que ela existe

    if(abertas.length == 0) {
        console.log("Não existem metas abertas :)")
        return  
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    }) // [] tomar agua, [x]cantar, [] andar -> agua n marcado entao falso, dif de true? sim, entao entra como meta aberta. 
      // cantar ta marcado? sim, entao vdd dif de vdd? nao, entao nao entra na lista de metas abertas (fechadas)
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return { value: meta.value, checked: false }
    })

    const itensADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false,
        })

        if(itensADeletar.length == 0) {
            console.log("Nenhum item para deletar!")
            return
        }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item 
                                    // item = andar, agua != andar? sim, entao fica. andar != andar? nao, entao e falso, n entra no filtroo, 
                                    //vai ser removido da nova lista de metas. so fica na nova lista de metas aquil oque na for marcado
        })

        console.log("Meta(s) deletada(s) com sucesso!")

    })
}





const start = async () => {
    

        while(true){ //fica na opcao pra sempre, infinito pq e sempre verdadeiro
            
            const opcao = await select({ //sempre que usar await a const start tem que ser async
                message: "Menu >",
                choices: [
                    {
                        name: "Cadastrar meta",
                        value: "cadastrar"
                    },
                    {
                        name: "Listar metas",
                        value: "listar"
                    },
                    {
                        name: "Metas realizadas",
                        value: "realizadas"
                    },
                    {
                        name: "Metas abertas",
                        value: "abertas"
                    },
                    {
                        name: "Deletar metas",
                        value: "deletar"
                    },
                    {
                        name: "Sair",
                        value: "sair"
                    }
                ]
            }) 

            switch(opcao) {
                case "cadastrar":
                    await cadastrarMeta()
                    console.log(metas)
                    break
                case "listar":
                    await listarMetas()
                    break
                case "realizadas":
                    await metasRealizadas()
                    break
                case "abertas":
                    await metasAbertas()
                    break
                case "deletar":
                    await deletarMetas()
                    break
                case "sair":
                    console.log("Até a próxima!")
                    return

            }
        }
    }


start()

//function start() {
    //console.log('comecou')
//}

//start()
// ou função arrow
//const start = () => { 
    // console.log('comecou')
//}

//start()

//const start = () => { 
    // while(true).(
       //console.log('comecou')
       //return (para a função)
//}

//start()

//const start = () => { 
    //let count = 0
    //while(count < 10){
    // console.log(count)
    //count = count + 1 (vai contar 10 vezes pq volta sempre pro count ate não ser mais menos que 10)
    //pode tambem ser <= 1 que vai contar ate o 10
        //}
//}

//start()

