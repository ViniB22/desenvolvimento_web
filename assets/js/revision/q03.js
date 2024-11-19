let res10_Mat = document.getElementById('res10_Mat')
let res10_Soma = document.getElementById('res10_Soma')

let matriz3 = [ [0,0,0,0,0,0,0,0],
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

function gerarMatriz2(){
    for(let i=0; i < 8; i++){
        for(let j=0; j< 8; j++){
           matriz3[i][j] = gerarNumeroAleatorio(50,1) 
        }
    }
    console.table(matriz3)
    res10_Mat.innerHTML = "A matriz gerada é: <br>["
    for(let i=0; i<8; i++){
        for(let j=0; j < 8; j++){
            res10_Mat.innerHTML += matriz3[i][j]
            
            if(j != 7){

                res10_Mat.innerHTML += ", "
            }
                
            if(j==7 && i==7){
                res10_Mat.innerHTML += " ]<hr>"
            }else if(j == 7){
                res10_Mat.innerHTML += "<br>"
            }
        }
    }
}

function somaMatrizElements(){ 
    soma = 0
    for(let i=0; i < 8; i++){
        for(let j=0; j< 8; j++){
           if( j % 2 == 0){
            soma += matriz3[i][j]
           } 
        }
    }
    res10_Soma.innerHTML = "A soma dos elementos das colunas pares é: " + soma
    console.log('soma dos elementos das colunas pares é = ',soma)
}



