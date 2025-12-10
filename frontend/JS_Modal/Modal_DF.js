document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_DF.js carregado');
  const modal_DF = document.getElementById('janela-DF');
  const fechar14 = document.getElementById('fechar14');
  window.abrirModalDF = function() {
    console.log('abrirModalDF chamada');
    modal_DF.classList.add('abrir14');
  }
  modal_DF.addEventListener('click', (e14) => {
    if (e14.target.id === 'fechar14' || e14.target.id === 'janela-DF') {
      modal_DF.classList.remove('abrir14');
    }
  });
});