document.addEventListener('DOMContentLoaded', () => {
  console.log('Modal_BA.js carregado');

  const modal_BA = document.getElementById('janela-BA');
  const fechar8 = document.getElementById('fechar8');

  window.abrirModalBA = function() {
    console.log('abrirModalBA chamada');
    modal_BA.classList.add('abrir8');
  }

  modal_BA.addEventListener('click', (e8) => {
    if (e8.target.id === 'fechar8' || e8.target.id === 'janela-BA') {
      modal_BA.classList.remove('abrir8');
    }
  });
});