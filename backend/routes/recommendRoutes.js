/**
 * recommendRoutes.js - Definisi rute untuk rekomendasi
 */

const recommendController = require('../controllers/recommendController');

module.exports = [
    {
        method: 'POST',
        path: '/api/recommend',
        handler: recommendController.getRecommendation,
        options: {
            description: 'Mendapatkan rekomendasi berdasarkan input pengguna',
            tags: ['api', 'recommend']
        }
    }
];