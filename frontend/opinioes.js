// Detecta se está em ambiente de desenvolvimento
const isDevelopment =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('localhost');

// URL correta do backend (FastAPI)
const API_BASE_URL = isDevelopment
    ? 'http://localhost:8000'
    : window.location.origin;

// Configuração global
const CONFIG = {
    API_BASE_URL,
    isDevelopment
};

// Log para confirmar que está carregando certo
console.log("🌍 API base URL:", CONFIG.API_BASE_URL);
console.log("🔧 Ambiente de desenvolvimento:", isDevelopment);

// Carregar opiniões ao abrir a página
document.addEventListener("DOMContentLoaded", carregarOpinioes);

// Buscar e exibir opiniões
async function carregarOpinioes() {
    console.log("🔄 Buscando opiniões...");

    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/opinioes/`);

        if (!response.ok) {
            throw new Error(`Erro na resposta da API: ${response.status}`);
        }

        const opnioes = await response.json();
        console.log("📥 Opiniões recebidas:", opnioes);

        const lista = document.querySelector("#lista-opinioes");
        lista.innerHTML = "";

        opnioes.forEach(op => {
            const item = document.createElement("li");
            item.textContent = `${op.nome}: ${op.mensagem}`;
            lista.appendChild(item);
        });

    } catch (err) {
        console.error("❌ Erro ao carregar opiniões:", err);
        alert("Erro ao carregar opiniões. Verifique o console.");
    }
}

// Enviar nova opinião
async function enviarOpiniao() {
    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if (!nome || !mensagem) {
        alert("Preencha nome e opinião!");
        return;
    }

    const opiniao = { nome, mensagem };

    try {
        const resposta = await fetch(`${CONFIG.API_BASE_URL}/opinioes/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(opiniao)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar opinião.");
        }

        console.log("📤 Opinião enviada com sucesso!");

        // Recarregar lista
        carregarOpinioes();

        document.querySelector("#nome").value = "";
        document.querySelector("#mensagem").value = "";

    } catch (error) {
        console.error("❌ Erro ao enviar opinião:", error);
        alert("Erro ao enviar opinião. Veja o console.");
    }
}

// Deixar a função disponível globalmente no botão
window.enviarOpiniao = enviarOpiniao;