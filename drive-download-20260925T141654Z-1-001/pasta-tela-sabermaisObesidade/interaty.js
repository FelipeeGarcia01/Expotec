const caixa_video = document.querySelector('.tabela-video');
const btn_voltar = document.querySelector('.btn-voltar');

caixa_video.addEventListener('mouseenter', () => {
    caixa_video.style.top = "48%";
});

caixa_video.addEventListener('mouseleave', () => {
    caixa_video.style.top = "50%";
});

btn_voltar.addEventListener('click', () => {
    window.location.href = '../Pasta-tela-sobre/index.html';
});

btn_voltar.addEventListener('mouseenter', () => {
    btn_voltar.style.backgroundColor = '#0b77be';
    btn_voltar.style.color = '#ffffff';
    btn_voltar.style.top = "8%";
});

btn_voltar.addEventListener('mouseleave', () => {
    btn_voltar.style.backgroundColor = '#8dddf3';
    btn_voltar.style.color = '#000000';
    btn_voltar.style.top = "10%";
});