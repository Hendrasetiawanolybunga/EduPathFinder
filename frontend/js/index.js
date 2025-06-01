/**
 * index.js - File JavaScript utama untuk frontend EudPathFinder
 */

// Import CSS utama
import '../css/style.css';

// Import modul-modul lain jika ada
import { initForm } from './formHandler';
import { registerServiceWorker } from './pwa';

document.addEventListener('DOMContentLoaded', () => {
    console.log('EudPathFinder Frontend Siap!');
    
    // Inisialisasi fungsionalitas form
    initForm();
    
    // Daftarkan Service Worker untuk PWA
    registerServiceWorker();
    
    // Contoh interaksi sederhana (bisa dihapus atau dimodifikasi)
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', () => {
            alert('Selamat datang di EudPathFinder!');
        });
    }
});