let fila = []

function gerarFila(){
    for(let i = 0; i < 7; i++){
        fila.push(i + 1)
        console.log(fila)
    }
}

function desfazerFila(){
    for(let i = 0; i < 7; i++){
        fila.shift()
        console.log(fila)
    }
}
