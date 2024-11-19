let res13_array = document.getElementById('res13_array')
let res13_media = document.getElementById('res13_media')

let array_while = [12, 23, 34, 45, 56]
let i_while = 0
let contador_while = 0 

function resultadoWhile() {
    let media_while = 0, soma_while = 0

    res13_array.innerHTML = `Os valores do array são [${array_while}]` + "<hr>"

    while (i_while < array_while.length) {
        soma_while += array_while[i_while]
        console.log(`a soma é ${soma_while}`)
        contador_while++
        i_while++
    }
    media_while = soma_while / contador_while
    console.log(media_while)
    res13_media.innerHTML = `A média é ${media_while}`
}