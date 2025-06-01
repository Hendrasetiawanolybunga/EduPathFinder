'use strict';

/**
 * Server.js - File utama untuk menjalankan server backend EudPathFinder
 * 
 * File ini berisi konfigurasi server Hapi.js dan inisialisasi rute API
 */

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const recommendRoutes = require('./routes/recommendRoutes');
const historyRoutes = require('./routes/historyRoutes');

// Server configuration
const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

// Server initialization function
const init = async () => {
    // Register plugins
    await server.register([
        Inert,
        Vision
    ]);

    // Register routes
    server.route([
        ...recommendRoutes,
        ...historyRoutes,
        // Default route for API documentation or welcome page
        {
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return { message: 'Selamat datang di API EudPathFinder' };
            }
        }
    ]);

    // Start the server
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`);
};

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection:', err);
    process.exit(1);
});

// Initialize the server
init();