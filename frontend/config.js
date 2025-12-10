/**
 * Configuração centralizada do frontend
 * Define a URL base da API e outras configurações
 */

const isDevelopment =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('github.dev');

// NÃO coloque /opinioes aqui!
const API_BASE_URL = isDevelopment
    ? 'https://redesigned-parakeet-wr9jww7pgj6g2qxv-5506.app.github.dev'
    : window.location.origin;

const CONFIG = {
    API_BASE_URL,
    isDevelopment,
    timeout: 5000,
    retries: 3,
};

if (CONFIG.isDevelopment) {
    console.log('🔧 Configuração do Frontend:', CONFIG);
    console.log('🌐 Origem:', window.location.origin);
    console.log('📍 API Base URL:', API_BASE_URL);
}