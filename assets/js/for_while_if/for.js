let res12_vet1 = document.getElementById('res12_vet1')
let res12_vet2 = document.getElementById('res12_vet2')
let res12_soma = document.getElementById('res12_soma')

let vet1 =[1, 2, 3, 4, 5]
let vet2 = [15,27,49,21,7]
let vetSoma = []

function resultadoFor(){
    for(i=0;i<5;i++){
        vetSoma[i] = vet1[i] + vet2[i]
    }
    res12_vet1.innerHTML = `Os elementos do vetor1 são ${vet1}` + "<hr>"
    res12_vet2.innerHTML = `Os elementos do vetor2 são ${vet2}` + "<hr>"
    res12_soma.innerHTML = `A soma dos elementos dos vetores é ${vetSoma}`
}