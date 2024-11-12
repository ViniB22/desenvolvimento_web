res9_MatColu = document.getElementById('res9_MatColu')
res9_MatLinha = document.getElementById('res9_MatLinha')
res9_Soma = document.getElementById('res9_Soma')

let matriz1 = 
[[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]]

let matriz2 = 
[[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]]

let matrizResposta = 
[[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0]]

function gerarMatrizColuna() {

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (j % 2 == 1) {
                matriz1[i][j] = 5
            } else if (j % 2 == 0) {
                matriz1[i][j] = 7
            }
        }
    }

    
    res9_MatColu.innerHTML = "A matriz coluna gerada é: <br>["
    for(let i=0; i<7; i++){
        for(let j=0; j < 7; j++){
            res9_MatColu.innerHTML += matriz1[i][j]
            
            if(j != 6){

                res9_MatColu.innerHTML += ", "
            }
                
            if(j==6 && i==6){
                res9_MatColu.innerHTML += " ]<hr>"
            }else if(j == 6){
                res9_MatColu.innerHTML += "<br>"
            }
        }
    }
}

function gerarMatrizLinha() {

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (i % 2 == 0) {
                matriz2[i][j] = 3
            } else if (i % 2 == 1) {
                matriz2[i][j] = 9
            }
        }
    }

    res9_MatLinha.innerHTML = "A matriz linha gerada é: <br>["
    for(let i=0; i<7; i++){
        for(let j=0; j < 7; j++){
            res9_MatLinha.innerHTML += matriz2[i][j]
            
            if(j != 6){

                res9_MatLinha.innerHTML += ", "
            }
                
            if(j==6 && i==6){
                res9_MatLinha.innerHTML += " ]<hr>"
            }else if(j == 6){
                res9_MatLinha.innerHTML += "<br>"
            }
        }
    }
}

function somarMatriz() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            matrizResposta[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    res9_Soma.innerHTML = "A soma das matrizes geradas é: <br>["
    for(let i=0; i<7; i++){
        for(let j=0; j < 7; j++){
            res9_Soma.innerHTML += matrizResposta[i][j]
            
            if(j != 6){

                res9_Soma.innerHTML += ", "
            }
                
            if(j==6 && i==6){
                res9_Soma.innerHTML += " ]<hr>"
            }else if(j == 6){
                res9_Soma.innerHTML += "<br>"
            }
        }
    }
}