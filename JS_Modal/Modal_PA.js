document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_PA.js carregado');

  const modal_PA = document.getElementById('janela-PA');
  const fechar21 = document.getElementById('fechar21');

  window.abrirModalPA = function() {
    console.log('abrirModalPA chamada');
    modal_PA.classList.add('abrir21');
  }

  modal_PA.addEventListener('click', (e21) => {
    if (e21.target.id === 'fechar21' || e21.target.id === 'janela-PA') {
      modal_PA.classList.remove('abrir21');
    }
  });
});