function mostrarMais(botao) {
  const card = botao.closest('.card');
  const info = card.querySelector('.mais-info');
  const isOpen = card.classList.contains('mostrar');

  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('mostrar');
    c.querySelector('.mais-info').style.maxHeight = '0';
    c.querySelector('.mais-info').style.opacity = 0;
  });

  if (!isOpen) {
    card.classList.add('mostrar');
    info.style.maxHeight = info.scrollHeight + 'px';
    info.style.opacity = 1;
  }
}

function mostrarMaisAlunos(botao){
    const info = botao.nextElementSibling;
    const visivel = info.style.display == "block";
    info.style.display = visivel ? "none" : "block";
    botao.textContent = visivel ? "Info Alunos" : "Esconder";
}
