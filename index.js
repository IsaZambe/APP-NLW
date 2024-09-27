// array, objetos
let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }

}

meta.value = "Traduzir um livro por mês"
meta.log(meta.value)

// functions // arrow function
//const CriarMeta = () => {}
//function CriarMeta() {}