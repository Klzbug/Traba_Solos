document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_GO.js carregado');

  const modal_GO = document.getElementById('janela-GO');
  const fechar22 = document.getElementById('fechar22');

  window.abrirModalGO = function() {
    console.log('abrirModalGO chamada');
    modal_GO.classList.add('abrir22');
  }

  modal_GO.addEventListener('click', (e22) => {
    if (e22.target.id === 'fechar22' || e22.target.id === 'janela-GO') {
      modal_GO.classList.remove('abrir22');
    }
  });
});