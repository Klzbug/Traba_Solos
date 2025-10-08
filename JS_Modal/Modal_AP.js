document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AP.js carregado');

  const modal_AP = document.getElementById('janela-AP');
  const fechar21 = document.getElementById('fechar21');

  window.abrirModalAP = function() {
    console.log('abrirModalAP chamada');
    modal_AP.classList.add('abrir21');
  }

  modal_AP.addEventListener('click', (e21) => {
    if (e21.target.id === 'fechar21' || e21.target.id === 'janela-AP') {
      modal_AP.classList.remove('abrir21');
    }
  });
});