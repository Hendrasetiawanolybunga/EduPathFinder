/**
 * babel.config.js - Konfigurasi Babel
 */
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                // Sesuaikan dengan target browser yang diinginkan
                // Misalnya, browser yang mendukung ES Modules secara native
                esmodules: true,
            },
            // Gunakan polyfill sesuai kebutuhan
            useBuiltIns: 'usage',
            corejs: 3, // Tentukan versi core-js
        }]
    ]
};