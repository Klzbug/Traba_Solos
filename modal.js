// modal.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('modal.js carregado');

  const modal = document.getElementById('janela-modal');
  const fechar = document.getElementById('fechar');

  // expõe função global
  window.abrirModal = function() {
    console.log('abrirModal chamada');
    modal.classList.add('abrir');
  }

  // fecha clicando no botão ou fora do modal
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'fechar' || e.target.id === 'janela-modal') {
      modal.classList.remove('abrir');
    }
  });
});