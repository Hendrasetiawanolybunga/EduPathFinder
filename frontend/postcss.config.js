/**
 * postcss.config.js - Konfigurasi PostCSS
 */
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer')
    ]
};