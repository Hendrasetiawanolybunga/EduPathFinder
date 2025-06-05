/**
 * about-view.js - Komponen tampilan untuk halaman about
 */

class AboutView {
    constructor() {
        this.container = document.createElement('div');
        this.init();
    }

    init() {
        this.container.innerHTML = `
            <div class="bg-gray-50 min-h-screen">
                <!-- Hero Section -->
                <section class="bg-navy-700 text-white py-20">
                    <div class="container mx-auto px-6 text-center">
                        <h1 class="text-4xl font-bold mb-4">Tentang EduPathFinder</h1>
                        <p class="text-xl max-w-2xl mx-auto">Platform AI yang membantu siswa menemukan jalur karir dan pendidikan yang sesuai dengan potensi mereka.</p>
                    </div>
                </section>

                <!-- Mission Section -->
                <section class="py-16">
                    <div class="container mx-auto px-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 class="text-3xl font-bold text-navy-700 mb-6">Misi Kami</h2>
                                <div class="space-y-4 text-gray-600">
                                    <p>EduPathFinder hadir untuk membantu siswa dalam membuat keputusan yang tepat tentang masa depan mereka melalui teknologi AI yang canggih.</p>
                                    <p>Kami percaya bahwa setiap siswa memiliki potensi unik, dan tugas kami adalah membantu mereka menemukan dan mengembangkan potensi tersebut.</p>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <img src="/img/icons/mission-illustration.svg" alt="Mission Illustration" class="w-full max-w-md">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Features Section -->
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-6">
                        <h2 class="text-3xl font-bold text-navy-700 text-center mb-12">Fitur Utama</h2>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <!-- AI Prediction -->
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-brain text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold text-navy-700 mb-2">Prediksi AI</h3>
                                <p class="text-gray-600">Menggunakan model machine learning canggih untuk memberikan rekomendasi karir yang akurat.</p>
                            </div>

                            <!-- Comprehensive Analysis -->
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-chart-bar text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold text-navy-700 mb-2">Analisis Komprehensif</h3>
                                <p class="text-gray-600">Mempertimbangkan berbagai aspek seperti nilai akademik, minat, dan keterampilan.</p>
                            </div>

                            <!-- Career Information -->
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i class="fas fa-briefcase text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold text-navy-700 mb-2">Informasi Karir</h3>
                                <p class="text-gray-600">Menyediakan informasi lengkap tentang berbagai jalur karir dan program studi.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Technology Section -->
                <section class="py-16">
                    <div class="container mx-auto px-6">
                        <h2 class="text-3xl font-bold text-navy-700 text-center mb-12">Teknologi yang Kami Gunakan</h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <!-- TensorFlow.js -->
                            <div class="text-center p-4">
                                <div class="w-16 h-16 mx-auto mb-4">
                                    <img src="/img/icons/tensorflow.svg" alt="TensorFlow.js" class="w-full h-full">
                                </div>
                                <h3 class="font-semibold text-navy-700">TensorFlow.js</h3>
                            </div>

                            <!-- Node.js -->
                            <div class="text-center p-4">
                                <div class="w-16 h-16 mx-auto mb-4">
                                    <img src="/img/icons/nodejs.svg" alt="Node.js" class="w-full h-full">
                                </div>
                                <h3 class="font-semibold text-navy-700">Node.js</h3>
                            </div>

                            <!-- Tailwind CSS -->
                            <div class="text-center p-4">
                                <div class="w-16 h-16 mx-auto mb-4">
                                    <img src="/img/icons/tailwind.svg" alt="Tailwind CSS" class="w-full h-full">
                                </div>
                                <h3 class="font-semibold text-navy-700">Tailwind CSS</h3>
                            </div>

                            <!-- SQLite -->
                            <div class="text-center p-4">
                                <div class="w-16 h-16 mx-auto mb-4">
                                    <img src="/img/icons/sqlite.svg" alt="SQLite" class="w-full h-full">
                                </div>
                                <h3 class="font-semibold text-navy-700">SQLite</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section class="py-16 bg-white">
                    <div class="container mx-auto px-6">
                        <h2 class="text-3xl font-bold text-navy-700 text-center mb-12">Hubungi Kami</h2>
                        <div class="max-w-lg mx-auto text-center">
                            <p class="text-gray-600 mb-6">Punya pertanyaan atau saran? Jangan ragu untuk menghubungi kami.</p>
                            <div class="flex justify-center space-x-6">
                                <a href="mailto:contact@edupathfinder.com" class="text-navy-600 hover:text-navy-800">
                                    <i class="fas fa-envelope text-2xl"></i>
                                </a>
                                <a href="https://github.com/edupathfinder" target="_blank" class="text-navy-600 hover:text-navy-800">
                                    <i class="fab fa-github text-2xl"></i>
                                </a>
                                <a href="https://linkedin.com/company/edupathfinder" target="_blank" class="text-navy-600 hover:text-navy-800">
                                    <i class="fab fa-linkedin text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    }

    getElement() {
        return this.container;
    }
}

export default AboutView;