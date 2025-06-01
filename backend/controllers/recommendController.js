/**
 * recommendController.js - Controller untuk menangani rekomendasi
 */

const Joi = require('joi');
const recommendService = require('../services/recommendService');

// Validasi schema untuk input pengguna
const userInputSchema = Joi.object({
    nama: Joi.string().allow('').optional(),
    usia: Joi.number().integer().min(15).required(),
    pendidikan_terakhir: Joi.string().valid('SMA', 'SMK', 'Universitas').required(),
    jurusan_sebelumnya: Joi.string().allow('').optional(),
    minat_utama: Joi.string().required(),
    hobi: Joi.string().required(),
    keahlian: Joi.string().required(),
    kegiatan_sehari: Joi.string().required(),
    tujuan_jangka_pendek: Joi.string().valid('kuliah', 'kerja').required(),
    preferensi_tempat_kerja: Joi.string().valid('lapangan', 'kantor').required(),
    preferensi_kerja_tim: Joi.string().valid('tim', 'individu').required(),
    gaya_belajar: Joi.string().valid('visual', 'auditori', 'kinestetik').required()
});

/**
 * Controller untuk mendapatkan rekomendasi berdasarkan input pengguna
 */
const getRecommendation = async (request, h) => {
    try {
        // Validasi input pengguna
        const { error, value } = userInputSchema.validate(request.payload);
        
        if (error) {
            return h.response({
                status: 'error',
                message: 'Validasi gagal',
                details: error.details.map(detail => detail.message)
            }).code(400);
        }
        
        // Proses rekomendasi menggunakan service
        const recommendation = await recommendService.processRecommendation(value);
        
        return h.response({
            status: 'success',
            data: recommendation
        }).code(200);
        
    } catch (error) {
        console.error('Error dalam getRecommendation:', error);
        
        return h.response({
            status: 'error',
            message: 'Terjadi kesalahan saat memproses rekomendasi',
            error: error.message
        }).code(500);
    }
};

module.exports = {
    getRecommendation
};