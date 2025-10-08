document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AM.js carregado');

  const modal_AM = document.getElementById('janela-AM');
  const fechar20 = document.getElementById('fechar20');

  window.abrirModalAM = function() {
    console.log('abrirModalAM chamada');
    modal_AM.classList.add('abrir20');
  }

  modal_AM.addEventListener('click', (e20) => {
    if (e20.target.id === 'fechar20' || e20.target.id === 'janela-AM') {
      modal_AM.classList.remove('abrir20');
    }
  });
});