/**
 * about.js - View untuk halaman tentang platform
 */

export class AboutView {
    constructor(container) {
        this.container = container;
    }

    async initialize() {
        this.render();
    }

    cleanup() {
        // Cleanup if needed
    }

    render() {
        this.container.innerHTML = `
            <div class="py-5">
                <!-- Hero Section -->
                <div class="text-center mb-5">
                    <h2 class="mb-4">Tentang EudPathFinder</h2>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <p class="lead text-muted">EudPathFinder adalah platform inovatif yang membantu siswa dan profesional muda menemukan jalur karir yang sesuai dengan potensi mereka menggunakan teknologi kecerdasan buatan.</p>
                        </div>
                    </div>
                </div>

                <!-- Mission & Vision -->
                <div class="row justify-content-center mb-5">
                    <div class="col-md-10">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card h-100 border-0 shadow-sm">
                                    <div class="card-body p-4">
                                        <div class="text-navy mb-3">
                                            <i class="bi bi-bullseye fs-1"></i>
                                        </div>
                                        <h3 class="h4 mb-3">Misi Kami</h3>
                                        <p class="text-muted">Membantu setiap individu menemukan dan mengembangkan potensi karir mereka melalui rekomendasi yang dipersonalisasi dan berbasis data.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card h-100 border-0 shadow-sm">
                                    <div class="card-body p-4">
                                        <div class="text-navy mb-3">
                                            <i class="bi bi-eye fs-1"></i>
                                        </div>
                                        <h3 class="h4 mb-3">Visi Kami</h3>
                                        <p class="text-muted">Menjadi platform terdepan dalam memberikan panduan karir yang akurat dan terpercaya menggunakan teknologi AI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Technology Stack -->
                <div class="bg-light py-5 px-3 rounded-3 mb-5">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <h3 class="text-center mb-4">Teknologi yang Kami Gunakan</h3>
                            <div class="row row-cols-2 row-cols-md-4 g-4 text-center">
                                <div class="col">
                                    <div class="p-3">
                                        <i class="bi bi-braces text-navy fs-1 mb-3"></i>
                                        <h4 class="h6">Modern JavaScript</h4>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <i class="bi bi-bootstrap text-navy fs-1 mb-3"></i>
                                        <h4 class="h6">Bootstrap 5</h4>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <i class="bi bi-cpu text-navy fs-1 mb-3"></i>
                                        <h4 class="h6">Machine Learning</h4>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <i class="bi bi-graph-up text-navy fs-1 mb-3"></i>
                                        <h4 class="h6">Data Analytics</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Team Section -->
                <div class="text-center mb-5">
                    <h3 class="mb-4">Tim Kami</h3>
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <p class="text-muted mb-5">Tim kami terdiri dari para ahli di bidang teknologi, pendidikan, dan pengembangan karir yang berkomitmen untuk membantu Anda menemukan jalur karir terbaik.</p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <div class="rounded-circle bg-navy text-white d-inline-flex p-3 mb-3">
                                        <i class="bi bi-person-fill fs-1"></i>
                                    </div>
                                    <h4 class="h5">Tim Teknologi</h4>
                                    <p class="text-muted">Mengembangkan dan memelihara platform dengan teknologi terkini</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <div class="rounded-circle bg-navy text-white d-inline-flex p-3 mb-3">
                                        <i class="bi bi-people-fill fs-1"></i>
                                    </div>
                                    <h4 class="h5">Tim Konsultan</h4>
                                    <p class="text-muted">Memberikan panduan dan analisis karir yang komprehensif</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <div class="rounded-circle bg-navy text-white d-inline-flex p-3 mb-3">
                                        <i class="bi bi-graph-up-arrow fs-1"></i>
                                    </div>
                                    <h4 class="h5">Tim Data</h4>
                                    <p class="text-muted">Menganalisis dan mengoptimalkan algoritma rekomendasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Section -->
                <div class="text-center">
                    <h3 class="mb-4">Hubungi Kami</h3>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card border-0 shadow-sm">
                                <div class="card-body p-4">
                                    <div class="d-flex flex-column gap-3">
                                        <div>
                                            <i class="bi bi-envelope text-navy me-2"></i>
                                            <a href="mailto:info@eudpathfinder.com" class="text-decoration-none">info@eudpathfinder.com</a>
                                        </div>
                                        <div>
                                            <i class="bi bi-geo-alt text-navy me-2"></i>
                                            <span>Jakarta, Indonesia</span>
                                        </div>
                                        <div class="mt-3">
                                            <a href="#" class="text-navy me-3"><i class="bi bi-facebook fs-4"></i></a>
                                            <a href="#" class="text-navy me-3"><i class="bi bi-twitter fs-4"></i></a>
                                            <a href="#" class="text-navy me-3"><i class="bi bi-linkedin fs-4"></i></a>
                                            <a href="#" class="text-navy"><i class="bi bi-instagram fs-4"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}