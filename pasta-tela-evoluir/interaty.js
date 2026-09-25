const btn_voltar = document.querySelector('.btn-voltar');
const CARDS = {
    card_basico: document.querySelector(".Plano-basic"),
    card_recomend: document.querySelector(".Plano-intermediario"),
    card_pro: document.querySelector(".Plano-pro")
}

const ASSINATURAS = {
    assinatura_basic: document.querySelector('.assinatura-basic'),
    assinatura_recomend: document.querySelector('.assinatura-recomend'),
    assinatura_pro: document.querySelector('.assinatura-pro')
}

CARDS.card_basico.addEventListener('mouseenter', () => {
    CARDS.card_basico.style.top = "46%"
})

CARDS.card_basico.addEventListener('mouseleave', () => {
    CARDS.card_basico.style.top = "50%"
})

CARDS.card_recomend.addEventListener('mouseenter', () => {
    CARDS.card_recomend.style.top = "46%"
})

CARDS.card_recomend.addEventListener('mouseleave', () => {
    CARDS.card_recomend.style.top = "50%"
})

CARDS.card_pro.addEventListener('mouseenter', () => {
    CARDS.card_pro.style.top = "46%"
})

CARDS.card_pro.addEventListener('mouseleave', () => {
    CARDS.card_pro.style.top = "50%"
})

ASSINATURAS.assinatura_basic.addEventListener('mouseenter', () => {
    CARDS.card_basico.style.backgroundColor = "rgba(1, 62, 153, 0.7)"
    ASSINATURAS.assinatura_basic.style.width = "60%"
})

ASSINATURAS.assinatura_basic.addEventListener('mouseleave', () => {
    CARDS.card_basico.style.backgroundColor = "rgba(133, 176, 240, 0.5)"
    ASSINATURAS.assinatura_basic.style.width = "50%"
})

ASSINATURAS.assinatura_recomend.addEventListener('mouseenter', () => {
    CARDS.card_recomend.style.backgroundColor = "rgba(146, 125, 29, 0.7)"
    ASSINATURAS.assinatura_recomend.style.width = "60%"
})

ASSINATURAS.assinatura_recomend.addEventListener('mouseleave', () => {
    CARDS.card_recomend.style.backgroundColor = "rgba(221, 194, 76, 0.5)"
    ASSINATURAS.assinatura_recomend.style.width = "50%"
})

ASSINATURAS.assinatura_pro.addEventListener('mouseenter', () => {
    CARDS.card_pro.style.backgroundColor = "rgba(111, 187, 75, 0.7)"
    ASSINATURAS.assinatura_pro.style.width = "60%"
})

ASSINATURAS.assinatura_pro.addEventListener('mouseleave', () => {
    CARDS.card_pro.style.backgroundColor = "rgba(150, 196, 150, 0.5)"
    ASSINATURAS.assinatura_pro.style.width = "50%"
})





btn_voltar.addEventListener('click', () => {
    window.location.href = '../Pasta-tela-sobre/index.html';
});

btn_voltar.addEventListener('mouseenter', () => {
    btn_voltar.style.backgroundColor = '#b88f0b';
    btn_voltar.style.color = '#ffffff';
    btn_voltar.style.top = "8%";
});

btn_voltar.addEventListener('mouseleave', () => {
    btn_voltar.style.backgroundColor = '#ffee04';
    btn_voltar.style.color = '#000000';
    btn_voltar.style.top = "10%";
});