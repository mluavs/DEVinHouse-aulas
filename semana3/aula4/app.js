console.log("Aula 4")

// rest, spread, destructuring

// Rest e spread utilizam isso aqui { ... }
// rest é utilizado para colocar o restante de alguns valores específicos fornecidos pelo usuário em um array, objeto e coleção de parâmtros 

function somaTudo(a, b, c, d, e){
    const vetor = [a, b, c, d, e]
    

    let total = 0;
    for (let i = 0; i < vetor.length; i ++) {
        total += vetor[i]
    }
}

const resultado = somaTudo(3, 6, 1)
console.log({resultado})