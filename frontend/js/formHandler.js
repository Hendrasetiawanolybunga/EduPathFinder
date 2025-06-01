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
 * @param {Event} event - Event submit
 */
async function handleSubmit(event) {
    event.preventDefault();

    if (!validateStep(currentStep)) {
        return; // Jangan submit jika validasi terakhir gagal
    }

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Konversi usia ke number
    if (data.usia) {
        data.usia = parseInt(data.usia);
    }

    showLoading(true);

    try {
        const response = await fetch('/api/recommend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        showLoading(false);

        if (response.ok && result.status === 'success') {
            displayRecommendation(result.data);
        } else {
            displayError(result.message || 'Terjadi kesalahan saat mengambil rekomendasi.');
        }
    } catch (error) {
        showLoading(false);
        console.error('Error submitting form:', error);
        displayError('Tidak dapat terhubung ke server. Silakan coba lagi nanti.');
    }
}

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