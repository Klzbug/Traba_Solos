document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PR.js carregado');

  const modal_PR = document.getElementById('janela-PR');
  const fechar19 = document.getElementById('fechar19');

  window.abrirModalPR = function() {
    console.log('abrirModalPR chamada');
    modal_PR.classList.add('abrir19');
  }

  modal_PR.addEventListener('click', (e19) => {
    if (e19.target.id === 'fechar19' || e19.target.id === 'janela-PR') {
      modal_PR.classList.remove('abrir19');
    }
  });
});