let res4_i = document.getElementById('res4_i')
let res4_cre = document.getElementById('res4_cre')
let res4_decre = document.getElementById('res4_decre')

let num_array4 = []

criarArray4.addEventListener('click', () => {
    num_array4 = []
    res4_i.innerHTML = ``
    let max1 = Number(document.getElementById('max1').value)
    let min1 = Number(document.getElementById('min1').value)
    let quant1 = Number(document.getElementById('quant1').value)

    for(i=0;i<quant1;i++){
        let num_aleatorio = Math.floor(Math.random()*(max1 - min1 + 1) + min1)
        num_array4.push(num_aleatorio)
    }
    res4_i.innerHTML = `O array gerado foi: [${num_array4}]<hr>`
    console.log(num_array4)
})

selection_ordenation_cres.addEventListener('click', () => {
    for(i=0;i<num_array4.length;i++){
        menor = i
        for(j=i+1;j<num_array4.length;j++){
            if(num_array4[j]<num_array4[menor]){
            menor = j
        } 
    
        }
        if(i != menor){
            valor_atual = num_array4[i]
            num_array4[i]=num_array4[menor]
            num_array4[menor]=valor_atual
            console.log(num_array4)
        }
    }
    res4_cre.innerHTML = ``
    res4_cre.innerHTML = `O resultado da ordenação crescente é: [${num_array4}]<hr>`
})
selection_ordenation_decre.addEventListener('click', () => {
    for(i=0;i<num_array4.length;i++){
        menor = i
        for(j=i+1;j<num_array4.length;j++){
            if(num_array4[j]>num_array4[menor]){
                menor = j
            } 
            
        }
        if(i != menor){
            valor_atual = num_array4[i]
            num_array4[i]=num_array4[menor]
            num_array4[menor]=valor_atual
            console.log(num_array4)
        }
    }
    
    res4_decre.innerHTML = ``
    res4_decre.innerHTML = `O resultado da ordenação decrescente é: [${num_array4}]`
})