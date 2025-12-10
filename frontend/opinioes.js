// =========================
// ENVIAR OPINIÃO
// =========================
async function enviarOpiniao(event) {
    event.preventDefault();

    const nome  = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const texto = document.getElementById("texto").value.trim();

    if (!nome || !email || !texto) {
        alert("❌ Por favor, preencha todos os campos!");
        return;
    }

    let pessoaId;

    // ---------- Criar ou buscar pessoa ----------
    try {
        console.log(`👤 Registrando pessoa: ${nome} (${email})`);
        
        const pessoaResponse = await fetch(`${CONFIG.API_BASE_URL}/pessoas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email }),
        });

        if (!pessoaResponse.ok) {
            const errText = await pessoaResponse.text();
            throw new Error(`Erro ${pessoaResponse.status}: ${errText}`);
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ texto }),
        });

        if (!opiniaoResponse.ok) {
            const errText = await opiniaoResponse.text();
            throw new Error(`Erro ${opiniaoResponse.status}: ${errText}`);
        }

        const opiniao = await opiniaoResponse.json();

        console.log(`✅ Opinião enviada com sucesso! ID: ${opiniao.id}`);

        alert("✅ Opinião enviada com sucesso!");
        document.getElementById("opiniao-form").reset();

        carregarOpinioes(); // Atualiza a lista

    } catch (error) {
        console.error("❌ Erro ao enviar a opinião:", error);
        alert(`❌ Erro ao enviar a opinião: ${error.message}`);
    }
}