/**
 * Configuração centralizada do frontend
 * Define a URL base da API e outras configurações
 */

// Detectar o ambiente (desenvolvimento ou produção)
const isDevelopment = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname.includes('localhost');

// URL da API
// Em desenvolvimento: usa o proxy em /api
// Em produção: usa a mesma origem
const API_BASE_URL = isDevelopment ? 'http://localhost:3000/api' : window.location.origin;

// Configurações gerais
const CONFIG = {
    API_BASE_URL: API_BASE_URL,
    isDevelopment: isDevelopment,
    timeout: 5000, // Timeout em ms
    retries: 3,    // Número de tentativas
};

// Log de configuração (apenas em desenvolvimento)
if (CONFIG.isDevelopment) {
    console.log('🔧 Configuração do Frontend:', CONFIG);
    console.log('🌐 Origem:', window.location.origin);
    console.log('📍 API Base URL:', API_BASE_URL);
}
