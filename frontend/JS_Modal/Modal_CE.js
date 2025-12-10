document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_CE.js carregado');
  const modal_CE = document.getElementById('janela-CE');
  const fechar5 = document.getElementById('fechar5');
  window.abrirModalCE = function() {
    console.log('abrirModalCE chamada');
    modal_CE.classList.add('abrir5');
  }
  modal_CE.addEventListener('click', (e5) => {
    if (e5.target.id === 'fechar5' || e5.target.id === 'janela-CE') {
      modal_CE.classList.remove('abrir5');
    }
  });
});