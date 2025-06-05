/**
 * model.js - Implementasi Model dalam pola MVP
 */

class CareerRecommendationModel {
    constructor() {
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async predictCareer(formData) {
        try {
            const preprocessedData = this.preprocessFormData(formData);
            const response = await fetch(`${this.apiBaseUrl}/api/recommend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preprocessedData)
            });

            if (!response.ok) {
                throw new Error('Gagal mendapatkan rekomendasi');
            }

            const result = await response.json();
            return this.processRecommendation(result);
        } catch (error) {
            console.error('Error in predictCareer:', error);
            throw error;
        }
    }

    preprocessFormData(formData) {
        // Konversi nilai-nilai form menjadi format yang sesuai dengan model ML
        return {
            nilai_matematika: parseFloat(formData.nilai_matematika) / 100,
            nilai_ipa: parseFloat(formData.nilai_ipa) / 100,
            nilai_ips: parseFloat(formData.nilai_ips) / 100,
            nilai_bahasa: parseFloat(formData.nilai_bahasa) / 100,
            minat_sains: parseFloat(formData.minat_sains) / 10,
            minat_sosial: parseFloat(formData.minat_sosial) / 10,
            minat_bahasa: parseFloat(formData.minat_bahasa) / 10,
            minat_kejuruan: parseFloat(formData.minat_kejuruan) / 10,
            skill_komputer: parseFloat(formData.skill_komputer) / 10,
            skill_olahraga: parseFloat(formData.skill_olahraga) / 10,
            skill_seni: parseFloat(formData.skill_seni) / 10,
            skill_musik: parseFloat(formData.skill_musik) / 10,
            prefer_kerja_tim: formData.prefer_kerja_tim === 'true' ? 1 : 0,
            prefer_kerja_individu: formData.prefer_kerja_individu === 'true' ? 1 : 0,
            prefer_dalam_ruangan: formData.prefer_dalam_ruangan === 'true' ? 1 : 0,
            prefer_luar_ruangan: formData.prefer_luar_ruangan === 'true' ? 1 : 0
        };
    }

    processRecommendation(result) {
        // Proses hasil prediksi dari backend
        return {
            topRecommendations: result.topRecommendations,
            confidenceScore: result.confidenceScore,
            mainField: result.mainField,
            additionalInfo: {
                fieldDescription: result.additionalInfo.fieldDescription,
                requiredSkills: result.additionalInfo.requiredSkills,
                educationPath: result.additionalInfo.educationPath
            }
        };
    }

    async saveHistory(recommendationData) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/api/history`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recommendationData)
            });

            if (!response.ok) {
                throw new Error('Gagal menyimpan riwayat');
            }

            return await response.json();
        } catch (error) {
            console.error('Error in saveHistory:', error);
            throw error;
        }
    }
}

export default CareerRecommendationModel;