/**
 * Script para gerenciar opiniões
 * Interage com a API para criar e listar opiniões
 */

// =========================
// INICIALIZAÇÃO DA PÁGINA
// =========================
document.addEventListener("DOMContentLoaded", () => {
    console.log('📄 Página de opiniões carregada');
    carregarOpinioes();
    document
        .getElementById("opiniao-form")
        .addEventListener("submit", enviarOpiniao);
});



// =========================
// CARREGAR OPINIÕES
// =========================
async function carregarOpinioes() {
    const container = document.getElementById("opinioes-container");
    container.innerHTML = "⏳ Carregando opiniões...";

    try {
        console.log(`🔄 Buscando opiniões de ${CONFIG.API_BASE_URL}/opinioes/`);
        
        const response = await fetch(`${CONFIG.API_BASE_URL}/opinioes/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const opinioes = await response.json();
        container.innerHTML = "";

        if (!opinioes || opinioes.length === 0) {
            container.innerHTML = "<p>📭 Nenhuma opinião encontrada. Seja o primeiro a comentar!</p>";
            return;
        }

        console.log(`✅ ${opinioes.length} opinião(ões) carregada(s)`);

        opinioes.forEach(opiniao => {
            const card = document.createElement("div");
            card.className = "opiniao-card";

            card.innerHTML = `
                <h4>💬 Opinião de ${escapeHtml(opiniao.autor.nome)}</h4>
                <p class="email">📧 ${escapeHtml(opiniao.autor.email)}</p>
                <p>${escapeHtml(opiniao.texto)}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("❌ Erro ao carregar opiniões:", error);

        container.innerHTML = `
            <div style="padding: 20px; background-color: #fee; border: 1px solid #fcc; border-radius: 5px; color: #c33;">
                <strong>⚠️ Erro ao conectar com a API</strong><br>
                <p>Não foi possível carregar as opiniões.</p>
                <p><strong>URL esperada:</strong> <code>${CONFIG.API_BASE_URL}/opinioes/</code></p>
                <p><strong>Erro:</strong> ${escapeHtml(error.message)}</p>
                <p style="font-size: 0.9em; margin-top: 10px;">
                    Certifique-se de que o servidor FastAPI está rodando em <code>http://localhost:8000</code>
                </p>
                <button onclick="carregarOpinioes()" style="margin-top: 10px; padding: 8px 16px; background-color: #0066cc; color: white; border: none; border-radius: 3px; cursor: pointer;">
                    🔄 Tentar Novamente
                </button>
            </div>
        `;
    }
}



// =========================
// ENVIAR OPINIÃO
// =========================
async function enviarOpiniao(event) {
    event.preventDefault();

    const nome  = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("texto").value.trim();

    // Validação básica
    if (!nome || !email || !texto) {
        alert("❌ Por favor, preencha todos os campos!");
        return;
    }

    let pessoaId;

    try {
        // ---------- Criar ou buscar pessoa ----------
        console.log(`👤 Registrando pessoa: ${nome} (${email})`);
        
        const pessoaResponse = await fetch(`${CONFIG.API_BASE_URL}/pessoas/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email }),
        });

        if (!pessoaResponse.ok) {
            throw new Error(`HTTP ${pessoaResponse.status}: ${pessoaResponse.statusText}`);
        }

        const pessoa = await pessoaResponse.json();
        pessoaId = pessoa.id;
        console.log(`✅ Pessoa registrada/encontrada com ID: ${pessoaId}`);

    } catch (error) {
        console.error("❌ Erro ao registrar a pessoa:", error);
        alert(`❌ Erro ao registrar a pessoa: ${error.message}`);
        return;
    }

    // ---------- Enviar opinião ----------
    try {
        console.log(`💬 Enviando opinião para pessoa ID: ${pessoaId}`);
        
        const opiniaoResponse = await fetch(`${CONFIG.API_BASE_URL}/opinioes/${pessoaId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ texto }),
        });

        if (!opiniaoResponse.ok) {
            throw new Error(`HTTP ${opiniaoResponse.status}: ${opiniaoResponse.statusText}`);
        }

        const opiniao = await opiniaoResponse.json();
        console.log(`✅ Opinião enviada com sucesso! ID: ${opiniao.id}`);

        alert("✅ Opinião enviada com sucesso!");
        document.getElementById("opiniao-form").reset();

        // Atualizar lista de opiniões
        carregarOpinioes();

    } catch (error) {
        console.error("❌ Erro ao enviar a opinião:", error);
        alert(`❌ Erro ao enviar a opinião: ${error.message}`);
    }
}



// =========================
// FUNÇÕES AUXILIARES
// =========================

/**
 * Escapa caracteres HTML para evitar XSS
 * @param {string} text - Texto a ser escapado
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}
