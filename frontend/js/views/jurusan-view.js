/**
 * jurusan-view.js - Komponen tampilan untuk halaman informasi jurusan
 */

/**
 * jurusan-view.js - Komponen tampilan untuk halaman jurusan
 */

class JurusanView {
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
                        <h1 class="text-4xl font-bold mb-4">Program Studi Populer</h1>
                        <p class="text-xl max-w-2xl mx-auto">Jelajahi berbagai program studi yang diminati dan sesuai dengan minat Anda.</p>
                    </div>
                </section>

                <!-- Search & Filter Section -->
                <section class="py-8 bg-white border-b">
                    <div class="container mx-auto px-6">
                        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <!-- Search -->
                            <div class="w-full md:w-1/3">
                                <div class="relative">
                                    <input type="text" 
                                           placeholder="Cari program studi..."
                                           class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-navy-500">
                                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                                </div>
                            </div>
                            <!-- Filters -->
                            <div class="flex gap-4">
                                <select class="border rounded-lg px-4 py-2 focus:outline-none focus:border-navy-500">
                                    <option value="">Semua Bidang</option>
                                    <option value="sains">Sains & Teknologi</option>
                                    <option value="sosial">Sosial & Humaniora</option>
                                    <option value="kesehatan">Kesehatan</option>
                                    <option value="bisnis">Bisnis & Ekonomi</option>
                                </select>
                                <select class="border rounded-lg px-4 py-2 focus:outline-none focus:border-navy-500">
                                    <option value="">Semua Jenjang</option>
                                    <option value="d3">D3</option>
                                    <option value="s1">S1</option>
                                    <option value="s2">S2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                    <!-- Jurusan Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Teknik Informatika -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-laptop-code text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Teknik Informatika</h3>
                                <p class="text-gray-600 mb-4">Program studi yang fokus pada pengembangan software, algoritma, dan sistem komputer.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.Kom</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: Software Engineer, Data Scientist, System Analyst</p>
                                </div>
                            </div>
                        </div>

                        <!-- Sistem Informasi -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-database text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Sistem Informasi</h3>
                                <p class="text-gray-600 mb-4">Mempelajari integrasi teknologi informasi dengan proses bisnis dan manajemen.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.Kom</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: Business Analyst, IT Consultant, Project Manager</p>
                                </div>
                            </div>
                        </div>

                        <!-- Data Science -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-chart-network text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Data Science</h3>
                                <p class="text-gray-600 mb-4">Fokus pada analisis data, machine learning, dan artificial intelligence.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.Kom</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: Data Scientist, ML Engineer, Research Scientist</p>
                                </div>
                            </div>
                        </div>

                        <!-- Teknik Elektro -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-microchip text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Teknik Elektro</h3>
                                <p class="text-gray-600 mb-4">Mempelajari sistem elektronika, telekomunikasi, dan kontrol otomatis.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.T</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: Hardware Engineer, IoT Developer, Automation Engineer</p>
                                </div>
                            </div>
                        </div>

                        <!-- Desain Komunikasi Visual -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-palette text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Desain Komunikasi Visual</h3>
                                <p class="text-gray-600 mb-4">Fokus pada desain grafis, multimedia, dan komunikasi visual.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.Ds</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: UI/UX Designer, Graphic Designer, Art Director</p>
                                </div>
                            </div>
                        </div>

                        <!-- Manajemen Bisnis -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-chart-line text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Manajemen Bisnis</h3>
                                <p class="text-gray-600 mb-4">Mempelajari strategi bisnis, keuangan, dan manajemen organisasi.</p>
                                <div class="space-y-2">
                                    <p class="text-sm"><i class="fas fa-clock mr-2 text-navy-600"></i>Durasi: 4 tahun</p>
                                    <p class="text-sm"><i class="fas fa-graduation-cap mr-2 text-navy-600"></i>Gelar: S.E</p>
                                    <p class="text-sm"><i class="fas fa-briefcase mr-2 text-navy-600"></i>Prospek: Business Manager, Entrepreneur, Financial Analyst</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Info Section -->
                    <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
                        <h2 class="text-2xl font-bold text-navy-700 mb-4">Informasi Tambahan</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <h3 class="text-lg font-semibold text-navy-600">Tips Memilih Jurusan</h3>
                                <ul class="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Kenali minat dan bakatmu</li>
                                    <li>Pelajari prospek karir</li>
                                    <li>Pertimbangkan biaya kuliah</li>
                                    <li>Cari informasi akreditasi kampus</li>
                                </ul>
                            </div>
                            <div class="space-y-3">
                                <h3 class="text-lg font-semibold text-navy-600">Persiapan yang Diperlukan</h3>
                                <ul class="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Nilai akademik yang memadai</li>
                                    <li>Kemampuan bahasa Inggris</li>
                                    <li>Portfolio (untuk jurusan tertentu)</li>
                                    <li>Persiapan tes masuk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getElement() {
        return this.container;
    }
}

export default JurusanView;