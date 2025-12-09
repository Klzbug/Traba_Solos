/**
 * Servidor Proxy para Desenvolvimento
 * Serve o frontend e redireciona requisições da API para o backend FastAPI
 */

const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

console.log('🚀 Iniciando servidor proxy...');
console.log(`📁 Frontend: ${path.join(__dirname, 'frontend')}`);
console.log(`🔗 Backend: ${BACKEND_URL}`);
console.log(`🌐 Servidor rodando em: http://localhost:${PORT}`);

// Middleware para servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Middleware para redirecionar requisições de API para o backend
app.use('/api', createProxyMiddleware({
    target: BACKEND_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // Remove /api do caminho
    },
    onError: (err, req, res) => {
        console.error('❌ Erro ao conectar com o backend:', err.message);
        res.status(503).json({
            error: 'Serviço indisponível',
            message: 'Não foi possível conectar com o servidor backend',
            backend: BACKEND_URL
        });
    },
    logLevel: 'warn',
}));

// Rota para servir Index.html como página padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'Index.html'));
});

// Rota para servir opinioes.html
app.get('/opinioes', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'opinioes.html'));
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor proxy está funcionando' });
});

// Tratamento de erros 404
app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada', path: req.path });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Servidor proxy iniciado com sucesso!`);
    console.log(`📍 Acesse: http://localhost:${PORT}`);
    console.log(`📍 API disponível em: http://localhost:${PORT}/api`);
});
