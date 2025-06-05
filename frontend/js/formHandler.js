/**
 * formHandler.js - Modul untuk menangani logika form rekomendasi
 */

let currentStep = 1;
const totalSteps = 3; // Jumlah total langkah dalam form

/**
 * Inisialisasi fungsionalitas form
 */
export function initForm() {
    const form = document.getElementById('recommendationForm');
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const resetFormButton = document.getElementById('resetFormButton');

    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => changeStep(1));
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => changeStep(-1));
    });

    if (resetFormButton) {
        resetFormButton.addEventListener('click', resetForm);
    }

    updateStepVisibility();
    updateProgressBar();
}

/**
 * Mengubah langkah form (maju atau mundur)
 * @param {number} direction - Arah perubahan (1 untuk maju, -1 untuk mundur)
 */
function changeStep(direction) {
    const nextStep = currentStep + direction;

    if (direction > 0) { // Jika maju
        if (!validateStep(currentStep)) {
            return; // Jangan lanjut jika validasi gagal
        }
    }

    if (nextStep > 0 && nextStep <= totalSteps) {
        currentStep = nextStep;
        updateStepVisibility();
        updateProgressBar();
    }
}

/**
 * Memperbarui tampilan langkah form yang aktif
 */
function updateStepVisibility() {
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    const activeStepElement = document.getElementById(`step${currentStep}`);
    if (activeStepElement) {
        activeStepElement.classList.add('active');
    }
}

/**
 * Memperbarui progress bar
 */
function updateProgressBar() {
    document.querySelectorAll('.progress-step').forEach(step => {
        const stepNumber = parseInt(step.dataset.step);
        if (stepNumber <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

/**
 * Validasi input pada langkah tertentu
 * @param {number} stepNumber - Nomor langkah yang akan divalidasi
 * @returns {boolean} - True jika valid, false jika tidak
 */
function validateStep(stepNumber) {
    let isValid = true;
    const currentStepElement = document.getElementById(`step${stepNumber}`);
    if (!currentStepElement) return true;

    const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        const errorElement = document.getElementById(`error-${input.id}`);
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('border-red-500'); // Tambahkan border merah jika error
            if (errorElement) {
                errorElement.textContent = 'Kolom ini wajib diisi.';
                errorElement.classList.remove('hidden');
            }
        } else {
            input.classList.remove('border-red-500');
            if (errorElement) {
                errorElement.classList.add('hidden');
                errorElement.textContent = '';
            }
        }

        // Validasi spesifik untuk usia
        if (input.id === 'usia' && input.value.trim() !== '') {
            const usia = parseInt(input.value);
            if (isNaN(usia) || usia < 15) {
                isValid = false;
                input.classList.add('border-red-500');
                if (errorElement) {
                    errorElement.textContent = 'Usia minimal adalah 15 tahun.';
                    errorElement.classList.remove('hidden');
                }
            }
        }
    });

    return isValid;
}

/**
 * Menangani submit form
 * @param {Event} event - Event submit form
 */
async function handleSubmit(event) {
    event.preventDefault();
    
    if (!validateStep(currentStep)) {
        return;
    }

    const form = event.target;
    const formData = new FormData(form);
    const userData = {
        nilai_matematika: formData.get('nilai_matematika'),
        nilai_ipa: formData.get('nilai_ipa'),
        nilai_ips: formData.get('nilai_ips'),
        nilai_bahasa: formData.get('nilai_bahasa'),
        minat_sains: formData.get('minat_sains'),
        minat_sosial: formData.get('minat_sosial'),
        minat_bahasa: formData.get('minat_bahasa'),
        minat_kejuruan: formData.get('minat_kejuruan'),
        skill_komputer: formData.get('skill_komputer'),
        skill_olahraga: formData.get('skill_olahraga'),
        skill_seni: formData.get('skill_seni'),
        skill_musik: formData.get('skill_musik'),
        prefer_kerja_tim: formData.get('prefer_kerja_tim'),
        prefer_kerja_individu: formData.get('prefer_kerja_individu'),
        prefer_dalam_ruangan: formData.get('prefer_dalam_ruangan'),
        prefer_luar_ruangan: formData.get('prefer_luar_ruangan')
    };

    try {
        const loadingElement = document.getElementById('loadingIndicator');
        const resultElement = document.getElementById('recommendationResult');
        
        if (loadingElement) loadingElement.classList.remove('hidden');
        
        const response = await fetch('http://localhost:3000/api/recommend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Gagal mendapatkan rekomendasi');
        }

        const result = await response.json();
        
        if (loadingElement) loadingElement.classList.add('hidden');
        
        if (resultElement) {
            resultElement.innerHTML = generateRecommendationHTML(result);
            resultElement.classList.remove('hidden');
            // Scroll ke hasil
            resultElement.scrollIntoView({ behavior: 'smooth' });
        }

    } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat memproses rekomendasi. Silakan coba lagi.');
    }
}

/**
 * Menghasilkan HTML untuk menampilkan rekomendasi
 * @param {Array} recommendations - Array rekomendasi karir
 * @returns {string} HTML string
 */
