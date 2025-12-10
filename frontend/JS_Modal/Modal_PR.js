document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PR.js carregado');
  const modal_PR = document.getElementById('janela-PR');
  const fechar27 = document.getElementById('fechar27');
  window.abrirModalPR = function() {
    console.log('abrirModalPR chamada');
    modal_PR.classList.add('abrir27');
  }
  modal_PR.addEventListener('click', (e27) => {
    if (e27.target.id === 'fechar27' || e27.target.id === 'janela-PR') {
      modal_PR.classList.remove('abrir27');
    }
  });
});