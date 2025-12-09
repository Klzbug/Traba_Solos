document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PE.js carregado');

  const modal_PE = document.getElementById('janela-PE');
  const fechar13 = document.getElementById('fechar13');

  window.abrirModalPE = function() {
    console.log('abrirModalPE chamada');
    modal_PE.classList.add('abrir13');
  }

  modal_PE.addEventListener('click', (e13) => {
    if (e13.target.id === 'fechar13' || e13.target.id === 'janela-PE') {
      modal_PE.classList.remove('abrir13');
    }
  });
});