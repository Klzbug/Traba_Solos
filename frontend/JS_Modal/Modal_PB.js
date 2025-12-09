document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PB.js carregado');

  const modal_PB = document.getElementById('janela-PB');
  const fechar10 = document.getElementById('fechar10');

  window.abrirModalPB = function() {
    console.log('abrirModalPB chamada');
    modal_PB.classList.add('abrir10');
  }

  modal_PB.addEventListener('click', (e10) => {
    if (e10.target.id === 'fechar10' || e10.target.id === 'janela-PB') {
      modal_PB.classList.remove('abrir10');
    }
  });
});