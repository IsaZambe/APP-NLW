const { select } = require('@inquirer/prompts')
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
                    console.log("Faça seu cadastro")
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

