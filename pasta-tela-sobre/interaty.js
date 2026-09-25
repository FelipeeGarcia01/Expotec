const botaoObesidade = window.document.getElementsByClassName("button-obesidade")[0];
const botaoAvancar = window.document.getElementsByClassName("button-evoluir")[0];
const botaoTimidez = window.document.getElementsByClassName("button-antisocial")[0];
const btn_voltar = document.querySelector('.btn-voltar');

function entrarObesidade() {
    window.location.href = "../pasta-tela-sabermaisObesidade/index.html"
}

function entrarTimidez() {
    window.location.href = "../pasta-tela-sabermaisTimidez/index.html"
}

function planosEvoluir() {
    window.location.href = "../pasta-tela-evoluir/index.html"
}

botaoObesidade.addEventListener("click", function() {
    entrarObesidade()
} )

botaoTimidez.addEventListener("click", function() {
    entrarTimidez()
} )

botaoAvancar.addEventListener("click", function() {
    planosEvoluir()
} )


botaoObesidade.addEventListener("mouseenter", function() {
    botaoObesidade.style.backgroundColor = "#b44633";
    botaoObesidade.style.color = "#ffffff";
    botaoObesidade.style.top = "58%";
})

botaoObesidade.addEventListener("mouseleave", function() {
    botaoObesidade.style.backgroundColor = "#ffa596";
    botaoObesidade.style.color = "#000000";
    botaoObesidade.style.top = "60%";
})

botaoTimidez.addEventListener("mouseenter", function() {
    botaoTimidez.style.backgroundColor = "#cec43e";
    botaoTimidez.style.color = "#ffffff";
    botaoTimidez.style.top = "58%";
})

botaoTimidez.addEventListener("mouseleave", function() {
    botaoTimidez.style.backgroundColor = "#fff9ab";
    botaoTimidez.style.color = "#000000";
    botaoTimidez.style.top = "60%";
})

botaoAvancar.addEventListener("mouseenter", function() {
    botaoAvancar.style.backgroundColor = "#437e1b";
    botaoAvancar.style.color = "#ffffff";
    botaoAvancar.style.top = "67%";
})

botaoAvancar.addEventListener("mouseleave", function() {
    botaoAvancar.style.backgroundColor = "#b8ff88";
    botaoAvancar.style.color = "#000000";
    botaoAvancar.style.top = "70%";
}) 

btn_voltar.addEventListener('click', () => {
    window.location.href = '../Pasta-tela-inicial/index.html';
});

btn_voltar.addEventListener('mouseenter', () => {
    btn_voltar.style.backgroundColor = '#0f7e01';
    btn_voltar.style.color = '#ffffff';
    btn_voltar.style.top = "5%";
});

btn_voltar.addEventListener('mouseleave', () => {
    btn_voltar.style.backgroundColor = '#b3f388';
    btn_voltar.style.color = '#000000';
    btn_voltar.style.top = "7%";
});