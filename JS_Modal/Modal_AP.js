document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AP.js carregado');

  const modal_AP = document.getElementById('janela-AP');
  const fechar20 = document.getElementById('fechar20');

  window.abrirModalAP = function() {
    console.log('abrirModalAP chamada');
    modal_AP.classList.add('abrir20');
  }

  modal_AP.addEventListener('click', (e20) => {
    if (e20.target.id === 'fechar20' || e20.target.id === 'janela-AP') {
      modal_AP.classList.remove('abrir20');
    }
  });
});