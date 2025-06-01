/**
 * database.js - Konfigurasi dan koneksi database SQLite
 */

const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Ambil path database dari variabel lingkungan atau gunakan default
const dbPath = process.env.DB_PATH || path.join(__dirname, '../data/eudpathfinder.db');

// Pastikan direktori data ada
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Inisialisasi koneksi database
let db;

try {
    db = new Database(dbPath);
    console.log('Koneksi database berhasil dibuat');
    
    // Aktifkan foreign keys
    db.pragma('foreign_keys = ON');
    
    // Buat tabel jika belum ada
    initTables();
} catch (error) {
    console.error('Error saat membuat koneksi database:', error.message);
    process.exit(1);
}

/**
 * Inisialisasi tabel-tabel yang diperlukan
 */
function initTables() {
    // Tabel untuk menyimpan data pengguna dan input mereka
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nama TEXT,
            usia INTEGER NOT NULL,
            pendidikan_terakhir TEXT NOT NULL,
            jurusan_sebelumnya TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE IF NOT EXISTS user_inputs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            minat_utama TEXT NOT NULL,
            hobi TEXT NOT NULL,
            keahlian TEXT NOT NULL,
            kegiatan_sehari TEXT NOT NULL,
            tujuan_jangka_pendek TEXT NOT NULL,
            preferensi_tempat_kerja TEXT NOT NULL,
            preferensi_kerja_tim TEXT NOT NULL,
            gaya_belajar TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        
        CREATE TABLE IF NOT EXISTS recommendations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            jurusan_rekomendasi TEXT NOT NULL,
            karir_rekomendasi TEXT NOT NULL,
            skor_probabilitas REAL NOT NULL,
            cluster_id INTEGER NOT NULL,
            alasan TEXT NOT NULL,
            saran_skill TEXT NOT NULL,
            kebutuhan_pasar TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `);
    
    console.log('Tabel database berhasil diinisialisasi');
}

module.exports = db;