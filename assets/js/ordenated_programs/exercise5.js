let res5 = document.getElementById('res5')
let array5 = []
let aux5 = 0

function alimentaArray5(){
    for(i = 0; i < 50; i++){
        array5[i] = gerarNumerosAleatorios(500,1)
    }
}
alimentaArray5()
console.log(array5)

function ordenar5(){
    for(let j = array5.length - 1; j > 0; j--){
        for(let i = 0; i < array5.length -1; i++){
            if(array5[i] < array5[i+1]){
                aux5 = array5[i]
                array5[i] = array5[i+1]
                console.log(array5)
                console.log('-----------------------------------')
                array5[i+1] = aux5
                console.log(array5)
                console.log('-----------------------------------')
            }
        }
    }
    res5.innerHTML = `os elementos do array5 são ${array5}`
}
console.log(array4)