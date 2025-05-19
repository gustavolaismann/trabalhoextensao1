

function mostrarMais(botao) {
    const info = botao.nextElementSibling;
    const visivel = info.style.display == "block";
    info.style.display = visivel ? "none" : "block";
    botao.textContent = visivel ? "Saiba Mais" : "Mostrar Menos";

}

function mostrarMaisAlunos(botao){
    const info = botao.nextElementSibling;
    const visivel = info.style.display == "block";
    info.style.display = visivel ? "none" : "block";
    botao.textContent = visivel ? "Info Alunos" : "Esconder";
}