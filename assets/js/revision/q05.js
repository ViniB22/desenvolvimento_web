let res11_fila = document.getElementById('res11_fila')
let res11_desf = document.getElementById('res11_desf')

let fila = []

function gerarFila(){
    for(let i = 0; i < 7; i++){
        fila.push(i + 1)
        res11_fila.innerHTML = `Os elementos da Fila são [${fila}]` + "<hr>"
    }
}

function desfazerFila(){
    for(let i = 0; i < 7; i++){
        fila.shift()
        res11_desf.innerHTML = `Os elementos da Fila são [${fila}]` 
    }
}
