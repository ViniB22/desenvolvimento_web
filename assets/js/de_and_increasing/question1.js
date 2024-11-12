let res7_i = document.getElementById('res7_i')
let res7_cre = document.getElementById('res7_cre')

let num = [0, 0, 0, 0, 0, 0, 0]
let valor_atual  = 0

function gerarAleatorio(max,min){
    let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return valorAleatorio
}

gerarArray1.addEventListener('click', () => {
    for(i=0; i < num.length; i++){
        num[i]=gerarAleatorio(15,1)
    }
    res7_i.innerHTML = `O array gerado foi: [${num}]<hr>`
})

ordenarCrescente1.addEventListener('click', () => {
    for(j=num.length-1;j>0;j--){
        for(i=0;i<num.length-1;i++){
            if(num[i]>num[i+1]){
                valor_atual = num[i]
                num[i]=num[i+1]
                num[i+1]=valor_atual
            }
        }
        res7_cre.innerHTML = `O resultado da ordenação crescente é: [${num}]`
    }
})