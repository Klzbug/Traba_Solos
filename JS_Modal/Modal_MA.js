document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MA.js carregado');

  const modal_MA = document.getElementById('janela-MA');
  const fechar9 = document.getElementById('fechar9');

  window.abrirModalMA = function() {
    console.log('abrirModalMA chamada');
    modal_MA.classList.add('abrir9');
  }

  modal_MA.addEventListener('click', (e9) => {
    if (e9.target.id === 'fechar9' || e9.target.id === 'janela-MA') {
      modal_MA.classList.remove('abrir9');
    }
  });
});