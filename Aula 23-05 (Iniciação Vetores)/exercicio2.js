function exe2(){

    let numeros = []
    let soma = 0
        for(let i = 0; i < 10; i++){
            numeros[i] = Number (prompt(`Informe o numero ${i + 1} : `))
        }

        for(let i = 0; i < 10; i++){
        if (i % 2 != 0)
        {
            soma = soma + numeros[i]
        }
        else
        {
            soma = soma 
        }
    }
    
        alert(`A soma dos números impares que voce digitou é = ${soma} `)
    }