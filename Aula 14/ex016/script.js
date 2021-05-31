function cor(){
    var cor = getElementById('cordefundo')
    document.body.style.background = cor
}
function contar(){
    let ini = document.getElementById("inic")
    let final = document.getElementById("fi")
    let passo = document.getElementById("pas")
    let res = document.getElementById("res")
    if (passo.value.length == 0 || ini.value.length == 0 || final.value.length == 0){
        res.innerHTML = ("Impossível contar!")
    }else{
        res.innerHTML="Contando: <br>("
        let i = Number(ini.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(p == 0){
            window.alert("[ERRO]O passo não pode ser 0. Consideraremos como 1!")
            p = 1
        }
            if(i<f){
                for(let c = i; c<=f; c+=p){
                res.innerHTML+=`${c} \u{1F449}`
            }
            }else{
                for(c=i;c>=f;c-=p){
                    res.innerHTML+=`${c} \u{1F449}`
            }
        }
    }res.innerHTML+=`\u{1F3C1})` 
}