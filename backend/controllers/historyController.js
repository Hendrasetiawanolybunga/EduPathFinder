/**
 * historyController.js - Controller untuk menangani riwayat rekomendasi
 */

const historyService = require('../services/historyService');

/**
 * Controller untuk mendapatkan riwayat rekomendasi
 */
const getHistory = async (request, h) => {
    try {
        // Ambil parameter limit dan offset dari query string
        const limit = request.query.limit ? parseInt(request.query.limit) : 10;
        const offset = request.query.offset ? parseInt(request.query.offset) : 0;
        
        // Dapatkan riwayat rekomendasi dari service
        const history = await historyService.getRecommendationHistory(limit, offset);
        
        return h.response({
            status: 'success',
            data: history
        }).code(200);
        
    } catch (error) {
        console.error('Error dalam getHistory:', error);
        
        return h.response({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil riwayat rekomendasi',
            error: error.message
        }).code(500);
    }
};

/**
 * Controller untuk mendapatkan detail riwayat rekomendasi berdasarkan ID
 */
const getHistoryById = async (request, h) => {
    try {
        const id = request.params.id;
        
        // Dapatkan detail riwayat rekomendasi dari service
        const historyDetail = await historyService.getRecommendationById(id);
        
        if (!historyDetail) {
            return h.response({
                status: 'error',
                message: 'Riwayat rekomendasi tidak ditemukan'
            }).code(404);
        }
        
        return h.response({
            status: 'success',
            data: historyDetail
        }).code(200);
        
    } catch (error) {
        console.error('Error dalam getHistoryById:', error);
        
        return h.response({
            status: 'error',
            message: 'Terjadi kesalahan saat mengambil detail riwayat rekomendasi',
            error: error.message
        }).code(500);
    }
};

module.exports = {
    getHistory,
    getHistoryById
};