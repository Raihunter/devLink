function toggleMode() {
    const html = document.documentElement

    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    /* Outra forma de fazer*/
    /*html.classList.toggle('light')*/
    
    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a image
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Raimundo Nascimento, pouco lateralizado, sorrindo e fundo laranja.")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar-dark.png")
        img.setAttribute("alt", "Foto de Raimundo Nascimento, pouco lateralizado, sorrindo e fundo amarelo.")
    }

}