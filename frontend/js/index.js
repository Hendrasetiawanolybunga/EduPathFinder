// Import CSS utama
import '../css/style.css';

// Import modul-modul
import { initForm } from './formHandler';
import { registerServiceWorker } from './pwa';
import Router from './router';

document.addEventListener('DOMContentLoaded', () => {
    console.log('EudPathFinder Frontend Siap!');
    
    // Inisialisasi router
    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
        const mainDiv = document.createElement('div');
        mainDiv.id = 'main-content';
        document.body.appendChild(mainDiv);
    }
    
    new Router(document.getElementById('main-content'));
    
    // Inisialisasi fungsionalitas form
    initForm();
    
    // Daftarkan Service Worker untuk PWA
    registerServiceWorker();

    // Toggle menu mobile
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Tutup menu saat mengklik di luar menu
        document.addEventListener('click', (event) => {
            if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});