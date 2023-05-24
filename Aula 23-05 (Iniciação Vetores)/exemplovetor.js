function exe0(){

let precos = []
let soma = 0
let i
    for(i = 0; i < 10; i++){
        precos[i] = Number (prompt(`Informe o preço ${i + 1} : `))
    }
    for(i = 0; i < 10; i++){
        soma = soma + precos[i]
    }

    alert(`media = ${soma/10} `)
}