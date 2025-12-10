document.addEventListener('DOMContentLoaded', () => {
    console.log('Modal_RN.js carregado');
    const modal_RN = document.getElementById('janela-RN');
    const fechar12 = document.getElementById('fechar12');
    window.abrirModalRN = function() {
        console.log('abrirModalRN chamada');
        modal_RN.classList.add('abrir12');
    }
    modal_RN.addEventListener('click', (e12) => {
        if (e12.target.id === 'fechar12' || e12.target.id === 'janela-RN') {
            modal_RN.classList.remove('abrir12');
        }
    });
});