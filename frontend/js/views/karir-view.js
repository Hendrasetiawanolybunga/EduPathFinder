/**
 * karir-view.js - Komponen tampilan untuk halaman prediksi karir
 */

class KarirView {
    constructor() {
        this.container = document.createElement('div');
        this.init();
    }

    init() {
        this.container.innerHTML = `
            <div class="bg-gray-50 min-h-screen py-12">
                <div class="container mx-auto px-6">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-3xl font-bold text-navy-700 text-center mb-8">Prediksi Karir</h1>
                        <div class="bg-white rounded-lg shadow-lg p-8">
                            <form id="careerForm" class="space-y-6">
                                <!-- Nilai Akademik Section -->
                                <div class="space-y-4">
                                    <h2 class="text-xl font-semibold text-navy-700 mb-4">Nilai Akademik</h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="input-group">
                                            <label for="nilai_matematika" class="block text-sm font-medium text-gray-700">Nilai Matematika (0-100)</label>
                                            <input type="number" id="nilai_matematika" name="nilai_matematika" min="0" max="100" required
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500">
                                        </div>
                                        <div class="input-group">
                                            <label for="nilai_ipa" class="block text-sm font-medium text-gray-700">Nilai IPA (0-100)</label>
                                            <input type="number" id="nilai_ipa" name="nilai_ipa" min="0" max="100" required
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500">
                                        </div>
                                        <div class="input-group">
                                            <label for="nilai_ips" class="block text-sm font-medium text-gray-700">Nilai IPS (0-100)</label>
                                            <input type="number" id="nilai_ips" name="nilai_ips" min="0" max="100" required
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500">
                                        </div>
                                        <div class="input-group">
                                            <label for="nilai_bahasa" class="block text-sm font-medium text-gray-700">Nilai Bahasa (0-100)</label>
                                            <input type="number" id="nilai_bahasa" name="nilai_bahasa" min="0" max="100" required
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500">
                                        </div>
                                    </div>
                                </div>

                                <!-- Minat Section -->
                                <div class="space-y-4">
                                    <h2 class="text-xl font-semibold text-navy-700 mb-4">Minat</h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Minat Sains</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('minat_sains', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Minat Sosial</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('minat_sosial', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Minat Bahasa</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('minat_bahasa', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Minat Kejuruan</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('minat_kejuruan', 10)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Skills Section -->
                                <div class="space-y-4">
                                    <h2 class="text-xl font-semibold text-navy-700 mb-4">Keterampilan</h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Skill Komputer</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('skill_komputer', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Skill Olahraga</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('skill_olahraga', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Skill Seni</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('skill_seni', 10)}
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Skill Musik</label>
                                            <div class="flex items-center space-x-4">
                                                ${this.generateRadioButtons('skill_musik', 10)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Preferensi Section -->
                                <div class="space-y-4">
                                    <h2 class="text-xl font-semibold text-navy-700 mb-4">Preferensi Kerja</h2>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700">Preferensi Kerja Tim</label>
                                            <div class="mt-2 space-x-4">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_kerja_tim" value="true" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Ya</span>
                                                </label>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_kerja_tim" value="false" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Tidak</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700">Preferensi Kerja Individu</label>
                                            <div class="mt-2 space-x-4">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_kerja_individu" value="true" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Ya</span>
                                                </label>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_kerja_individu" value="false" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Tidak</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700">Preferensi Kerja Dalam Ruangan</label>
                                            <div class="mt-2 space-x-4">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_dalam_ruangan" value="true" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Ya</span>
                                                </label>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_dalam_ruangan" value="false" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Tidak</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="input-group">
                                            <label class="block text-sm font-medium text-gray-700">Preferensi Kerja Luar Ruangan</label>
                                            <div class="mt-2 space-x-4">
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_luar_ruangan" value="true" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Ya</span>
                                                </label>
                                                <label class="inline-flex items-center">
                                                    <input type="radio" name="prefer_luar_ruangan" value="false" required class="text-navy-600 focus:ring-navy-500">
                                                    <span class="ml-2">Tidak</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-center pt-6">
                                    <button type="submit" class="bg-navy-600 text-white px-8 py-3 rounded-full hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 transition-colors duration-300">
                                        Prediksi Karir
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Loading Indicator -->
            <div id="loadingIndicator" class="fixed inset-0 bg-gray-900 bg-opacity-50 hidden flex items-center justify-center">
                <div class="bg-white p-5 rounded-lg flex items-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-navy-700"></div>
                    <span class="ml-3">Memproses...</span>
                </div>
            </div>

            <!-- Result Modal -->
            <div id="resultModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 hidden flex items-center justify-center">
                <div class="bg-white rounded-lg max-w-2xl w-full mx-4">
                    <div class="p-6" id="resultContent"></div>
                </div>
            </div>
        `;

        this.setupEventListeners();
    }

    generateRadioButtons(name, count) {
        let buttons = '';
        for (let i = 1; i <= count; i++) {
            buttons += `
                <label class="flex flex-col items-center">
                    <input type="radio" name="${name}" value="${i}" required class="text-navy-600 focus:ring-navy-500">
                    <span class="text-xs mt-1">${i}</span>
                </label>
            `;
        }
        return buttons;
    }

    setupEventListeners() {
        const form = this.container.querySelector('#careerForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.onSubmit) {
                    this.onSubmit(new FormData(form));
                }
            });
        }
    }

    showLoading() {
        const loadingIndicator = this.container.querySelector('#loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loadingIndicator = this.container.querySelector('#loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.add('hidden');
        }
    }

    showResult(result) {
        const modal = this.container.querySelector('#resultModal');
        const content = this.container.querySelector('#resultContent');
        if (modal && content) {
            content.innerHTML = `
                <h2 class="text-2xl font-bold text-navy-700 mb-4">Hasil Prediksi Karir</h2>
                <div class="space-y-4">
                    ${result.recommendations.map((rec, index) => `
                        <div class="p-4 ${index === 0 ? 'bg-navy-50' : 'bg-gray-50'} rounded-lg">
                            <h3 class="text-lg font-semibold text-navy-700">${index + 1}. ${rec.career}</h3>
                            <p class="text-gray-600 mt-2">${rec.description || ''}</p>
                            <p class="text-sm text-navy-600 mt-1">Tingkat Kesesuaian: ${Math.round(rec.confidence * 100)}%</p>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-6 flex justify-end">
                    <button onclick="document.querySelector('#resultModal').classList.add('hidden')" 
                            class="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300">
                        Tutup
                    </button>
                </div>
            `;
            modal.classList.remove('hidden');
        }
    }

    bindSubmit(callback) {
        this.onSubmit = callback;
    }

    getElement() {
        return this.container;
    }
}

export default KarirView;