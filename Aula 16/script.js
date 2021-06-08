let num = document.getElementById("numtxt")
let tab = document.getElementById('opt')
function analisador(){
    if(num.value.length == 0|| num.value<1 || num.value>100){
        window.alert("[ERRO]Por favor, digite um número válido!")
    }else{
        var n = Number(num.value)
        var elem = document.createElement('option')
        elem.value = n
        elem.text = `Você inseriu o número ${n}.`
        tab.add(elem, tab.options[0])
    }
}
tab.sort()
function finalizar(){
    //Declarar variável para guardar os valores de soma
    var s = 0
    //Acessar a div final pra inserir o textos
    var resultado = document.getElementById('result')
    //Limpar o texto final
    resultado.innerHTML = ''
    //Loop de somatória
    for(i=0;i<tab.length;i++){
        s += Number(tab[i].value)
    }//Textos do final do finalizar
    resultado.innerHTML += `A soma de todos os valores é de ${s}`
    //resultado.innerHTML += `<br>O primeiro número é ${tab[tab.length-1].value}`
    //resultado.innerHTML += `<br>O último número é ${tab[0].value}`
    resultado.innerHTML += `<br>Existe um total de ${tab.length} elementos`
    resultado.innerHTML += `<br>A média dos valores digitados é ${s/tab.length}`
    resultado.innerHTML += `<br>O menor número da lista é ${tab[0].value}`
    resultado.innerHTML += `<br>O maior número da lista é ${tab[tab.length-1].value}`
    tab.innerHTML = ""
}