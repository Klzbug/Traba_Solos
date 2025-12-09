document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RO.js carregado');

  const modal_RO = document.getElementById('janela-RO');
  const fechar22 = document.getElementById('fechar22');

  window.abrirModalRO = function() {
    console.log('abrirModalRO chamada');
    modal_RO.classList.add('abrir22');
  }

  modal_RO.addEventListener('click', (e22) => {
    if (e22.target.id === 'fechar22' || e22.target.id === 'janela-RO') {
      modal_RO.classList.remove('abrir22');
    }
  });
});