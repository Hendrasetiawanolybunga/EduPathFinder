/**
 * postcss.config.js - Konfigurasi PostCSS
 */
module.exports = {
    plugins: {
        'tailwindcss/nesting': {},
        'tailwindcss': {},
        'postcss-preset-env': {
            features: { 'nesting-rules': false }, // Menonaktifkan nesting bawaan karena sudah ditangani tailwindcss/nesting
        },
        // Tambahkan plugin lain jika diperlukan, misalnya autoprefixer
        // 'autoprefixer': {},
    },
};