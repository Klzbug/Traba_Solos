/**
 * Script para gerenciar opiniões do sistema
 * - Carrega opiniões da API
 * - Envia nova opinião
 */

// ==========================================
// INICIALIZAÇÃO DA PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    console.log("📄 Página de opiniões carregada");
    carregarOpinioes();

    const form = document.getElementById("opiniao-form");
    form.addEventListener("submit", enviarOpiniao);
});

// ==========================================
// CARREGAR OPINIÕES
// ==========================================
async function carregarOpinioes() {
    const container = document.getElementById("opinioes-container");

    container.innerHTML = "<p>Carregando opiniões...</p>";

    try {
        console.log(`🔄 Buscando opiniões em: ${CONFIG.API_BASE_URL}/opinioes`);

        const response = await fetch(`${CONFIG.API_BASE_URL}/opinioes`);

        if (!response.ok) {
            throw new Error(`Falha no carregamento (HTTP ${response.status})`);
        }

        const opinioes = await response.json();

        if (opinioes.length === 0) {
            container.innerHTML = "<p>Nenhuma opinião cadastrada ainda.</p>";
            return;
        }

        // Renderizar opiniões
        container.innerHTML = opinioes
            .map(op => `
                <div class="opiniao-card">
                    <p><strong>${op.pessoa?.nome || "Desconhecido"}</strong></p>
                    <p>${op.texto}</p>
                    <span class="data">${new Date(op.data).toLocaleString()}</span>
                </div>
            `)
            .join("");

        console.log("✅ Opiniões carregadas:", opinioes);

    } catch (error) {
        console.error("❌ Erro ao carregar opiniões:", error);
        container.innerHTML = "<p>❌ Erro ao carregar opiniões.</p>";
    }
}

// ==========================================
// ENVIAR OPINIÃO
// ==========================================
async function enviarOpiniao(event) {
    event.preventDefault();

    const nome  = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("texto").value.trim();

    if (!nome || !email || !texto) {
        alert("❌ Preencha todos os campos.");
        return;
    }

    let pessoaId = null;

    // 1 — Criar ou buscar pessoa
    try {
        console.log(`👤 Registrando pessoa: ${nome} (${email})`);

        const pessoaResponse = await fetch(`${CONFIG.API_BASE_URL}/pessoas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email }),
        });

        if (!pessoaResponse.ok) {
            const textoErro = await pessoaResponse.text();
            throw new Error(`Erro ao registrar pessoa: ${textoErro}`);
        }

        const pessoa = await pessoaResponse.json();
        pessoaId = pessoa.id;

        console.log(`✅ Pessoa registrada com ID: ${pessoaId}`);

    } catch (error) {
        console.error("❌ Erro ao registrar pessoa:", error);
        alert(error.message);
        return;
    }

    // 2 — Enviar opinião
    try {
        console.log(`💬 Enviando opinião da pessoa ID: ${pessoaId}`);

        const opiniaoResponse = await fetch(`${CONFIG.API_BASE_URL}/opinioes/${pessoaId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texto }),
        });

        if (!opiniaoResponse.ok) {
            const textoErro = await opiniaoResponse.text();
            throw new Error(`Erro ao enviar opinião: ${textoErro}`);
        }

        const opiniao = await opiniaoResponse.json();

        console.log(`✅ Opinião enviada com ID: ${opiniao.id}`);

        alert("✅ Opinião enviada com sucesso!");
        document.getElementById("opiniao-form").reset();

        carregarOpinioes(); // Atualiza lista

    } catch (error) {
        console.error("❌ Erro ao enviar opinião:", error);
        alert(error.message);
    }
}