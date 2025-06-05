/**
 * router.js - Router untuk menangani navigasi antar halaman
 */

import HomeView from './views/home-view';
import KarirView from './views/karir-view';
import JurusanView from './views/jurusan-view';
import AboutView from './views/about-view';

class Router {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.routes = {
            '/': HomeView.getInstance(),
            '/karir': KarirView.getInstance(),
            '/jurusan': JurusanView.getInstance(),
            '/about': AboutView.getInstance()
        };

        // Bind methods
        this.handleRoute = this.handleRoute.bind(this);

        // Initialize
        this.init();
    }

    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', this.handleRoute);
        
        // Handle initial route
        this.handleRoute();
    }

    updateActiveLink(currentRoute) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.route === currentRoute) {
                link.classList.add('active');
            }
        });
    }

    handleRoute() {
        // Get the hash without the # symbol
        const hash = window.location.hash.slice(1) || '/';
        
        // Find the matching view
        const view = this.routes[hash];
        
        if (view) {
            // Clear the root element
            this.rootElement.innerHTML = '';
            
            // Render the new view
            this.rootElement.appendChild(view.container);
            
            // Update active navigation link
            this.updateActiveLink(hash);
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        } else {
            // Handle 404 - Route not found
            this.rootElement.innerHTML = `
                <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                    <h1 class="text-4xl font-bold text-navy-700 mb-4">404</h1>
                    <p class="text-xl text-gray-600 mb-8">Halaman tidak ditemukan</p>
                    <a href="#/" class="text-navy-600 hover:text-navy-800 font-medium">Kembali ke Beranda</a>
                </div>
            `;
        }
    }
}

export default Router;