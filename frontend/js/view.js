/**
 * view.js - Implementasi View dalam pola MVP
 */

class CareerRecommendationView {
    constructor() {
        this.initializeElements();
    }

    initializeElements() {
        // Form elements
        this.form = document.getElementById('recommendationForm');
        this.stepContainers = document.querySelectorAll('.form-step');
        this.progressSteps = document.querySelectorAll('.progress-step');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.resultContainer = document.getElementById('resultPage');
        this.errorContainer = document.getElementById('errorMessage');

        // Navigation elements
        this.nextButtons = document.querySelectorAll('.next-step');
        this.prevButtons = document.querySelectorAll('.prev-step');
        this.resetButton = document.getElementById('resetFormButton');
        this.submitButton = document.getElementById('submitButton');

        // Navigation menu
        this.menuButton = document.getElementById('menuButton');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.setupMobileMenu();
    }

    initializeView() {
        this.setupNavigationEvents();
        this.updateStep(1);
        this.updateProgressBar(1);
        this.hideResult();
        this.hideError();
    }

    setupNavigationEvents() {
        // Setup mobile menu toggle
        if (this.menuButton && this.mobileMenu) {
            this.menuButton.addEventListener('click', () => {
                this.mobileMenu.classList.toggle('hidden');
            });
        }

        // Setup smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    if (this.mobileMenu) {
                        this.mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    }

    setupMobileMenu() {
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.mobileMenu && !this.mobileMenu.contains(e.target) && 
                !this.menuButton.contains(e.target)) {
                this.mobileMenu.classList.add('hidden');
            }
        });
    }

    bindNextStep(handler) {
        this.nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                const stepData = this.collectStepData(this.getCurrentStep());
                handler(stepData);
            });
        });
    }

    bindPrevStep(handler) {
        this.prevButtons.forEach(button => {
            button.addEventListener('click', handler);
        });
    }

    bindSubmit(handler) {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                const finalStepData = this.collectStepData(this.getCurrentStep());
                handler(finalStepData);
            });
        }
    }

    bindReset(handler) {
        if (this.resetButton) {
            this.resetButton.addEventListener('click', handler);
        }
    }

    collectStepData(step) {
        const stepContainer = document.getElementById(`step${step}`);
        if (!stepContainer) return {};

        const formData = {};
        stepContainer.querySelectorAll('input, select, textarea').forEach(input => {
            if (input.type === 'radio' || input.type === 'checkbox') {
                formData[input.name] = input.checked.toString();
            } else {
                formData[input.name] = input.value;
            }
        });
        return formData;
    }

    getCurrentStep() {
        const activeStep = document.querySelector('.form-step.active');
        return activeStep ? parseInt(activeStep.dataset.step) : 1;
    }

    updateStep(step) {
        this.stepContainers.forEach(container => {
            container.classList.remove('active');
            if (parseInt(container.dataset.step) === step) {
                container.classList.add('active');
            }
        });
    }

    updateProgressBar(currentStep) {
        this.progressSteps.forEach(step => {
            const stepNumber = parseInt(step.dataset.step);
            if (stepNumber <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    showLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.classList.remove('hidden');
        }
    }

    hideLoading() {
        if (this.loadingIndicator) {
            this.loadingIndicator.classList.add('hidden');
        }
    }

    showResult(result) {
        if (this.resultContainer && this.form) {
            this.form.classList.add('hidden');
            this.resultContainer.classList.remove('hidden');

            const resultHtml = `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h2 class="text-2xl font-bold text-navy-700 mb-4">Rekomendasi Karir Untukmu</h2>
                    
                    <div class="space-y-4">
                        ${result.topRecommendations.map((rec, index) => `
                            <div class="p-4 ${index === 0 ? 'bg-navy-50' : 'bg-gray-50'} rounded-lg">
                                <h3 class="text-lg font-semibold text-navy-700">${index + 1}. ${rec.career}</h3>
                                <p class="text-gray-600 mt-2">${rec.description || 'Tidak ada deskripsi tersedia'}</p>
                                ${rec.confidence ? `<p class="text-sm text-navy-600 mt-1">Tingkat Kesesuaian: ${Math.round(rec.confidence * 100)}%</p>` : ''}
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-6 pt-4 border-t border-gray-200">
                        <h3 class="text-lg font-semibold text-navy-700 mb-2">Informasi Tambahan</h3>
                        <p class="text-gray-600">${result.additionalInfo || 'Tidak ada informasi tambahan'}</p>
                    </div>

                    <div class="mt-6 flex justify-center space-x-4">
                        <button id="resetFormButton" class="btn btn-secondary">Mulai Ulang</button>
                        <button onclick="window.print()" class="btn btn-primary">Cetak Hasil</button>
                    </div>
                </div>
            `;

            this.resultContainer.innerHTML = resultHtml;
        }
    }

    hideResult() {
        if (this.resultContainer) {
            this.resultContainer.classList.add('hidden');
        }
        if (this.form) {
            this.form.classList.remove('hidden');
        }
    }

    showError(message) {
        if (this.errorContainer) {
            this.errorContainer.textContent = message;
            this.errorContainer.classList.remove('hidden');
            setTimeout(() => this.hideError(), 5000);
        }
    }

    hideError() {
        if (this.errorContainer) {
            this.errorContainer.classList.add('hidden');
        }
    }

    resetForm() {
        if (this.form) {
            this.form.reset();
            this.hideResult();
            this.hideError();
        }
    }
}

export default CareerRecommendationView;