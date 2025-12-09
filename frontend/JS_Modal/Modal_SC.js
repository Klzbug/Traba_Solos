document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_SC.js carregado');

  const modal_SC = document.getElementById('janela-SC');
  const fechar18 = document.getElementById('fechar18');

  window.abrirModalSC = function() {
    console.log('abrirModalSC chamada');
    modal_SC.classList.add('abrir18');
  }
  modal_SC.addEventListener('click', (e18) => {
    if (e18.target.id === 'fechar18' || e18.target.id === 'janela-SC') {
      modal_SC.classList.remove('abrir18');
    }
  });
});