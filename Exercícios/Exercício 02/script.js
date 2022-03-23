function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Jovem homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto homem.jpg')
            } else {
                // Velho
                img.setAttribute('src', 'Velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Jovem mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto mulher.jpg')
            } else {
                // Velho
                img.setAttribute('src', 'Velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}