document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RR.js carregado');
  const modal_RR = document.getElementById('janela-RR');
  const fechar23 = document.getElementById('fechar23');
  window.abrirModalRR = function() {
    console.log('abrirModalRR chamada');
    modal_RR.classList.add('abrir23');
  }
  modal_RR.addEventListener('click', (e23) => {
    if (e23.target.id === 'fechar23' || e23.target.id === 'janela-RR') {
      modal_RR.classList.remove('abrir23');
    }
  });
});