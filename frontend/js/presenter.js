/**
 * presenter.js - Implementasi Presenter dalam pola MVP
 */

class CareerRecommendationPresenter {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.currentStep = 1;
        this.totalSteps = 3;
        this.formData = {};
    }

    init() {
        this.view.initializeView();
        this.view.bindNextStep((data) => this.handleNextStep(data));
        this.view.bindPrevStep(() => this.handlePrevStep());
        this.view.bindSubmit((data) => this.handleSubmit(data));
        this.view.bindReset(() => this.handleReset());
    }

    handleNextStep(stepData) {
        if (this.validateStep(stepData)) {
            Object.assign(this.formData, stepData);
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.view.updateStep(this.currentStep);
                this.view.updateProgressBar(this.currentStep);
            }
        }
    }

    handlePrevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.view.updateStep(this.currentStep);
            this.view.updateProgressBar(this.currentStep);
        }
    }

    async handleSubmit(finalStepData) {
        try {
            Object.assign(this.formData, finalStepData);
            if (this.validateStep(finalStepData)) {
                this.view.showLoading();
                const result = await this.model.predictCareer(this.formData);
                this.view.showResult(result);
            }
        } catch (error) {
            this.view.showError('Terjadi kesalahan saat memproses data.');
        } finally {
            this.view.hideLoading();
        }
    }

    handleReset() {
        this.currentStep = 1;
        this.formData = {};
        this.view.resetForm();
        this.view.updateStep(this.currentStep);
        this.view.updateProgressBar(this.currentStep);
    }

    validateStep(data) {
        // Implementasi validasi sesuai dengan langkah
        const requiredFields = {
            1: ['nilai_matematika', 'nilai_ipa', 'nilai_ips', 'nilai_bahasa'],
            2: ['minat_sains', 'minat_sosial', 'minat_bahasa', 'minat_kejuruan'],
            3: ['skill_komputer', 'skill_olahraga', 'skill_seni', 'skill_musik',
                'prefer_kerja_tim', 'prefer_kerja_individu', 'prefer_dalam_ruangan', 'prefer_luar_ruangan']
        };

        const stepFields = requiredFields[this.currentStep];
        if (!stepFields) return true;

        const isValid = stepFields.every(field => {
            const value = data[field];
            return value !== undefined && value !== '';
        });

        if (!isValid) {
            this.view.showError('Mohon lengkapi semua field yang diperlukan.');
            return false;
        }

        return true;
    }
}

export default CareerRecommendationPresenter;