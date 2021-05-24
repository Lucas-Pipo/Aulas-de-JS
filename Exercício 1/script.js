function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // para mudar a hora pra qualquer uma que eu quiser para teste: var hora = 15
    var minutos = data.getMinutes()
    msg.innerHTML = `<strong>Agora são exatamente ${hora} horas e ${minutos} minutos.</strong>`
    if (hora >= 0 && hora <12) {
        // BOM DIA
        img.src = "manha.png"
        document.body.style.background = '#ede6e0'
        msg.innerHTML += "<p>Bom dia, grupo!</p>"
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = '#eb977c'
        msg.innerHTML += "<p>Boa tarde, grupo!</p>"
    }else {
        //BOA NOITE
        img.src = "noite.png"
        document.body.style.background = '#001d3e'
        msg.innerHTML += "<p>Bom noite, grupo!</p>"
    }
}