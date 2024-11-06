let res6_i = document.getElementById('res6_i')
let res6_cre = document.getElementById('res6_cre')
let res6_decre = document.getElementById('res6_decre')

let num_array6 = []

criarArray6.addEventListener('click', () => {
    num_array6 = []
    res6_i.innerHTML = ``
    let max3 = Number(document.getElementById('max3').value)
    let min3 = Number(document.getElementById('min3').value)
    let quant3 = Number(document.getElementById('quant3').value)

    for (i = 0; i < quant3; i++) {
        let num_aleatorio = Math.floor(Math.random() * (max3 - min3 + 1) + min3)
        num_array6.push(num_aleatorio)
    }
    res6_i.innerHTML = `O array gerado foi: [${num_array6}]<hr>`
    console.log(num_array6)
})

insert_ordenation_cres.addEventListener('click', () => {
    for (i = 1; i < num_array6.length; i++) {
        let j = i - 1
        valor_atual = num_array6[i]
        while (j >= 0 && valor_atual < num_array6[j]) {
            num_array6[j + 1] = num_array6[j]
            j--
        }
        num_array6[j + 1] = valor_atual
    }
    res6_cre.innerHTML = `O resultado da ordenação crescente é: [${num_array6}]<hr>`
})

insert_ordenation_decre.addEventListener('click', () => {
    for (i = 1; i < num_array6.length; i++) {
        let j = i - 1
        valor_atual = num_array6[i]
        while (j >= 0 && valor_atual > num_array6[j]) {
            num_array6[j + 1] = num_array6[j]
            j--
        }
        num_array6[j + 1] = valor_atual
    }
    res6_decre.innerHTML = `O resultado da ordenação decrescente é: [${num_array6}]<hr>`
})