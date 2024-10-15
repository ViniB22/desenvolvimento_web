let res4 = document.getElementById('res4')
let array4 = []
let aux4 = 0

function alimentaArray4(){
    for(i = 0; i < 50; i++){
        array4[i] = gerarNumerosAleatorios(500,1)
    }
}
alimentaArray4()
console.log(array4)

function ordenar4(){
    for(let j = array4.length - 1; j > 0; j--){
        for(let i = 0; i < array4.length -1; i++){
            if(array4[i] > array4[i+1]){
                aux4 = array4[i]
                array4[i] = array4[i+1]
                console.log(array4)
                console.log('-----------------------------------')
                array4[i+1] = aux4
                console.log(array4)
                console.log('-----------------------------------')
            }
        }
    }
    res4.innerHTML = `os elementos do array4 são ${array4}`
}
console.log(array4)