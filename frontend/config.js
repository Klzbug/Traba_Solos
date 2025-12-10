const isDevelopment =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('github.dev');
const API_BASE_URL = isDevelopment
    ? '/api' 
    : window.location.origin;
const CONFIG = {
    API_BASE_URL,
    isDevelopment,
    timeout: 5000,
    retries: 3,
};
if (CONFIG.isDevelopment) {
    console.log('🔧 Configuração do Frontend:', CONFIG);
}