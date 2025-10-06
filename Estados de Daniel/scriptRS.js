function abrirModalRS(){
  const modal = document.getElementById('janela-RS');
  modal.classList.add('abrir');

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'janela-RS' || e.target.id == 'fechar-RS') {
      modal.classList.remove('abrir');
    }
  });
}
