document
    .getElementById("entrar")
    .addEventListener("click", fazerLogin);

function fazerLogin() {

    const login =
        document.getElementById("login").value;

    const senha =
        document.getElementById("senha").value;

    const mensagem =
        document.getElementById("mensagem");

    

    if (login === "admin" && senha === "123") {

        sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify({
                tipo: "admin",
                nome: "Administrador"
            })
        );

        window.location.href = "controle.html";
        return;
    }

    

    const funcionarios =
        JSON.parse(
            localStorage.getItem("funcionarios")
        ) || [];

    const funcionario =
        funcionarios.find(f =>
            f.email === login &&
            f.senha === senha
        );

    if (funcionario) {

        sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify(funcionario)
        );

        window.location.href =
            "boasvindas.html";
    }
    else {
        mensagem.textContent =
            "Usuário ou senha inválidos";
    }
}