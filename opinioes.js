// =========================
// CONFIGURAÇÃO DA API
// =========================
const API_BASE_URL = "http://localhost:8000"; // Ajuste se sua API estiver online



// =========================
// INICIALIZAÇÃO DA PÁGINA
// =========================
document.addEventListener("DOMContentLoaded", () => {
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
    container.innerHTML = "Carregando opiniões...";

    try {
        const response = await fetch(`${API_BASE_URL}/opinioes/`);

        if (!response.ok) {
            throw new Error(`Erro ao carregar opiniões: ${response.statusText}`);
        }

        const opinioes = await response.json();
        container.innerHTML = "";

        if (opinioes.length === 0) {
            container.innerHTML = "<p>Nenhuma opinião encontrada.</p>";
            return;
        }

        opinioes.forEach(opiniao => {
            const card = document.createElement("div");
            card.className = "opiniao-card";

            card.innerHTML = `
                <h4>Opinião de ${opiniao.autor.nome} (${opiniao.autor.email})</h4>
                <p>${opiniao.texto}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar opiniões:", error);

        container.innerHTML = `
            <p style="color: red;">
                Erro ao conectar com a API. 
                Certifique-se de que o servidor FastAPI está rodando em ${API_BASE_URL}.
            </p>
        `;
    }
}



// =========================
// ENVIAR OPINIÃO
// =========================
async function enviarOpiniao(event) {
    event.preventDefault();

    const nome  = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const texto = document.getElementById("texto").value;

    let pessoaId;

    // ---------- Criar pessoa ----------
    try {
        const pessoaResponse = await fetch(`${API_BASE_URL}/pessoas/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, email }),
        });

        if (!pessoaResponse.ok) {
            throw new Error(`Erro ao criar pessoa: ${pessoaResponse.statusText}`);
        }

        const pessoa = await pessoaResponse.json();
        pessoaId = pessoa.id;

    } catch (error) {
        alert("Erro ao registrar a pessoa. Verifique o console.");
        console.error("Erro ao registrar a pessoa:", error);
        return;
    }

    // ---------- Enviar opinião ----------
    try {
        const opiniaoResponse = await fetch(`${API_BASE_URL}/opinioes/${pessoaId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ texto }),
        });

        if (!opiniaoResponse.ok) {
            throw new Error(`Erro ao enviar opinião: ${opiniaoResponse.statusText}`);
        }

        alert("Opinião enviada com sucesso!");
        document.getElementById("opiniao-form").reset();

        carregarOpinioes(); // Atualiza lista

    } catch (error) {
        alert("Erro ao enviar a opinião. Verifique o console.");
        console.error("Erro ao enviar a opinião:", error);
    }
}
