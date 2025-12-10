document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_ES.js carregado');
  const modal_ES = document.getElementById('janela-ES');
  const fechar16 = document.getElementById('fechar16');
  window.abrirModalES = function() {
    console.log('abrirModalES chamada');
    modal_ES.classList.add('abrir16');
  }
  modal_ES.addEventListener('click', (e16) => {
    if (e16.target.id === 'fechar16' || e16.target.id === 'janela-ES') {
      modal_ES.classList.remove('abrir16');
    }
  });
});