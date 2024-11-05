let res2_cre = document.getElementById('res2_cre')
let res2_decre = document.getElementById('res2_decre')
let array2 = [5,3,1,4,2]
let aux2 = 0

console.log(array2)

function ordenar2_crescente(){
    for(let j = array2.length - 1; j > 0; j--){
        for(let i = 0; i < array2.length -1; i++){
            if(array2[i] > array2[i+1]){
                aux2 = array2[i]
                array2[i] = array2[i+1]
                console.log(array2)
                console.log('-----------------------------------')
                array2[i+1] = aux2
                console.log(array2)
                console.log('-----------------------------------')
            }
        }
    }
    res2_cre.innerHTML = `os elementos do array2 são ${array2}`
}
function ordenar2_decrescente(){
    for(let j = array2.length - 1; j > 0; j--){
        for(let i = 0; i < array2.length -1; i++){
            if(array2[i] < array2[i+1]){
                aux2 = array2[i]
                array2[i] = array2[i+1]
                console.log(array2)
                console.log('-----------------------------------')
                array2[i+1] = aux2
                console.log(array2)
                console.log('-----------------------------------')
            }
        }
    }
    res2_decre.innerHTML = `os elementos do array2 são ${array2}`
}
console.log(array2)