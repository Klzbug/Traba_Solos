document.addEventListener('DOMContentLoaded', () => {
  console.log('modal.js carregado');

  const modal1 = document.getElementById('janela-modal');
  const fechar = document.getElementById('fechar');

  // expõe função global
  window.abrirModal = function() {
    console.log('abrirModal1 chamada');
    modal1.classList.add('abrir');
  }

  // fecha clicando no botão ou fora do modal
  modal1.addEventListener('click', (e) => {
    if (e.target.id === 'fechar' || e.target.id === 'janela-modal') {
      modal1.classList.remove('abrir');
    }
  });
});