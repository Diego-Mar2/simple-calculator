function insert(num){
    let numero = document.querySelector('#resultado').innerHTML
    if(numero.length == 23){
        alert('Valor máximo atingido!')
    } else {
    document.querySelector('#resultado').innerHTML = numero + num
    }
}
function clean(){
    let limpar = document.querySelector('#resultado')
    limpar.innerHTML = ''

}
function back(){
    let resultado = document.querySelector('#resultado').innerHTML
    document.querySelector('#resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    let calculo = document.querySelector('#resultado').innerHTML
    if(calculo.length != 0){
    document.querySelector('#resultado').innerHTML = eval(calculo)
    } else {
        alert('[ERRO] Insira um valor a ser calculado! ')
    }
}    