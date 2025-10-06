document.addEventListener('DOMContentLoaded', () => {
  console.log('modal2.js carregado');

  const modal2 = document.getElementById('janela-modal2');
  const fechar2 = document.getElementById('fechar2');

  // expõe função global
  window.abrirModal = function() {
    console.log('abrirModal2 chamada');
    modal2.classList.add('abrir2');
  }

  // fecha clicando no botão ou fora do modal
  modal2.addEventListener('click', (e) => {
    if (e.target.id === 'fechar2' || e.target.id === 'janela-modal2') {
      modal2.classList.remove('abrir2');
    }
  });
});