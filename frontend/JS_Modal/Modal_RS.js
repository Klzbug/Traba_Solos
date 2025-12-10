document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RS.js carregado');
  const modal_RS = document.getElementById('janela-RS');
  const fechar4 = document.getElementById('fechar4');
  window.abrirModalRS = function() {
    console.log('abrirModalRS chamada');
    modal_RS.classList.add('abrir4');
  }
  modal_RS.addEventListener('click', (e4) => {
    if (e4.target.id === 'fechar4' || e4.target.id === 'janela-RS') {
      modal_RS.classList.remove('abrir4');
    }
  });
});