function generateRecommendationHTML(result) {
    const { topRecommendations, confidenceScore, mainField, additionalInfo } = result;

    let html = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Rekomendasi Karir</h3>
            
            <div class="mb-6">
                <p class="text-lg mb-2">Bidang Utama: <span class="font-semibold">${mainField}</span></p>
                <p class="text-gray-600">${additionalInfo.fieldDescription}</p>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">Tingkat Kepercayaan: ${confidenceScore}%</p>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="text-xl font-semibold mb-3">Top 5 Rekomendasi Karir:</h4>
                <div class="space-y-3">
                    ${topRecommendations.map((rec, index) => `
                        <div class="p-3 ${index === 0 ? 'bg-blue-50' : 'bg-gray-50'} rounded-lg">
                            <p class="font-medium">${index + 1}. ${rec.career}</p>
                            <p class="text-sm text-gray-600">Probabilitas: ${rec.probability}%</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="mb-6">
                <h4 class="text-xl font-semibold mb-3">Skill yang Dibutuhkan:</h4>
                <div class="flex flex-wrap gap-2">
                    ${additionalInfo.requiredSkills.map(skill => `
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">${skill}</span>
                    `).join('')}
                </div>
            </div>

            <div class="mb-4">
                <h4 class="text-xl font-semibold mb-3">Jalur Pendidikan:</h4>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="font-medium mb-2">Program Studi: ${additionalInfo.educationPath.degree}</p>
                    <p class="text-sm text-gray-600 mb-2">Durasi: ${additionalInfo.educationPath.duration}</p>
                    <div class="mt-2">
                        <p class="font-medium mb-1">Sertifikasi yang Disarankan:</p>
                        <ul class="list-disc list-inside text-sm text-gray-600">
                            ${additionalInfo.educationPath.certifications.map(cert => `
                                <li>${cert}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    return html;
}
// }

/**
 * Menampilkan hasil rekomendasi
 * @param {Object} recommendationData - Data rekomendasi
 */
function displayRecommendation(recommendationData) {
    const formContainer = document.getElementById('formContainer');
    const resultPage = document.getElementById('resultPage');
    const recommendationResultDiv = document.getElementById('recommendationResult');

    if (formContainer) formContainer.classList.add('hidden');
    if (resultPage) resultPage.classList.remove('hidden');

    if (recommendationResultDiv) {
        recommendationResultDiv.innerHTML = `
            <div><strong>ID Pengguna:</strong> ${recommendationData.userId}</div>
            <div><strong>Jurusan Rekomendasi:</strong> ${recommendationData.jurusan_rekomendasi}</div>
            <div><strong>Karir Rekomendasi:</strong> ${recommendationData.karir_rekomendasi}</div>
            <div><strong>Skor Probabilitas:</strong> ${(recommendationData.skor_probabilitas * 100).toFixed(2)}%</div>
            <div><strong>Cluster ID:</strong> ${recommendationData.cluster_id}</div>
            <div><strong>Alasan Rekomendasi:</strong></div>
            <p>${recommendationData.alasan}</p>
            <div><strong>Saran Peningkatan Skill:</strong></div>
            <p>${recommendationData.saran_skill}</p>
            <div><strong>Kebutuhan Pasar Terkait:</strong></div>
            <p>${recommendationData.kebutuhan_pasar}</p>
        `;
    }
}

/**
 * Menampilkan pesan error
 * @param {string} message - Pesan error yang akan ditampilkan
 */
function displayError(message) {
    const recommendationResultDiv = document.getElementById('recommendationResult');
    const formContainer = document.getElementById('formContainer');
    const resultPage = document.getElementById('resultPage');

    if (formContainer) formContainer.classList.add('hidden');
    if (resultPage) resultPage.classList.remove('hidden');

    if (recommendationResultDiv) {
        recommendationResultDiv.innerHTML = `<p class="text-red-500"><strong>Error:</strong> ${message}</p>`;
    }
}

/**
 * Mengatur ulang form ke kondisi awal
 */
function resetForm() {
    const form = document.getElementById('recommendationForm');
    const formContainer = document.getElementById('formContainer');
    const resultPage = document.getElementById('resultPage');

    if (form) form.reset();
    currentStep = 1;
    updateStepVisibility();
    updateProgressBar();

    if (formContainer) formContainer.classList.remove('hidden');
    if (resultPage) resultPage.classList.add('hidden');

    // Bersihkan pesan error
    document.querySelectorAll('.error-message').forEach(el => {
        el.classList.add('hidden');
        el.textContent = '';
    });
    document.querySelectorAll('.border-red-500').forEach(el => {
        el.classList.remove('border-red-500');
    });
}

/**
 * Menampilkan atau menyembunyikan loading indicator
 * @param {boolean} isLoading - True jika loading, false jika tidak
 */
function showLoading(isLoading) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    if (loadingIndicator) {
        if (isLoading) {
            loadingIndicator.classList.remove('hidden');
        } else {
            loadingIndicator.classList.add('hidden');
        }
    }
}