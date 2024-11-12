let res8_i = document.getElementById('res8_i')
let res8_decre = document.getElementById('res8_decre')

let arr = [0, 0, 0, 0, 0, 0, 0]
let valor_atual2  = 0

function gerarAleatorio2(max,min){
    let valorAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return valorAleatorio
}

gerarArray2.addEventListener('click', () => {
    for(i=0; i < arr.length; i++){
        arr[i]=gerarAleatorio(15,1)
    }
    res8_i.innerHTML = `O array gerado foi: [${arr}]<hr>`
})

ordenarCrescente2.addEventListener('click', () => {
    for(j=arr.length-1;j>0;j--){
        for(i=0;i<arr.length-1;i++){
            if(arr[i] < arr[i+1]){
                valor_atual2 = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=valor_atual2
            }
        }
        console.log(arr)       
    }
    res8_decre.innerHTML = `O resultado da ordenação crescente é: [${arr}]`
})