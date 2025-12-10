document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MS.js carregado');
  const modal_MS = document.getElementById('janela-MS');
  const fechar26 = document.getElementById('fechar26');
  window.abrirModalMS = function() {
    console.log('abrirModalMS chamada');
    modal_MS.classList.add('abrir26');
  }
  modal_MS.addEventListener('click', (e26) => {
    if (e26.target.id === 'fechar26' || e26.target.id === 'janela-MS') {
      modal_MS.classList.remove('abrir26');
    }
  });
});