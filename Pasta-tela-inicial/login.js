const CLIENT_ID = "106465426748-nbcag271rip0hr3s4fn6gqhrpnmoq6od.apps.googleusercontent.com";

window.addEventListener('DOMContentLoaded', () => {
    const loginTela = document.querySelector('.login-tela');
    const btnFechar = document.querySelector('.btn-Fechar');
    const btnGoogle = document.querySelector('.login-google');
    
    if (btnFechar && loginTela) {
        btnFechar.addEventListener('click', (e) => {
            e.preventDefault();
            loginTela.close();
        });
    }

    function inicializarGoogle() {
        if (typeof google !== 'undefined' && google.accounts) {
            google.accounts.id.initialize({
                client_id: CLIENT_ID,
                callback: processarCadastroGoogle,
                ux_mode: 'popup' 
            });
        } else {
            setTimeout(inicializarGoogle, 100);
        }
    }

    inicializarGoogle();

    if (btnGoogle) {
        btnGoogle.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            if (typeof google !== 'undefined' && google.accounts) {
                google.accounts.id.prompt((notification) => {
                    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                        console.log("Motivo de não exibição:", notification.getNotDisplayedReason());
                    }
                });
            } else {
                alert("A biblioteca do Google ainda está carregando. Tente novamente em instantes.");
            }
        });
    }

    const usuarioSalvo = localStorage.getItem("usuarioCadastrado");
    if (usuarioSalvo) {
        exibirPerfil(JSON.parse(usuarioSalvo));
    }
});

function processarCadastroGoogle(response) {
    const dadosUsuario = parseJwt(response.credential);

    localStorage.setItem("usuarioCadastrado", JSON.stringify(dadosUsuario));

    alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${dadosUsuario.given_name}!`);

    const loginTela = document.querySelector('.login-tela');
    if (loginTela) {
        loginTela.close();
    }

    exibirPerfil(dadosUsuario);
}

function exibirPerfil(usuario) {
    const areaPerfil = document.getElementById('perfil-usuario');
    if (areaPerfil) {
        areaPerfil.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <img src="${usuario.picture}" alt="Foto" style="width: 32px; height: 32px; border-radius: 50%;">
                <span>Olá, ${usuario.given_name}!</span>
                <button id="btnSair">Sair</button>
            </div>
        `;

        document.getElementById('btnSair').addEventListener('click', () => {
            localStorage.removeItem("usuarioCadastrado");
            window.location.reload();
        });
    }
}

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}