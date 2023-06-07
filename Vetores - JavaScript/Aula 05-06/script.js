function exe4(){
    let num = []
    let i 


    for(i = 0; i < 10; i++){

        num[i] = Number (prompt(`Digite o ${i + 1}° número`))
    }

    let posisoes = []
    for(i = 0; i < 10; i++){

        if(num[i] ==  30){
            posisoes.push(i)
        }
    }

    alert(`Posição(oes) onde o número 30 aparece: ${posisoes}`)

}

function exe5(){
    let log = []
    let lign = []
    let comum = []
    let i

    for(i = 0; i<10; i++)
    {
        log[i] = Number (prompt(`Informe o ${i+1}° aluno(a) que faz lógica`))
    }

    for(i = 0; i<5; i++)
    {
        lign[i] = Number (prompt(`Informe o ${i+1}° aluno(a) que faz linguagem`))
    }

    for(i=0; i<10; i++)
    {
        if (lign.includes(log[i])) 
        {
            comum.push(log[i])
        }    
    }

    alert(`Os alunos(as) que cursam as duas disciplinas são: ${comum}`)

}

function exe6(){
    let vendas = []
    let comissoes = []
    let percentuais = []
    let nomes = []
    let i

    for(i = 0; i<5; i++)
    {
        vendas[i] = Number (prompt(`Informe venda do ${i+1}° vendedor`))
        percentuais[i] = Number (prompt(`Informe % do ${i+1}° vendedor`))
        nomes[i] = Number (prompt(`Informe nome do ${i+1}° vendedor`))

    }

    let total = 0
    let maior = comissoes[0]; let menor = comissoes[0]
    for(i = 0; i<5; i++)
    {
        total = total + vendas[i]
        if (comissoes[i] > maior)
        {
            maior = comissoes[i]
        }
        if (comissoes[i] < menor)
        {
            menor = comissoes[i]
        }
    }

    alert(`Valor total vendido ${total}`)
    alert(`Maior valor ${maior} e quem recebe ${nomes(comissoes.indexOF(maior))}`)
    alert(`Maior valor ${menor} e quem recebe ${nomes(comissoes.indexOF(menor))}`)
}
