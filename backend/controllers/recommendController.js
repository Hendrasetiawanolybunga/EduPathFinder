/**
 * recommendController.js - Controller untuk menangani logika rekomendasi karir
 */

const tf = require('@tensorflow/tfjs');
const path = require('path');
const fs = require('fs').promises;

// Path ke model TensorFlow.js
const MODEL_PATH = path.join(__dirname, '../../ml-model-2/model_tfjs/model.json');

// Cache untuk model
let model = null;

/**
 * Memuat model TensorFlow.js
 */
async function loadModel() {
    if (!model) {
        try {
            model = await tf.loadLayersModel('file://' + MODEL_PATH);
            console.log('Model berhasil dimuat');
        } catch (error) {
            console.error('Error saat memuat model:', error);
            throw new Error('Gagal memuat model machine learning');
        }
    }
    return model;
}

/**
 * Memproses input pengguna menjadi tensor yang sesuai
 * @param {Object} userData - Data input pengguna
 * @returns {tf.Tensor} - Tensor yang siap untuk prediksi
 */
function preprocessInput(userData) {
    // Sesuaikan dengan format input yang diharapkan model
    const inputFeatures = [
        userData.nilai_matematika,
        userData.nilai_ipa,
        userData.nilai_ips,
        userData.nilai_bahasa,
        userData.minat_sains,
        userData.minat_sosial,
        userData.minat_bahasa,
        userData.minat_kejuruan,
        userData.skill_komputer,
        userData.skill_olahraga,
        userData.skill_seni,
        userData.skill_musik,
        userData.prefer_kerja_tim,
        userData.prefer_kerja_individu,
        userData.prefer_dalam_ruangan,
        userData.prefer_luar_ruangan
    ];

    return tf.tensor2d([inputFeatures], [1, 16]);
}

/**
 * Controller untuk mendapatkan rekomendasi karir
 */
/**
 * Mendapatkan deskripsi bidang karir
 */
function getFieldDescription(field) {
    const descriptions = {
        'Teknologi': 'Bidang yang fokus pada pengembangan dan penerapan teknologi informasi, meliputi pengembangan software, analisis data, keamanan siber, dan infrastruktur IT.',
        'Sains': 'Bidang yang melibatkan penelitian ilmiah, eksperimen, dan pengembangan pengetahuan dalam berbagai disiplin ilmu alam.',
        'Kesehatan': 'Bidang yang berkaitan dengan pelayanan kesehatan, pengobatan, dan perawatan pasien, serta penelitian medis.',
        'Bisnis': 'Bidang yang mencakup manajemen, keuangan, pemasaran, dan pengembangan strategi bisnis dalam berbagai skala organisasi.',
        'Seni & Desain': 'Bidang yang memadukan kreativitas dan keahlian teknis dalam menciptakan karya visual, desain produk, dan pengalaman pengguna.',
        'Pendidikan': 'Bidang yang berfokus pada pengajaran, pengembangan kurikulum, dan pembimbingan siswa di berbagai tingkat pendidikan.',
        'Hukum & Sosial': 'Bidang yang berkaitan dengan sistem hukum, kebijakan publik, dan pelayanan sosial untuk kesejahteraan masyarakat.',
        'Lainnya': 'Bidang karir yang memiliki karakteristik unik dan spesifik di luar kategori utama.'
    };
    return descriptions[field] || descriptions['Lainnya'];
}

/**
 * Mendapatkan daftar skill yang dibutuhkan untuk karir tertentu
 */
function getRequiredSkills(career) {
    const skillsets = {
        'Software Developer': ['Pemrograman', 'Problem Solving', 'Sistem Design', 'Version Control', 'Testing'],
        'Data Scientist': ['Statistik', 'Machine Learning', 'Python/R', 'SQL', 'Data Visualization'],
        'Doctor': ['Diagnosis', 'Patient Care', 'Medical Knowledge', 'Communication', 'Decision Making'],
        'Business Analyst': ['Analisis Data', 'Business Process', 'Communication', 'Problem Solving', 'Documentation'],
        'Graphic Designer': ['Design Tools', 'Typography', 'Color Theory', 'Layout Design', 'Creativity'],
        'Teacher': ['Communication', 'Lesson Planning', 'Classroom Management', 'Assessment', 'Adaptability']
    };
    
    // Default skills jika karir spesifik tidak ditemukan
    return skillsets[career] || [
        'Critical Thinking',
        'Communication',
        'Problem Solving',
        'Teamwork',
        'Adaptability'
    ];
}

/**
 * Mendapatkan informasi jalur pendidikan untuk karir tertentu
 */
function getEducationPath(career) {
    const educationPaths = {
        'Software Developer': {
            degree: 'S1 Teknik Informatika/Ilmu Komputer',
            certifications: ['Full-Stack Development', 'Cloud Computing', 'Mobile Development'],
            duration: '4 tahun'
        },
        'Data Scientist': {
            degree: 'S1/S2 Data Science/Statistik/Ilmu Komputer',
            certifications: ['Machine Learning', 'Big Data Analytics', 'Statistical Analysis'],
            duration: '4-6 tahun'
        },
        'Doctor': {
            degree: 'S1 Kedokteran + Internship',
            certifications: ['Lisensi Dokter', 'Spesialisasi (opsional)'],
            duration: '5.5-11 tahun'
        },
        'Business Analyst': {
            degree: 'S1 Bisnis/Ekonomi/Sistem Informasi',
            certifications: ['Business Analysis', 'Project Management', 'Data Analytics'],
            duration: '4 tahun'
        }
    };

    // Default education path jika karir spesifik tidak ditemukan
    return educationPaths[career] || {
        degree: 'S1 pada bidang terkait',
        certifications: ['Professional Certification', 'Skill-based Training'],
        duration: '4 tahun'
    };
}

