let res3_i = document.getElementById('res3_i')
let res3_cre = document.getElementById('res3_cre')
let res3_decre = document.getElementById('res3_decre')
let array3 = []
let aux3 = 0

function alimentaArray3(){
    for(i = 0; i < 10; i++){
        array3[i] = gerarNumerosAleatorios(20,1)
    }
    res3_i.innerHTML = `Valores desordenados no Array ${array3}`
}
console.log(array3)

function ordenar3_crescente(){
    for(let j = array3.length - 1; j > 0; j--){
        for(let i = 0; i < array3.length -1; i++){
            if(array3[i] > array3[i+1]){
                aux3 = array3[i]
                array3[i] = array3[i+1]
                console.log(array3)
                console.log('-----------------------------------')
                array3[i+1] = aux3
                console.log(array3)
                console.log('-----------------------------------')
            }
        }
    }
    res3_cre.innerHTML = `os elementos do array3 são ${array3}`
}
function ordenar3_decrescente(){
    for(let j = array3.length - 1; j > 0; j--){
        for(let i = 0; i < array3.length -1; i++){
            if(array3[i] < array3[i+1]){
                aux3 = array3[i]
                array3[i] = array3[i+1]
                console.log(array3)
                console.log('-----------------------------------')
                array3[i+1] = aux3
                console.log(array3)
                console.log('-----------------------------------')
            }
        }
    }
    res3_decre.innerHTML = `os elementos do array3 são ${array3}`
}
console.log(array3)