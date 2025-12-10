from flask import Flask, request, jsonify

app = Flask(__name__)

# Definição das respostas corretas do quiz
# A chave é o nome do campo do formulário (q1, q2, q3) e o valor é a resposta correta (C, D, B)
RESPOSTAS_CORRETAS = {
    "q1": "C", # Húmus
    "q2": "D", # Horizonte A
    "q3": "B"  # Proporção relativa de areia, silte e argila
}

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    """
    Recebe as respostas do quiz via POST, calcula a pontuação e retorna o resultado.
    """
    try:
        # Pega os dados do formulário
        respostas_usuario = request.form

        pontuacao = 0
        resultados_por_pergunta = {}

        for pergunta, resposta_correta in RESPOSTAS_CORRETAS.items():
            resposta_usuario = respostas_usuario.get(pergunta)
            
            # Verifica se a resposta do usuário está correta
            if resposta_usuario and resposta_usuario.upper() == resposta_correta:
                pontuacao += 1
                resultados_por_pergunta[pergunta] = "correta"
            else:
                resultados_por_pergunta[pergunta] = "incorreta"

        total_perguntas = len(RESPOSTAS_CORRETAS)
        
        # Retorna o resultado em formato JSON
        return jsonify({
            "sucesso": True,
            "pontuacao": pontuacao,
            "total_perguntas": total_perguntas,
            "resultados": resultados_por_pergunta,
            "mensagem": f"Você acertou {pontuacao} de {total_perguntas} perguntas!"
        })

    except Exception as e:
        # Em caso de erro, retorna uma mensagem de erro
        return jsonify({
            "sucesso": False,
            "mensagem": f"Ocorreu um erro ao processar o quiz: {str(e)}"
        }), 500

if __name__ == '__main__':
    # O host '0.0.0.0' permite que o servidor seja acessível externamente no sandbox
    # A porta 5000 é a porta padrão do Flask
    app.run(host='0.0.0.0', port=5000)
