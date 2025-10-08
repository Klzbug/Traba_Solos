document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_RR.js carregado');

  const modal_RR = document.getElementById('janela-RR');
  const fechar27 = document.getElementById('fechar27');

  window.abrirModalRR = function() {
    console.log('abrirModalRR chamada');
    modal_RR.classList.add('abrir27');
  }

  modal_RR.addEventListener('click', (e27) => {
    if (e27.target.id === 'fechar27' || e27.target.id === 'janela-RR') {
      modal_RR.classList.remove('abrir27');
    }
  });
});