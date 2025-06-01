/**
 * recommendService.js - Service untuk memproses rekomendasi
 */

const db = require('../config/database');
const { runMLModel } = require('../config/mlConfig');

/**
 * Memproses input pengguna untuk mendapatkan rekomendasi
 * @param {Object} userData - Data input pengguna
 * @returns {Promise<Object>} - Hasil rekomendasi
 */
const processRecommendation = async (userData) => {
    try {
        // Simpan data pengguna ke database
        const userId = saveUserData(userData);
        
        // Jalankan model ML untuk mendapatkan rekomendasi
        const mlResult = await runMLModel(userData);
        
        // Simpan hasil rekomendasi ke database
        saveRecommendation(userId, mlResult);
        
        return {
            userId,
            ...mlResult
        };
    } catch (error) {
        console.error('Error dalam processRecommendation:', error);
        throw error;
    }
};

/**
 * Menyimpan data pengguna ke database
 * @param {Object} userData - Data pengguna yang akan disimpan
 * @returns {Number} - ID pengguna yang baru dibuat
 */
const saveUserData = (userData) => {
    try {
        // Simpan data dasar pengguna
        const userStmt = db.prepare(`
            INSERT INTO users (nama, usia, pendidikan_terakhir, jurusan_sebelumnya)
            VALUES (?, ?, ?, ?)
        `);
        
        const userResult = userStmt.run(
            userData.nama || null,
            userData.usia,
            userData.pendidikan_terakhir,
            userData.jurusan_sebelumnya || null
        );
        
        const userId = userResult.lastInsertRowid;
        
        // Simpan input pengguna
        const inputStmt = db.prepare(`
            INSERT INTO user_inputs (
                user_id, minat_utama, hobi, keahlian, kegiatan_sehari,
                tujuan_jangka_pendek, preferensi_tempat_kerja, preferensi_kerja_tim, gaya_belajar
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        inputStmt.run(
            userId,
            userData.minat_utama,
            userData.hobi,
            userData.keahlian,
            userData.kegiatan_sehari,
            userData.tujuan_jangka_pendek,
            userData.preferensi_tempat_kerja,
            userData.preferensi_kerja_tim,
            userData.gaya_belajar
        );
        
        return userId;
    } catch (error) {
        console.error('Error dalam saveUserData:', error);
        throw new Error(`Gagal menyimpan data pengguna: ${error.message}`);
    }
};

/**
 * Menyimpan hasil rekomendasi ke database
 * @param {Number} userId - ID pengguna
 * @param {Object} recommendation - Hasil rekomendasi dari model ML
 */
const saveRecommendation = (userId, recommendation) => {
    try {
        const stmt = db.prepare(`
            INSERT INTO recommendations (
                user_id, jurusan_rekomendasi, karir_rekomendasi, skor_probabilitas,
                cluster_id, alasan, saran_skill, kebutuhan_pasar
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);
        
        stmt.run(
            userId,
            recommendation.jurusan_rekomendasi,
            recommendation.karir_rekomendasi,
            recommendation.skor_probabilitas,
            recommendation.cluster_id,
            recommendation.alasan,
            recommendation.saran_skill,
            recommendation.kebutuhan_pasar
        );
    } catch (error) {
        console.error('Error dalam saveRecommendation:', error);
        throw new Error(`Gagal menyimpan rekomendasi: ${error.message}`);
    }
};

module.exports = {
    processRecommendation
};