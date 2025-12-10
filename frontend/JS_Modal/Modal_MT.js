document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MT.js carregado');
  const modal_MT = document.getElementById('janela-MT');
  const fechar25 = document.getElementById('fechar25');
  window.abrirModalMT = function() {
    console.log('abrirModalMT chamada');
    modal_MT.classList.add('abrir25');
  }
  modal_MT.addEventListener('click', (e25) => {
    if (e25.target.id === 'fechar25' || e25.target.id === 'janela-MT') {
      modal_MT.classList.remove('abrir25');
    }
  });
});