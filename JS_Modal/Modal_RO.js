document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RO.js carregado');

  const modal_RO = document.getElementById('janela-RO');
  const fechar26 = document.getElementById('fechar26');

  window.abrirModalRO = function() {
    console.log('abrirModalRO chamada');
    modal_RO.classList.add('abrir26');
  }

  modal_RO.addEventListener('click', (e26) => {
    if (e26.target.id === 'fechar26' || e26.target.id === 'janela-RO') {
      modal_RO.classList.remove('abrir26');
    }
  });
});