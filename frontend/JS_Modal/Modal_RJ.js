document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RJ.js carregado');
  const modal_RJ = document.getElementById('janela-RJ');
  const fechar17 = document.getElementById('fechar17');
  window.abrirModalRJ = function() {
    console.log('abrirModalRJ chamada');
    modal_RJ.classList.add('abrir17');
  }
  modal_RJ.addEventListener('click', (e17) => {
    if (e17.target.id === 'fechar17' || e17.target.id === 'janela-RJ') {
      modal_RJ.classList.remove('abrir17');
    }
  });
});