document.addEventListener("DOMContentLoaded", () => {
    console.log("📄 Página de opiniões carregada");
    carregarOpinioes();
    document.getElementById("opiniao-form").addEventListener("submit", enviarOpiniao);
});

async function carregarOpinioes() {
    const container = document.getElementById("opinioes-container");
    container.innerHTML = "<p>Carregando opiniões...</p>";

    try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/opinioes`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const opinioes = await response.json();

        if (!opinioes.length) {
            container.innerHTML = "<p>Nenhuma opinião cadastrada ainda.</p>";
            return;
        }

        container.innerHTML = opinioes
            .map(op => `
                <div class="opiniao-card">
                    <p><strong>${op.pessoa.nome}</strong> — ${op.pessoa.email}</p>
                    <p>${op.texto}</p>
                    <span class="data">${new Date(op.data).toLocaleString()}</span>
                </div>
            `).join("");

    } catch (err) {
        console.error("❌ Erro ao carregar opiniões:", err);
        container.innerHTML = "<p>❌ Erro ao carregar opiniões.</p>";
    }
}

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

    try {
        const pessoaResp = await fetch(`${CONFIG.API_BASE_URL}/pessoas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email }),
        });
        const pessoa = await pessoaResp.json();
        pessoaId = pessoa.id;
    } catch (err) {
        console.error("❌ Erro ao registrar pessoa:", err);
        alert("Erro ao registrar pessoa");
        return;
    }

    try {
        const opiniaoResp = await fetch(`${CONFIG.API_BASE_URL}/opinioes/${pessoaId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texto }),
        });
        await opiniaoResp.json();

        alert("✅ Opinião enviada com sucesso!");
        document.getElementById("opiniao-form").reset();
        carregarOpinioes();
    } catch (err) {
        console.error("❌ Erro ao enviar opinião:", err);
        alert("Erro ao enviar opinião");
    }
}
