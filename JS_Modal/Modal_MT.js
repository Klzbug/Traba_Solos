document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MT.js carregado');

  const modal_MT = document.getElementById('janela-MT');
  const fechar24 = document.getElementById('fechar24');

  window.abrirModalMT = function() {
    console.log('abrirModalMT chamada');
    modal_MT.classList.add('abrir24');
  }

  modal_MT.addEventListener('click', (e24) => {
    if (e24.target.id === 'fechar24' || e24.target.id === 'janela-MT') {
      modal_MT.classList.remove('abrir24');
    }
  });
});