/**
 * home.js - View untuk halaman beranda
 */

export class HomeView {
    constructor(container) {
        this.container = container;
    }

    async initialize() {
        this.render();
    }

    cleanup() {
        // Cleanup event listeners if needed
    }

    render() {
        this.container.innerHTML = `
            <div class="row align-items-center min-vh-75 py-5">
                <!-- Hero Section -->
                <div class="col-md-6 text-center text-md-start">
                    <h1 class="display-4 fw-bold mb-4">Temukan Jalur Karirmu</h1>
                    <p class="lead mb-4">EudPathFinder membantu kamu menemukan karir yang sesuai dengan potensi dan passionmu menggunakan teknologi AI.</p>
                    <a href="#/karir" class="btn btn-navy btn-lg mb-5">Mulai Sekarang</a>
                </div>
                <div class="col-md-6 text-center">
                    <img src="assets/hero-illustration.svg" alt="Career Illustration" class="img-fluid">
                </div>

                <!-- Features Section -->
                <div class="row mt-5 pt-5">
                    <h2 class="text-center mb-5">Mengapa EudPathFinder?</h2>
                    
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 p-4 text-center">
                            <div class="mb-3">
                                <i class="bi bi-brain fs-1 text-navy"></i>
                            </div>
                            <h3 class="h5">AI Powered</h3>
                            <p class="text-muted">Menggunakan teknologi Machine Learning untuk memberikan rekomendasi yang akurat.</p>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card h-100 p-4 text-center">
                            <div class="mb-3">
                                <i class="bi bi-graph-up fs-1 text-navy"></i>
                            </div>
                            <h3 class="h5">Analisis Komprehensif</h3>
                            <p class="text-muted">Mempertimbangkan berbagai aspek untuk hasil yang lebih tepat.</p>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="card h-100 p-4 text-center">
                            <div class="mb-3">
                                <i class="bi bi-bullseye fs-1 text-navy"></i>
                            </div>
                            <h3 class="h5">Rekomendasi Tepat</h3>
                            <p class="text-muted">Saran karir yang sesuai dengan potensi untuk masa depan lebih cerah.</p>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="text-center mt-5 pt-5">
                    <h2 class="mb-4">Siap Menemukan Karirmu?</h2>
                    <p class="lead mb-4">Mulai perjalanan karirmu dengan mengisi form rekomendasi kami.</p>
                    <a href="#/karir" class="btn btn-navy btn-lg">Dapatkan Rekomendasi</a>
                </div>
            </div>
        `;
    }
}