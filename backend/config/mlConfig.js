/**
 * mlConfig.js - Konfigurasi untuk menjalankan model machine learning
 */

const { spawn } = require('child_process');
const path = require('path');

// Path ke script Python untuk prediksi
const ML_SCRIPT_PATH = process.env.ML_SCRIPT_PATH || path.join(__dirname, '../../ml-model/scripts/predict.py');

/**
 * Menjalankan model machine learning untuk mendapatkan rekomendasi
 * @param {Object} userData - Data input pengguna yang akan diproses
 * @returns {Promise<Object>} - Hasil rekomendasi dari model ML
 */
const runMLModel = (userData) => {
    return new Promise((resolve, reject) => {
        // Konversi data pengguna menjadi JSON string
        const userDataString = JSON.stringify(userData);
        
        // Jalankan script Python dengan child_process
        const pythonProcess = spawn('python', [ML_SCRIPT_PATH, userDataString]);
        
        let result = '';
        let errorOutput = '';
        
        // Tangkap output dari script Python
        pythonProcess.stdout.on('data', (data) => {
            result += data.toString();
        });
        
        // Tangkap error dari script Python
        pythonProcess.stderr.on('data', (data) => {
            errorOutput += data.toString();
        });
        
        // Ketika proses selesai
        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.error(`Model ML error dengan kode: ${code}`);
                console.error(`Error output: ${errorOutput}`);
                reject(new Error(`Model ML error: ${errorOutput}`));
                return;
            }
            
            try {
                // Parse hasil JSON dari output Python
                const mlResult = JSON.parse(result);
                resolve(mlResult);
            } catch (error) {
                console.error('Error saat parsing hasil ML:', error);
                reject(new Error(`Error saat parsing hasil ML: ${error.message}`));
            }
        });
    });
};

module.exports = {
    runMLModel
};