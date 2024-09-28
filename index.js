const { select, input } = require('@inquirer/prompts')

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
                    console.log("Liste suas metas")
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

