function tabuadora(){
    let num = document.getElementById("tabuada")
    if(num.value.length == 0){
        window.alert("[ERRO]Por favor, digite um número!")
    }else{
        let n = Number(num.value)
        //Versão comprida
        /*document.getElementById('opt')[0].innerHTML = `${n}x1=${n*1}`
        document.getElementById('opt')[1].innerHTML = `${n}x2=${n*2}`
        document.getElementById('opt')[2].innerHTML = `${n}x3=${n*3}`
        document.getElementById('opt')[3].innerHTML = `${n}x4=${n*4}`
        document.getElementById('opt')[4].innerHTML = `${n}x5=${n*5}`
        document.getElementById('opt')[5].innerHTML = `${n}x6=${n*6}`
        document.getElementById('opt')[6].innerHTML = `${n}x7=${n*7}`
        document.getElementById('opt')[7].innerHTML = `${n}x8=${n*8}`
        document.getElementById('opt')[8].innerHTML = `${n}x9=${n*9}`
        document.getElementById('opt')[9].innerHTML = `${n}x10=${n*10}`*/
        //Versão inteligente
        let m = 1
        for(let c = 0; c<=10; ++c && ++m){
            document.getElementById('opt')[c].innerHTML = `${n}x${m}=${n*m}`
        }
    }
}