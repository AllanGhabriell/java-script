function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 17
    msg.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 12) {
        img.src = 'modelo/dia.png'
        document.body.style.backgroundColor = '#4b90ff'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'modelo/tarde.png'
        document.body.style.backgroundColor = '#ff963a'
    } else {
        img.src = 'modelo/noite.png'
        document.body.style.backgroundColor = '#040054'
    }
}