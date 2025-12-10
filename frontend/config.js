const isDevelopment =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.includes('github.dev');

const API_BASE_URL = isDevelopment
    ? 'https://8000-i8gwyhdy819vojw36e6bb-23f0e415.manus-asia.computer' // URL pública do backend no sandbox
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
