/**
 * home-view.js - Komponen tampilan untuk halaman utama
 */

class HomeView {
  static instance = null;

  static getInstance() {
    if (!HomeView.instance) {
      HomeView.instance = new HomeView();
    }
    return HomeView.instance;
  }
  constructor() {
    this.container = document.createElement('div');
    this.init();
  }

  init() {
    this.container.innerHTML = `
            <!-- Hero Section dengan CTA -->
            <section class="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-20">
                <div class="container mx-auto px-6">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 mb-8 md:mb-0">
                            <h1 class="text-4xl md:text-5xl font-bold mb-4">Temukan Jalur Karirmu</h1>
                            <p class="text-xl mb-8">Gunakan AI untuk menemukan karir yang sesuai dengan minat dan kemampuanmu</p>
                            <a href="#/karir" class="bg-white text-navy-700 py-3 px-8 rounded-full font-bold hover:bg-gray-100 transition duration-300">Mulai Sekarang</a>
                        </div>
                        <div class="md:w-1/2">
                            <img src="/img/icons/career-illustration.svg" alt="Career Illustration" class="w-full">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Karir Populer Section -->
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12 text-navy-700">Karir Populer</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Software Engineer Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-laptop-code text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Software Engineer</h3>
                                <p class="text-gray-600 mb-4">Kembangkan solusi teknologi untuk masa depan</p>
                                <a href="https://www.dicoding.com/jobs/software-engineer" target="_blank" class="text-navy-600 hover:text-navy-800 font-medium">Pelajari lebih lanjut →</a>
                            </div>
                        </div>

                        <!-- Data Scientist Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-chart-network text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Data Scientist</h3>
                                <p class="text-gray-600 mb-4">Analisis data untuk insight yang berharga</p>
                                <a href="https://www.kaggle.com/jobs" target="_blank" class="text-navy-600 hover:text-navy-800 font-medium">Pelajari lebih lanjut →</a>
                            </div>
                        </div>

                        <!-- UI/UX Designer Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-palette text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">UI/UX Designer</h3>
                                <p class="text-gray-600 mb-4">Desain pengalaman pengguna yang memukau</p>
                                <a href="https://www.behance.net/jobs" target="_blank" class="text-navy-600 hover:text-navy-800 font-medium">Pelajari lebih lanjut →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Jurusan Populer Section -->
            <section class="py-16">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12 text-navy-700">Jurusan Populer</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Teknik Informatika Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-microchip text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Teknik Informatika</h3>
                                <p class="text-gray-600 mb-4">Pelajari ilmu komputer dan pengembangan software</p>
                            </div>
                        </div>

                        <!-- Sistem Informasi Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-database text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Sistem Informasi</h3>
                                <p class="text-gray-600 mb-4">Kelola sistem informasi dan teknologi bisnis</p>
                            </div>
                        </div>

                        <!-- Data Science Card -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <div class="p-6">
                                <div class="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                                    <i class="fas fa-brain text-2xl text-navy-700"></i>
                                </div>
                                <h3 class="text-xl font-bold mb-2 text-navy-700">Data Science</h3>
                                <p class="text-gray-600 mb-4">Eksplorasi data dan machine learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tim Pengembang Section -->
            <section class="py-16 bg-gray-50">
                <div class="container mx-auto px-6">
                    <h2 class="text-3xl font-bold text-center mb-12 text-navy-700">Tim Pengembang</h2>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                        ${this.generateTeamMemberCards()}
                    </div>
                </div>
            </section>
        `;
  }

  generateTeamMemberCards() {
    const teamMembers = [
      { name: 'Pengembang 1', role: 'Machine Learning Engineer', image: 'img/team/dev1.svg' },
      { name: 'Pengembang 2', role: 'Frontend Developer', image: 'img/team/dev2.svg' },
      { name: 'Pengembang 3', role: 'Backend Developer', image: 'img/team/dev3.svg' },
      { name: 'Pengembang 4', role: 'UI/UX Designer', image: 'img/team/dev4.svg' },
      { name: 'Pengembang 5', role: 'Data Scientist', image: 'img/team/dev5.svg' },
    ];

    return teamMembers
      .map(
        (member) => `
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 text-center">
                <img src="${member.image}" alt="${member.name}" class="w-32 h-32 mx-auto mt-6 rounded-full object-cover">
                <div class="p-6">
                    <h3 class="text-lg font-bold mb-2 text-navy-700">${member.name}</h3>
                    <p class="text-gray-600 text-sm">${member.role}</p>
                </div>
            </div>
        `
      )
      .join('');
  }

  getElement() {
    return this.container;
  }
}

export default HomeView;
