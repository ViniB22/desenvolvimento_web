let res14_idade = document.getElementById('res14_idade')

function resultadoIf(){
    let idade = Number(document.getElementById('idade').value)
    
    if(idade < 11){
        res14_idade.innerHTML = "Você é uma criança."
    } else if(idade >= 11 && idade < 14){
        res14_idade.innerHTML = "Você é um pré adolescente."
    } else if(idade >= 14 && idade < 18){
        res14_idade.innerHTML = " Você é um adolescente."
    } else if(idade >= 18 && idade <60){
        res14_idade.innerHTML = "Você é um adulto."
    } else if(idade >= 60) {
        res14_idade.innerHTML = "Você é um idoso."
    }
}