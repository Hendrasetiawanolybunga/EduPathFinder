/**
 * app.js - Presenter utama untuk mengelola routing dan tampilan
 */

import { ApiModel } from '../models/api.js';
import { HomeView } from '../views/home.js';
import { KarirView } from '../views/karir.js';
import { JurusanView } from '../views/jurusan.js';
import { AboutView } from '../views/about.js';

class AppPresenter {
    constructor() {
        this.container = document.getElementById('app');
        this.currentView = null;
        this.initializeRouter();
    }

    initializeRouter() {
        // Handle initial route
        this.handleRoute();

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());

        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    async handleRoute() {
        const hash = window.location.hash || '#/';
        const route = hash.slice(2) || 'home';

        // Cleanup current view if exists
        if (this.currentView) {
            this.currentView.cleanup();
        }

        // Load new view
        switch (route) {
            case 'home':
                this.currentView = new HomeView(this.container);
                break;
            case 'karir':
                this.currentView = new KarirView(this.container, ApiModel);
                break;
            case 'jurusan':
                this.currentView = new JurusanView(this.container, ApiModel);
                break;
            case 'about':
                this.currentView = new AboutView(this.container);
                break;
            default:
                this.currentView = new HomeView(this.container);
        }

        // Initialize new view
        await this.currentView.initialize();
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AppPresenter();
});