let matriz = [ [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0]]

let soma = 0

function gerarNumeroAleatorio(max,min){
    let valor = Math.floor((Math.random() * (max - min + 1) ) + min)
    return valor
}

function gerarMatriz(){
    for(let i=0; i < 8; i++){
        for(let j=0; j< 8; j++){
           matriz[i][j] = gerarNumeroAleatorio(50,1) 
        }
    }
    console.table(matriz)
}

function somar(){ // soma os elementos das colunas pares
    for(let i=0; i < 8; i++){
        for(let j=0; j< 8; j++){
           if( j % 2 == 0){
            soma += matriz[i][j]
           } 
        }
    }
    console.log('soma dos elementos das colunas pares é = ',soma)
}



