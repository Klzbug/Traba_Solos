document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AL.js carregado');
  const modal_AL = document.getElementById('janela-AL');
  const fechar7 = document.getElementById('fechar7');
  window.abrirModalAL = function() {
    console.log('abrirModalAL chamada');
    modal_AL.classList.add('abrir7');
  }
  modal_AL.addEventListener('click', (e7) => {
    if (e7.target.id === 'fechar7' || e7.target.id === 'janela-AL') {
      modal_AL.classList.remove('abrir7');
    }
  });
});