/**
 * karir.js - View untuk halaman rekomendasi karir
 */

export class KarirView {
    constructor(container, apiModel) {
        this.container = container;
        this.apiModel = apiModel;
        this.currentStep = 1;
        this.formData = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async initialize() {
        this.render();
        this.setupEventListeners();
    }

    cleanup() {
        // Remove event listeners
        const form = document.getElementById('careerForm');
        if (form) {
            form.removeEventListener('submit', this.handleSubmit);
        }
        // Reset form data
        this.formData = {};
        this.currentStep = 1;
    }

    startNewRecommendation() {
        // Reset form
        this.cleanup();
        // Re-render form
        this.render();
        this.setupEventListeners();
        // Show form and hide results
        const form = document.getElementById('careerForm');
        const resultContainer = document.getElementById('resultContainer');
        form.classList.remove('d-none');
        resultContainer.classList.add('d-none');
        // Scroll to top
        window.scrollTo(0, 0);
    }

    render() {
        this.container.innerHTML = `
            <div class="py-5">
                <h2 class="text-center mb-4">Rekomendasi Karir</h2>
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <!-- Form -->
                        <form id="careerForm">
                            <div class="row">
                            <div class="container-fluid p-0">
                                <div class="row">
                                    <!-- Akademik Card -->
                                    <div class="col-md-6 mb-4">
                                        <div class="card h-100 shadow-sm">
                                            <div class="card-header bg-navy text-white">
                                                <h3 class="h5 mb-0">Akademik</h3>
                                            </div>
                                            <div class="card-body">
                                                <div class="mb-3">
                                                    <label class="form-label">Nilai Matematika</label>
                                                    <input type="number" class="form-control" name="nilai_matematika" min="0" max="100" step="0.01" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Nilai IPA</label>
                                                    <input type="number" class="form-control" name="nilai_ipa" min="0" max="100" step="0.01" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Nilai IPS</label>
                                                    <input type="number" class="form-control" name="nilai_ips" min="0" max="100" step="0.01" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Nilai Bahasa</label>
                                                    <input type="number" class="form-control" name="nilai_bahasa" min="0" max="100" step="0.01" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                <!-- Minat Card -->
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-header bg-navy text-white">
                                            <h3 class="h5 mb-0">Minat</h3>
                                        </div>
                                        <div class="card-body">
                                    <div class="container-fluid p-0">
                                        <div class="row">
                                            <!-- Minat Card -->
                                            <div class="col-md-6 mb-4">
                                                <div class="card h-100 shadow-sm">
                                                    <div class="card-header bg-navy text-white">
                                                        <h3 class="h5 mb-0">Minat</h3>
                                                    </div>
                                                    <div class="card-body">
                                                        <div class="mb-3">
                                                            <label class="form-label">Minat Sains</label>
                                                <input type="range" class="form-range" name="minat_sains" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Minat Sosial</label>
                                                <input type="range" class="form-range" name="minat_sosial" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Minat Bahasa</label>
                                                <input type="range" class="form-range" name="minat_bahasa" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Minat Kejuruan</label>
                                                <input type="range" class="form-range" name="minat_kejuruan" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Skills Card -->
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-header bg-navy text-white">
                                            <h3 class="h5 mb-0">Keterampilan</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label class="form-label">Skill Komputer</label>
                                                <input type="range" class="form-range" name="skill_komputer" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Pemula</span>
                                                    <span class="small">Ahli</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Skill Olahraga</label>
                                                <input type="range" class="form-range" name="skill_olahraga" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Pemula</span>
                                                    <span class="small">Ahli</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Skill Seni</label>
                                                <input type="range" class="form-range" name="skill_seni" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Pemula</span>
                                                    <span class="small">Ahli</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Skill Musik</label>
                                                <input type="range" class="form-range" name="skill_musik" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Pemula</span>
                                                    <span class="small">Ahli</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Preferensi Kerja Card -->
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100 shadow-sm">
                                        <div class="card-header bg-navy text-white">
                                            <h3 class="h5 mb-0">Preferensi Kerja</h3>
                                        </div>
                                        <div class="card-body">
                                            <div class="mb-3">
                                                <label class="form-label">Preferensi Kerja Tim</label>
                                                <input type="range" class="form-range" name="pref_kerja_tim" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Preferensi Kerja Individu</label>
                                                <input type="range" class="form-range" name="pref_kerja_individu" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Preferensi Kerja Dalam Ruangan</label>
                                                <input type="range" class="form-range" name="pref_kerja_dalam" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Preferensi Kerja Luar Ruangan</label>
                                                <input type="range" class="form-range" name="pref_kerja_luar" min="1" max="10" required>
                                                <div class="d-flex justify-content-between">
                                                    <span class="small">Rendah</span>
                                                    <span class="small">Tinggi</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="form-label">Skill Musik</label>
                                    <input type="range" class="form-range" name="skill_musik" min="1" max="10" required>
                                    <div class="d-flex justify-content-between">
                                        <span class="small">Pemula</span>
                                        <span class="small">Ahli</span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Preferensi Kerja Tim</label>
                                    <input type="range" class="form-range" name="pref_kerja_tim" min="1" max="10" required>
                                    <div class="d-flex justify-content-between">
                                        <span class="small">Tidak Suka</span>
                                        <span class="small">Sangat Suka</span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Preferensi Kerja Individu</label>
                                    <input type="range" class="form-range" name="pref_kerja_individu" min="1" max="10" required>
                                    <div class="d-flex justify-content-between">
                                        <span class="small">Tidak Suka</span>
                                        <span class="small">Sangat Suka</span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Preferensi Kerja Dalam Ruangan</label>
                                    <input type="range" class="form-range" name="pref_kerja_dalam" min="1" max="10" required>
                                    <div class="d-flex justify-content-between">
                                        <span class="small">Tidak Suka</span>
                                        <span class="small">Sangat Suka</span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Preferensi Kerja Luar Ruangan</label>
                                    <input type="range" class="form-range" name="pref_kerja_luar" min="1" max="10" required>
                                    <div class="d-flex justify-content-between">
                                        <span class="small">Tidak Suka</span>
                                        <span class="small">Sangat Suka</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Navigation Buttons -->
                            <div class="d-flex justify-content-between mt-4">
                                <button type="button" class="btn btn-secondary ${this.currentStep === 1 ? 'd-none' : ''}" onclick="window.karirView.prevStep()">Sebelumnya</button>
                                <button type="button" class="btn btn-navy ${this.currentStep === 2 ? 'd-none' : ''}" onclick="window.karirView.nextStep()">Selanjutnya</button>
                                <button type="submit" class="btn btn-navy ${this.currentStep !== 2 ? 'd-none' : ''}">Dapatkan Rekomendasi</button>
                            </div>
                        </form>

                        <!-- Loading Indicator -->
                        <div id="loadingIndicator" class="text-center mt-4 d-none">
                            <div class="spinner-border spinner-navy" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <p class="mt-2">Menganalisis data...</p>
                        </div>

                        <!-- Result Container -->
                        <div id="resultContainer" class="mt-4 d-none"></div>
                    </div>
                </div>
            </div>
        `;

        // Make instance accessible globally for button onclick handlers
        window.karirView = this;
    }

    setupEventListeners() {
        const form = document.getElementById('careerForm');
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    nextStep() {
        if (this.currentStep < 2) {
            this.currentStep++;
            this.render();
            this.setupEventListeners();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.render();
            this.setupEventListeners();
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Show loading indicator
        const loadingIndicator = document.getElementById('loadingIndicator');
        const resultContainer = document.getElementById('resultContainer');
        const form = document.getElementById('careerForm');

        loadingIndicator.classList.remove('d-none');
        form.classList.add('d-none');

        try {
            // Collect form data
            const formData = new FormData(e.target);
            const data = {};
            
            // Convert form values to numbers where needed
            for (let [key, value] of formData.entries()) {
                data[key] = ['nilai_matematika', 'nilai_ipa', 'nilai_ips', 'nilai_bahasa',
                             'minat_sains', 'minat_sosial', 'minat_bahasa', 'minat_kejuruan',
                             'skill_komputer', 'skill_olahraga', 'skill_seni', 'skill_musik',
                             'pref_kerja_tim', 'pref_kerja_individu', 'pref_kerja_dalam', 'pref_kerja_luar'
                            ].includes(key) ? parseFloat(value) : value;
            }

            console.log('Sending data:', data); // Debug log

            // Send to API
            const result = await this.apiModel.getRecommendation(data);
            console.log('Received result:', result); // Debug log

            // Display results
            resultContainer.innerHTML = this.generateResultHTML(result);
            resultContainer.classList.remove('d-none');
        } catch (error) {
            console.error('Error in handleSubmit:', error); // Debug log
            resultContainer.innerHTML = `
                <div class="alert alert-danger">
                    <i class="bi bi-exclamation-triangle me-2"></i>
                    Terjadi kesalahan saat memproses data. Silakan coba lagi.<br>
                    Detail: ${error.message}
                </div>
            `;
            resultContainer.classList.remove('d-none');
            form.classList.remove('d-none');
        } finally {
            loadingIndicator.classList.add('d-none');
        }
    }

    generateResultHTML(result) {
        const { recommendations, confidence_score, main_field, field_description, required_skills, education_path } = result;
        
        // Format recommendations as cards
        const recommendationCards = recommendations.map((rec, index) => `
            <div class="card mb-3 ${index === 0 ? 'border-primary' : ''}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${rec.career}</h5>
                        <span class="badge bg-${index === 0 ? 'primary' : 'secondary'} rounded-pill">
                            ${(rec.probability * 100).toFixed(1)}%
                        </span>
                    </div>
                    ${index === 0 ? `<p class="card-text text-muted small">Rekomendasi Terbaik</p>` : ''}
                </div>
            </div>
        `).join('');

        return `
            <div class="card shadow-sm">
                <div class="card-body">
                    <h4 class="card-title mb-4">Hasil Rekomendasi Karir</h4>
                    
                    <!-- Main Field Section -->
                    <div class="mb-4">
                        <h5 class="h6 text-primary">Bidang Utama</h5>
                        <p class="mb-2">${main_field}</p>
                        <div class="progress" style="height: 5px;">
                            <div class="progress-bar bg-primary" role="progressbar" 
                                style="width: ${confidence_score * 100}%"></div>
                        </div>
                        <p class="text-muted small mt-1">
                            Tingkat Kepercayaan: ${(confidence_score * 100).toFixed(1)}%
                        </p>
                    </div>

                    <!-- Field Description -->
                    <div class="mb-4">
                        <h5 class="h6 text-primary">Deskripsi Bidang</h5>
                        <p>${field_description}</p>
                    </div>

                    <!-- Top Recommendations -->
                    <div class="mb-4">
                        <h5 class="h6 text-primary mb-3">Rekomendasi Karir</h5>
                        ${recommendationCards}
                    </div>

                    <!-- Required Skills -->
                    <div class="mb-4">
                        <h5 class="h6 text-primary">Skill yang Dibutuhkan</h5>
                        <div class="d-flex flex-wrap gap-2">
                            ${required_skills.map(skill => `
                                <span class="badge bg-light text-dark border">${skill}</span>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Education Path -->
                    <div class="mb-3">
                        <h5 class="h6 text-primary">Jalur Pendidikan yang Disarankan</h5>
                        <ul class="list-group list-group-flush">
                            ${education_path.map(path => `
                                <li class="list-group-item">${path}</li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Action Buttons -->
                    <div class="mt-4">
                        <button class="btn btn-outline-primary me-2" onclick="window.print()">
                            <i class="bi bi-printer me-2"></i>Cetak Hasil
                        </button>
                        <button class="btn btn-primary" onclick="window.karirView.startNewRecommendation()">
                            <i class="bi bi-arrow-repeat me-2"></i>Mulai Baru
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="card-title h4 mb-4">Rekomendasi Karir Untukmu</h3>
                    
                    ${result.recommendations.map((rec, index) => `
                        <div class="recommendation-item mb-4 p-3 ${index === 0 ? 'bg-light' : ''}">
                            <h4 class="h5 mb-2">${index + 1}. ${rec.title}</h4>
                            <p class="mb-2">${rec.description}</p>
                            <div class="d-flex align-items-center">
                                <div class="progress flex-grow-1" style="height: 5px;">
                                    <div class="progress-bar bg-navy" style="width: ${rec.match}%"></div>
                                </div>
                                <span class="ms-2 small">${rec.match}% Match</span>
                            </div>
                        </div>
                    `).join('')}

                    <div class="mt-4 pt-3 border-top">
                        <h4 class="h5 mb-3">Langkah Selanjutnya</h4>
                        <p>${result.nextSteps || 'Pertimbangkan untuk mempelajari lebih lanjut tentang karir yang direkomendasikan dan mulai mengembangkan keterampilan yang dibutuhkan.'}</p>
                    </div>

                    <div class="mt-4 text-center">
                        <button class="btn btn-navy" onclick="window.location.reload()">Mulai Ulang</button>
                    </div>
                </div>
            </div>
        `;
    }
}