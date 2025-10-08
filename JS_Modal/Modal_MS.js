document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MS.js carregado');

  const modal_MS = document.getElementById('janela-MS');
  const fechar23 = document.getElementById('fechar23');

  window.abrirModalMS = function() {
    console.log('abrirModalMS chamada');
    modal_MS.classList.add('abrir23');
  }

  modal_MS.addEventListener('click', (e23) => {
    if (e23.target.id === 'fechar23' || e23.target.id === 'janela-MS') {
      modal_MS.classList.remove('abrir23');
    }
  });
});