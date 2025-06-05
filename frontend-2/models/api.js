/**
 * api.js - Model untuk menangani komunikasi dengan backend API
 */

const API_BASE_URL = 'http://localhost:3000/api';

export class ApiModel {
    static async getRecommendation(formData) {
        try {
            const response = await fetch(`${API_BASE_URL}/recommend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching recommendation:', error);
            throw error;
        }
    }

    static async getJurusan() {
        // Implementasi statis untuk daftar jurusan
        return [
            { id: 1, nama: 'Teknik Informatika', deskripsi: 'Mempelajari pengembangan perangkat lunak dan sistem komputer' },
            { id: 2, nama: 'Sistem Informasi', deskripsi: 'Fokus pada pengelolaan sistem informasi dalam organisasi' },
            { id: 3, nama: 'Manajemen Bisnis', deskripsi: 'Mempelajari strategi dan pengelolaan bisnis' },
            { id: 4, nama: 'Psikologi', deskripsi: 'Mempelajari perilaku dan mental manusia' },
            { id: 5, nama: 'Desain Komunikasi Visual', deskripsi: 'Fokus pada desain grafis dan komunikasi visual' }
        ];
    }
}