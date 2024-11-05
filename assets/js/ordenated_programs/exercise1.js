let res1_i = document.getElementById('res1_i')
let res1_f = document.getElementById('res1_f')
let array = []
let aux = 0

function gerarNumerosAleatorios(max,min){
    let ale = Math.floor(Math.random() * (max - min + 1) + min)
    return ale
}

function alimentaArray(){
    for(i = 0; i < 10; i++){
        array[i] = gerarNumerosAleatorios(20,1)
    }
    
    res1_i.innerHTML = `Valores desordenados no Array ${array}`
}
console.log(array)
function ordenar(){
    for(let j = array.length - 1; j > 0; j--){
        for(let i = 0; i < array.length -1; i++){
            if(array[i]> array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                console.log(array)
                console.log('-----------------------------------')
                array[i+1] = aux
                console.log(array)
                console.log('-----------------------------------')
            }
        }
    }
    res1_f.innerHTML = `os elementos do array são ${array}`
}
console.log(array)