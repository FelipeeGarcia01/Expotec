const botao_chamada = document.getElementsByClassName("chamada-button")

botao_chamada.addEventListener("click", function() {
    window.location.href = "Sobre.html"
} )

botao_chamada.addEventListener("mouseover", function() {
    botao_chamada.style.backgroundColor = rgb(25, 0, 255)
})

botao_chamada.addEventListener("mouseout", function() {
    botao_chamada.style.backgroundColor = rgb(143, 210, 255)
})