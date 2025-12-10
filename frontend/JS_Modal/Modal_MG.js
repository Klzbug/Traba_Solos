document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_MG.js carregado');
  const modal_MG = document.getElementById('janela-MG');
  const fechar15 = document.getElementById('fechar15');
  window.abrirModalMG = function() {
    console.log('abrirModalMG chamada');
    modal_MG.classList.add('abrir15');
  }
  modal_MG.addEventListener('click', (e15) => {
    if (e15.target.id === 'fechar15' || e15.target.id === 'janela-MG') {
      modal_MG.classList.remove('abrir15');
    }
  });
});