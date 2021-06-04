function analisador(){
    let num = document.getElementById("numtxt")
    let tab = document.getElementById('opt')
    if(num.value.length == 0|| num.value<1 || num.value>100){
        window.alert("[ERRO]Por favor, digite um número válido!")
    }else{
        let n = Number(num.value)
        let tabela = [0]
        for(let i = n; i < tabela.length ; i++){
            let item = document.createElement('option')
            item.text = `${tabela[i]} foi adicionado`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}