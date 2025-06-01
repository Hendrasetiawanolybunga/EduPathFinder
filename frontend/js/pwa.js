/**
 * pwa.js - Modul untuk menangani fungsionalitas Progressive Web App (PWA)
 */

/**
 * Mendaftarkan Service Worker
 */
export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js') // Path ini akan dihasilkan oleh WorkboxWebpackPlugin
                .then(registration => {
                    console.log('Service Worker berhasil didaftarkan:', registration);
                })
                .catch(error => {
                    console.error('Pendaftaran Service Worker gagal:', error);
                });
        });
    }
}

/**
 * Menangani event 'beforeinstallprompt' untuk custom install button (jika diperlukan)
 */
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Mencegah browser menampilkan prompt instalasi default
    e.preventDefault();
    // Simpan event agar bisa dipicu nanti
    deferredPrompt = e;
    // Tampilkan UI kustom untuk instalasi (misalnya, tombol 'Install Aplikasi')
    showInstallPromotion();
});

/**
 * Menampilkan UI promosi instalasi (contoh sederhana)
 */
function showInstallPromotion() {
    // Anda bisa membuat tombol atau banner di HTML dan menampilkannya di sini
    const installButton = document.getElementById('installAppButton'); // Asumsi ada tombol dengan ID ini
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', handleInstallPrompt);
    }
    console.log('`beforeinstallprompt` event tertangkap. Siap untuk prompt instalasi kustom.');
}

/**
 * Menangani klik pada tombol instalasi kustom
 */
async function handleInstallPrompt() {
    const installButton = document.getElementById('installAppButton');
    if (installButton) {
        installButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
    }
    if (deferredPrompt) {
        // Tampilkan prompt instalasi
        deferredPrompt.prompt();
        // Tunggu pengguna merespons prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Respon pengguna terhadap prompt instalasi: ${outcome}`);
        // Reset deferredPrompt karena hanya bisa digunakan sekali
        deferredPrompt = null;
    }
}

/**
 * Memeriksa apakah aplikasi sudah diinstal (standalone mode)
 */
function isAppInstalled() {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        console.log('Aplikasi berjalan dalam mode standalone (terinstal).');
        return true;
    }
    console.log('Aplikasi berjalan di browser.');
    return false;
}

// Panggil fungsi ini saat aplikasi dimuat untuk mengetahui status instalasi
isAppInstalled();