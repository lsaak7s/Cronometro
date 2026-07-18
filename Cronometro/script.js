let start = document.getElementById("start")
let stop = document.getElementById("stop")
let number = 0
// É nessesario ter uma variavel vazia, para pode selecionar a function
let Set
start.addEventListener("click", run)
stop.addEventListener("click", pause)

function run() {
    // E vai embora contando
    Set = setInterval(() => {
        // adicona 1 numero encima do anterior
        number++
        // Altera o numero valor, no caso o numero
        temp.innerHTML = number
        //Aqui eo time
    }, 1000);
}
// Aqui a function pause
function pause() {
    // Aqui que colocamos o nome da nossa function
clearInterval(Set)
}