let res3 = document.getElementById('res3')
let array3 = []
let aux3 = 0

function alimentaArray3(){
    for(i = 0; i < 10; i++){
        array3[i] = gerarNumerosAleatorios(20,1)
    }
}
alimentaArray3()
console.log(array3)

function ordenar3(){
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
    res3.innerHTML = `os elementos do array3 são ${array3}`
}
console.log(array3)