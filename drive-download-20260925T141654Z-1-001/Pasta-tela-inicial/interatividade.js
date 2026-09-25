const botao_chamada = document.querySelector(".chamada-button")
const botao_perfil = document.querySelector(".perfil")
const caixa_perfil = document.querySelector(".caixa")
const botao_login = document.querySelector(".login") 
const link_entrar = document.querySelector(".link-entrar")
const botao_criadores = document.querySelector(".btn-criadores")
const login_tela = document.querySelector(".login-tela")
const botao_login_sair = document.querySelector(".btn-Fechar")

botao_chamada.addEventListener("click", function() {
    window.location.href = "../pasta-tela-sobre/Index.html"
} )

botao_chamada.addEventListener("mouseenter", function() {
    botao_chamada.style.backgroundColor = "#69beff"
    botao_chamada.style.width = "35vw"
    botao_chamada.style.minWidth = "250px"
    botao_chamada.style.Height = "8vh"
    botao_chamada.style.minHeight = "45px"
    botao_chamada.style.top = "69%"
})

botao_chamada.addEventListener("mouseout", function() {
    botao_chamada.style.backgroundColor = "#8fd2ff"
    botao_chamada.style.width = "25vw"
    botao_chamada.style.minWidth = "180px"
    botao_chamada.style.Height = "8vh"
    botao_chamada.style.minHeight = "45px"
    botao_chamada.style.top = "70%"
})

caixa_perfil.addEventListener("mouseenter", function() {
    console.log("Passou na caixa do perfil")
    caixa_perfil.style.height = "150dvh"
    caixa_perfil.style.top = "50%"
    botao_login.style.top = "18.5%"
    botao_perfil.style.top = "18.5%"
    link_entrar.style.top = "18.5%"
})

caixa_perfil.addEventListener("mouseleave", function() {
    caixa_perfil.style.height = "4.5vw"
    caixa_perfil.style.top = "3.5%"
    botao_login.style.top = "50%"
    botao_perfil.style.top = "50%"
    link_entrar.style.top = "50%"
}
)

botao_criadores.addEventListener("click", function() {
    window.location.href = "../Pasta-criadores/index.html"
})

botao_criadores.addEventListener("mouseenter", function() {
    botao_criadores.style.backgroundColor = "#34b650"
    botao_criadores.style.color = "#000000"
    botao_criadores.style.width = "15vw"
    botao_criadores.style.minWidth = "150px"
    botao_criadores.style.top = "94.5%"
})

botao_criadores.addEventListener("mouseout", function() {
    botao_criadores.style.backgroundColor = "#5cf57d"
    botao_criadores.style.color = "#ffffff"
    botao_criadores.style.width = "10vw"
    botao_criadores.style.minWidth = "100px"
    botao_criadores.style.top = "95%"
})

botao_login.addEventListener("click", function() {
    login_tela.showModal()
})

botao_login_sair.addEventListener("click", function() {
    login_tela.close()
})

