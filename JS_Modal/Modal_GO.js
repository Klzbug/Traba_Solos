document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_GO.js carregado');

  const modal_GO = document.getElementById('janela-GO');
  const fechar24 = document.getElementById('fechar24');

  window.abrirModalGO = function() {
    console.log('abrirModalGO chamada');
    modal_GO.classList.add('abrir24');
  }

  modal_GO.addEventListener('click', (e24) => {
    if (e24.target.id === 'fechar24' || e24.target.id === 'janela-GO') {
      modal_GO.classList.remove('abrir24');
    }
  });
});