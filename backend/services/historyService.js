/**
 * historyService.js - Service untuk menangani riwayat rekomendasi
 */

const db = require('../config/database');

/**
 * Mendapatkan riwayat rekomendasi dengan pagination
 * @param {Number} limit - Jumlah maksimum data yang diambil
 * @param {Number} offset - Offset untuk pagination
 * @returns {Array} - Daftar riwayat rekomendasi
 */
const getRecommendationHistory = (limit = 10, offset = 0) => {
    try {
        const stmt = db.prepare(`
            SELECT 
                r.id, 
                u.nama, 
                u.usia, 
                u.pendidikan_terakhir,
                r.jurusan_rekomendasi, 
                r.karir_rekomendasi, 
                r.skor_probabilitas,
                r.created_at
            FROM recommendations r
            JOIN users u ON r.user_id = u.id
            ORDER BY r.created_at DESC
            LIMIT ? OFFSET ?
        `);
        
        return stmt.all(limit, offset);
    } catch (error) {
        console.error('Error dalam getRecommendationHistory:', error);
        throw new Error(`Gagal mengambil riwayat rekomendasi: ${error.message}`);
    }
};

/**
 * Mendapatkan detail riwayat rekomendasi berdasarkan ID
 * @param {Number} id - ID rekomendasi
 * @returns {Object} - Detail rekomendasi
 */
const getRecommendationById = (id) => {
    try {
        // Ambil data rekomendasi
        const recommendationStmt = db.prepare(`
            SELECT * FROM recommendations WHERE id = ?
        `);
        
        const recommendation = recommendationStmt.get(id);
        
        if (!recommendation) {
            return null;
        }
        
        // Ambil data pengguna
        const userStmt = db.prepare(`
            SELECT * FROM users WHERE id = ?
        `);
        
        const user = userStmt.get(recommendation.user_id);
        
        // Ambil data input pengguna
        const inputStmt = db.prepare(`
            SELECT * FROM user_inputs WHERE user_id = ?
        `);
        
        const userInput = inputStmt.get(recommendation.user_id);
        
        // Gabungkan semua data
        return {
            recommendation,
            user,
            userInput
        };
    } catch (error) {
        console.error('Error dalam getRecommendationById:', error);
        throw new Error(`Gagal mengambil detail rekomendasi: ${error.message}`);
    }
};

module.exports = {
    getRecommendationHistory,
    getRecommendationById
};