const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const feedback = document.querySelector(".feedback");
const mensagemFeedback = document.querySelector(".feedback p");

formulario.addEventListener("input", function() {
    feedback.classList.remove("sucesso");
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    feedback.classList.remove("sucesso");

    if (nome.value.trim() === "") {
        feedback.classList.remove("sucesso");
        feedback.classList.add("erro");
        mensagemFeedback.textContent = "Preencha o nome.";
        return;
    }

    if (email.value.trim() === "") {
        feedback.classList.remove("sucesso");
        feedback.classList.add("erro");
        mensagemFeedback.textContent = "Preencha o e-mail.";
        return;
    }

    if (!email.value.includes("@")) {
        feedback.classList.remove("sucesso");
        feedback.classList.add("erro");
        mensagemFeedback.textContent = "Digite um e-mail válido.";
        return;
    }

    feedback.classList.remove("erro");
    feedback.classList.add("sucesso");
    mensagemFeedback.textContent = "Cadastro enviado com sucesso!";

});

