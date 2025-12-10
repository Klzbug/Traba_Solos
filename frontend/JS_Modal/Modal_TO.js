document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_TO.js carregado');
  const modal_TO = document.getElementById('janela-TO');
  const fechar3 = document.getElementById('fechar3');
  window.abrirModalTO = function() {
    console.log('abrirModalTO chamada');
    modal_TO.classList.add('abrir3');
  }
  modal_TO.addEventListener('click', (e3) => {
    if (e3.target.id === 'fechar3' || e3.target.id === 'janela-TO') {
      modal_TO.classList.remove('abrir3');
    }
  });
});