let res5_i = document.getElementById('res5_i')
let res5_cre = document.getElementById('res5_cre')
let res5_decre = document.getElementById('res5_decre')

let num_array5 = []

criarArray5.addEventListener('click', () => {
    num_array5 = []
    res5_i.innerHTML = ``
    let max2 = Number(document.getElementById('max2').value)
    let min2 = Number(document.getElementById('min2').value)
    let quant2 = Number(document.getElementById('quant2').value)

    for (i = 0; i < quant2; i++) {
        let num_aleatorio = Math.floor(Math.random() * (max2 - min2 + 1) + min2)
        num_array5.push(num_aleatorio)
    }
    res5_i.innerHTML = `O array gerado foi: [${num_array5}]<hr>`
    console.log(num_array5)
})

bubble_ordenation_cres.addEventListener('click', () => {
    for (j = num_array5.length - 1; j > 0; j--) {
        for (i = 0; i < num_array5.length - 1; i++) {
            if (num_array5[i] > num_array5[i + 1]) {
                valor_atual = num_array5[i]
                num_array5[i] = num_array5[i + 1]
                num_array5[i + 1] = valor_atual
            }
        }
    }
    res5_cre.innerHTML = ``
    res5_cre.innerHTML = `O resultado da ordenação crescente é: [${num_array5}]<hr>`
})

bubble_ordenation_decre.addEventListener('click', () => {
    for (j = num_array5.length - 1; j > 0; j--) {
        for (i = 0; i < num_array5.length - 1; i++) {
            if (num_array5[i] < num_array5[i + 1]) {
                valor_atual = num_array5[i]
                num_array5[i] = num_array5[i + 1]
                num_array5[i + 1] = valor_atual
            }
        }
    }
    res5_decre.innerHTML = ``
    res5_decre.innerHTML = `O resultado da ordenação decrescente é: [${num_array5}]<hr>`
})