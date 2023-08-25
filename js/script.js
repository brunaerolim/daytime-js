function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `It's ${hora} o'clock :) `
    if (hora >= 0 && hora < 12) {
        //Good morning 
       img.src = 'img/manha.png'
       document.body.style.background = '#fff'
       
    } else if (hora >= 12 && hora <= 18) {
        // Good afternoon 
        img.src = 'img/tarde.png'
        document.body.style.background = '#fff'
        document.body.style.color = '#524D4D'
    } else {
        //Good night 
        img.src = 'img/noite.png'
        document.body.style.background = '#26272E'
        document.body.style.color = "#CCC2C0"
        document.section.style.background = '#26272E'

    }   

}