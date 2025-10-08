document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PA.js carregado');

  const modal_PA = document.getElementById('janela-PA');
  const fechar25 = document.getElementById('fechar25');

  window.abrirModalPA = function() {
    console.log('abrirModalPA chamada');
    modal_PA.classList.add('abrir25');
  }

  modal_PA.addEventListener('click', (e25) => {
    if (e25.target.id === 'fechar25' || e25.target.id === 'janela-PA') {
      modal_PA.classList.remove('abrir25');
    }
  });
});