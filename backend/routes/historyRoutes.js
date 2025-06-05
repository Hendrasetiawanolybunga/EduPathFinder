/**
 * historyRoutes.js - Definisi rute untuk riwayat rekomendasi
 */

const historyController = require('../controllers/historyController');

module.exports = [
    {
        method: 'GET',
        path: '/api/history',
        handler: historyController.getHistory,
        options: {
            description: 'Mendapatkan daftar riwayat rekomendasi',
            tags: ['api', 'history']
        }
    },
    {
        method: 'GET',
        path: '/api/history/{id}',
        handler: historyController.getHistoryById,
        options: {
            description: 'Mendapatkan detail riwayat rekomendasi berdasarkan ID',
            tags: ['api', 'history']
        }
    }
];