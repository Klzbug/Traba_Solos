document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_SE.js carregado');
  const modal_SE = document.getElementById('janela-SE');
  const fechar = document.getElementById('fechar');
  window.abrirModalSE = function() {
    console.log('abrirModalSE chamada');
    modal_SE.classList.add('abrir');
  }
  modal_SE.addEventListener('click', (e) => {
    if (e.target.id === 'fechar' || e.target.id === 'janela-SE') {
      modal_SE.classList.remove('abrir');
    }
  });
});