const CartaoFe = document.querySelector(".Tabela-Felipe");
const CartaoFa = document.querySelector(".Tabela-Fabio");
const btn_voltar = document.querySelector(".btn-voltar")

CartaoFe.addEventListener("mouseenter", () => {
    CartaoFe.style.top = "48%"
})

CartaoFe.addEventListener("mouseleave", () => {
    CartaoFe.style.top = "50%"
})

CartaoFa.addEventListener("mouseenter", () => {
    CartaoFa.style.top = "48%"
})

CartaoFa.addEventListener("mouseleave", () => {
    CartaoFa.style.top = "50%"
})

btn_voltar.addEventListener('click', () => {
    window.location.href = '../Pasta-tela-inicial/index.html';
});

btn_voltar.addEventListener('mouseenter', () => {
    btn_voltar.style.backgroundColor = '#674e75';
    btn_voltar.style.color = 'ffffff';
    btn_voltar.style.top = "8%";
});

btn_voltar.addEventListener('mouseleave', () => {
    btn_voltar.style.backgroundColor = '#a480b9';
    btn_voltar.style.color = '#000000';
    btn_voltar.style.top = "10%";
});