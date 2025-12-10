document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_SP.js carregado');
  const modal_SP = document.getElementById('janela-SP');
  const fechar2 = document.getElementById('fechar2');
  window.abrirModalSP = function() {
    console.log('abrirModalSP chamada');
    modal_SP.classList.add('abrir2');
  }
  modal_SP.addEventListener('click', (e2) => {
    if (e2.target.id === 'fechar2' || e2.target.id === 'janela-SP') {
      modal_SP.classList.remove('abrir2');
    }
  });
});