/**
 * Controller untuk mendapatkan rekomendasi karir
 */
const getRecommendation = async (request, h) => {
    try {
        // Validasi input
        const userData = request.payload;
        if (!userData) {
            return h.response({
                status: 'error',
                message: 'Data input tidak valid'
            }).code(400);
        }

        // Muat model jika belum dimuat
        const model = await loadModel();

        // Preprocessing input
        const inputTensor = preprocessInput(userData);

        // Lakukan prediksi
        const prediction = await model.predict(inputTensor);
        const predictionData = await prediction.data();

        // Definisi label kelas (72 profesi)
        const careerLabels = [
            'Accountant', 'Actor', 'Architect', 'Artist', 'Astronomer',
            'Audiologist', 'Banker', 'Biologist', 'Business Analyst', 'Carpenter',
            'Chef', 'Chemist', 'Civil Engineer', 'Computer Programmer', 'Counselor',
            'Dancer', 'Data Scientist', 'Dentist', 'Designer', 'Doctor',
            'Economist', 'Electrical Engineer', 'Environmental Scientist', 'Fashion Designer', 'Financial Analyst',
            'Firefighter', 'Geologist', 'Graphic Designer', 'Healthcare Administrator', 'Human Resources Manager',
            'Industrial Designer', 'Interior Designer', 'IT Consultant', 'Journalist', 'Judge',
            'Lawyer', 'Librarian', 'Marketing Manager', 'Mathematician', 'Mechanical Engineer',
            'Medical Technologist', 'Musician', 'Nurse', 'Nutritionist', 'Optometrist',
            'Pharmacist', 'Photographer', 'Physical Therapist', 'Physicist', 'Police Officer',
            'Political Scientist', 'Professor', 'Psychologist', 'Public Relations Manager', 'Real Estate Agent',
            'Research Scientist', 'Sales Manager', 'Social Worker', 'Software Developer', 'Speech Therapist',
            'Sports Coach', 'Statistician', 'Systems Analyst', 'Teacher', 'Technical Writer',
            'Translator', 'Urban Planner', 'UX Designer', 'Veterinarian', 'Video Game Developer',
            'Web Developer', 'Writer', 'Zoologist', 'Network Engineer', 'Database Administrator',
            'Cloud Architect', 'Cybersecurity Analyst'
        ];

        // Konversi hasil prediksi ke rekomendasi
        const predictions = Array.from(predictionData);
        
        // Dapatkan top 5 rekomendasi
        const topPredictions = predictions
            .map((prob, index) => ({ probability: prob, career: careerLabels[index] }))
            .sort((a, b) => b.probability - a.probability)
            .slice(0, 5);

        // Hitung confidence score (probability tertinggi)
        const confidenceScore = Math.round(topPredictions[0].probability * 100);

        // Kelompokkan rekomendasi berdasarkan bidang
        const careerFields = {
            'Teknologi': ['Software Developer', 'Data Scientist', 'Web Developer', 'Computer Programmer', 'Systems Analyst', 'Network Engineer', 'Database Administrator', 'Cloud Architect', 'Cybersecurity Analyst'],
            'Sains': ['Biologist', 'Chemist', 'Physicist', 'Research Scientist', 'Environmental Scientist', 'Astronomer', 'Medical Technologist'],
            'Kesehatan': ['Doctor', 'Nurse', 'Pharmacist', 'Dentist', 'Veterinarian', 'Physical Therapist', 'Optometrist', 'Audiologist'],
            'Bisnis': ['Business Analyst', 'Financial Analyst', 'Marketing Manager', 'Sales Manager', 'Accountant', 'Real Estate Agent', 'Human Resources Manager'],
            'Seni & Desain': ['Graphic Designer', 'UX Designer', 'Fashion Designer', 'Interior Designer', 'Industrial Designer', 'Artist', 'Photographer'],
            'Pendidikan': ['Teacher', 'Professor', 'Counselor', 'Librarian'],
            'Hukum & Sosial': ['Lawyer', 'Judge', 'Social Worker', 'Political Scientist', 'Psychologist', 'Public Relations Manager']
        };

        // Tentukan bidang utama berdasarkan rekomendasi teratas
        const mainField = Object.entries(careerFields).find(([field, careers]) => 
            careers.includes(topPredictions[0].career)
        )?.[0] || 'Lainnya';

        // Format hasil rekomendasi
        const recommendations = {
            topRecommendations: topPredictions.map(pred => ({
                career: pred.career,
                probability: Math.round(pred.probability * 100)
            })),
            confidenceScore,
            mainField,
            additionalInfo: {
                fieldDescription: getFieldDescription(mainField),
                requiredSkills: getRequiredSkills(topPredictions[0].career),
                educationPath: getEducationPath(topPredictions[0].career)
            }
        };

        return h.response(recommendations).code(200);

    } catch (error) {
        console.error('Error dalam getRecommendation:', error);

        return h.response({
            status: 'error',
            message: 'Terjadi kesalahan saat memproses rekomendasi',
            error: error.message
        }).code(500);
    }
};

module.exports = {
    getRecommendation
};