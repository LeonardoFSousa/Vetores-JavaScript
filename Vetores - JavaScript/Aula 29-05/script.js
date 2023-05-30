function exe1(){
    let vetor = []

    for(let i = 0; i < 6; i++){
        vetor[i] = Number (prompt(`Informe o ${i+1}° elemento`))
    }

    let pares = []; let iPares = 0
    let impares = []; let iImpares = 0

    for(let i = 0; i < 6; i++){
        if (vetor[i] % 2 == 0){
            pares.push(vetor[i])
            iPares++
        }
        else{
            impares.push(vetor[i])
            iImpares++
        }
    }
    alert(`Pares: ${pares} Qtde: ${pares.length}`)
    alert(`Impares: ${impares} Qtde: ${impares.length}`)

}

function exe2(){
    let vetor = []

    for(let i = 0; i < 7; i++){
        vetor [i] = Number (prompt(`Informe o ${i+1}° elemento`))
    }

    let multi2 = []; let multi3 = []; let multi2e3 = []
    for(let i = 0; i < 7; i++){
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)){

            multi2e3.push(vetor[i])
            multi2.push(vetor[i])
            multi3.push(vetor[i])
        }

        else if (vetor[i] % 2 == 0){
            
            multi2.push(vetor[i])
        }

        else if (vetor[i] % 3 == 0){
            
            multi3.push(vetor[i])
        }
    }

    alert(`Multiplos de 2 e 3: ${multi2e3}`)
    alert(`Multiplos de 2: ${multi2}`)
    alert(`Multiplos de 3: ${multi3}`)
}

function exe3(){
    let codigos = []
    let estoque = []

    for(let i = 0; i < 3; i++){
        codigos [i] = Number (prompt(`Informe o código do produto`))
        estoque [i] = Number (prompt(`Informe a quantidade do produto em estoque`))
    }
    let codigo = Number (prompt(`Informe o código do produto para compra`))
    let quantidade = Number (prompt(`Informe a quantidade desejada de seu produto`))

    for(let i = 0; i < 3; i++){
        if (codigo == codigos[i]){
            estoque[i] = estoque[i] - quantidade
        }

        else if (codigo != codigos[i]){
            alert(`Código de produto inexistente`)
            
        }
        break

        else if (quantidade > estoque[i]){
            alert(`Quantidade desejada maior do que encontrada no estoque`)
            break
        }
        
    }

    alert(`Estoque atualizado: ${estoque}`)

}