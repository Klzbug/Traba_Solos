document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_AC.js carregado');
  const modal_AC = document.getElementById('janela-AC');
  const fechar6 = document.getElementById('fechar6');
  window.abrirModalAC = function() {
    console.log('abrirModalAC chamada');
    modal_AC.classList.add('abrir6');
  }
  modal_AC.addEventListener('click', (e6) => {
    if (e6.target.id === 'fechar6' || e6.target.id === 'janela-AC') {
      modal_AC.classList.remove('abrir6');
    }
  });
});