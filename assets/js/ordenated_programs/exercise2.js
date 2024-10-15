let res2 = document.getElementById('res2')
let array2 = [5,3,1,4,2]
let aux2 = 0

console.log(array2)

function ordenar2(){
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
    res2.innerHTML = `os elementos do array2 são ${array2}`
}
console.log(array2)