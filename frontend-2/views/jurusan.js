/**
 * jurusan.js - View untuk halaman rekomendasi jurusan
 */

export class JurusanView {
    constructor(container, apiModel) {
        this.container = container;
        this.apiModel = apiModel;
    }

    async initialize() {
        try {
            const jurusanList = await this.apiModel.getJurusan();
            this.render(jurusanList);
        } catch (error) {
            console.error('Error loading jurusan:', error);
            this.renderError();
        }
    }

    cleanup() {
        // Cleanup if needed
    }

    render(jurusanList) {
        this.container.innerHTML = `
            <div class="py-5">
                <h2 class="text-center mb-5">Rekomendasi Jurusan</h2>
                
                <!-- Search & Filter -->
                <div class="row justify-content-center mb-5">
                    <div class="col-md-6">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Cari jurusan..." id="searchJurusan">
                            <button class="btn btn-navy" type="button">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Jurusan Cards -->
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    ${jurusanList.map(jurusan => `
                        <div class="col">
                            <div class="card h-100 hover-shadow">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <div class="icon-container bg-navy text-white rounded-circle p-3 me-3">
                                            <i class="bi bi-mortarboard-fill"></i>
                                        </div>
                                        <h3 class="card-title h5 mb-0">${jurusan.nama}</h3>
                                    </div>
                                    <p class="card-text text-muted">${jurusan.deskripsi}</p>
                                </div>
                                <div class="card-footer bg-transparent border-0">
                                    <button class="btn btn-outline-navy w-100" onclick="alert('Fitur detail jurusan akan segera hadir!')">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Info Section -->
                <div class="mt-5 pt-5 text-center">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <h3 class="h4 mb-4">Bagaimana Memilih Jurusan yang Tepat?</h3>
                            <p class="text-muted mb-4">Pemilihan jurusan adalah langkah penting dalam perjalanan karirmu. Pertimbangkan minat, bakat, dan prospek karir saat memilih jurusan.</p>
                            <a href="#/karir" class="btn btn-navy">Cek Rekomendasi Karir</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Setup search functionality
        const searchInput = document.getElementById('searchJurusan');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e, jurusanList));
        }
    }

    renderError() {
        this.container.innerHTML = `
            <div class="py-5 text-center">
                <div class="alert alert-danger d-inline-block">
                    <i class="bi bi-exclamation-triangle me-2"></i>
                    Terjadi kesalahan saat memuat data jurusan. Silakan coba lagi nanti.
                </div>
            </div>
        `;
    }

    handleSearch(e, jurusanList) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredJurusan = jurusanList.filter(jurusan =>
            jurusan.nama.toLowerCase().includes(searchTerm) ||
            jurusan.deskripsi.toLowerCase().includes(searchTerm)
        );
        this.render(filteredJurusan);
    }
}