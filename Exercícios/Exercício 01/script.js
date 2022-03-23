function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Manha.jpg'
        document.body.style.background = 'blue'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'Tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        img.src = 'Noite.jpg'
        document.body.style.background = 'grey'
    }
}
