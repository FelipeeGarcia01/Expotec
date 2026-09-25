const btn_voltar = document.querySelector('.btn-voltar');
const caixa_video = document.querySelector('.tabela-video');

btn_voltar.addEventListener('click', () => {
    window.location.href = '../Pasta-tela-sobre/index.html';
});

btn_voltar.addEventListener('mouseenter', () => {
    btn_voltar.style.backgroundColor = '#c0af63';
    btn_voltar.style.color = '#ffffff';
    btn_voltar.style.top = "4%";
});

btn_voltar.addEventListener('mouseleave', () => {
    btn_voltar.style.backgroundColor = '#fce682';
    btn_voltar.style.color = '#000000';
    btn_voltar.style.top = "6%";
});

caixa_video.addEventListener('mouseenter', () => {
    caixa_video.style.top = "118%";
});

caixa_video.addEventListener('mouseleave', () => {
    caixa_video.style.top = "120%";
});