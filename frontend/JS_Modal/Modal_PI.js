document.addEventListener('DOMContentLoaded', () => {
    console.log('Modal_PI.js carregado');
    const modal_PI = document.getElementById('janela-PI');
    const fechar11 = document.getElementById('fechar11');
    window.abrirModalPI = function() {
        console.log('abrirModalPI chamada');
        modal_PI.classList.add('abrir11');
    }
    modal_PI.addEventListener('click', (e11) => {
        if (e11.target.id === 'fechar11' || e11.target.id === 'janela-PI') {
            modal_PI.classList.remove('abrir11');
        }
    });
});