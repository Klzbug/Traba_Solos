document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AM.js carregado');
  const modal_AM = document.getElementById('janela-AM');
  const fechar19 = document.getElementById('fechar19');
  window.abrirModalAM = function() {
    console.log('abrirModalAM chamada');
    modal_AM.classList.add('abrir19');
  }
  modal_AM.addEventListener('click', (e19) => {
    if (e19.target.id === 'fechar19' || e19.target.id === 'janela-AM') {
      modal_AM.classList.remove('abrir19');
    }
  });
});