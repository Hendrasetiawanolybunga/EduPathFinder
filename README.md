# EudPathFinder - Aplikasi Rekomendasi Jurusan dan Karir

EudPathFinder adalah aplikasi web berbasis machine learning yang bertujuan untuk membantu siswa SMA/SMK, mahasiswa, dan pencari kerja dalam menemukan rekomendasi jurusan kuliah atau karir yang sesuai dengan minat, bakat, dan input personal lainnya.

##  Tujuan Proyek

- Memberikan rekomendasi yang dipersonalisasi kepada pengguna.
- Mengintegrasikan model machine learning (klastering) ke dalam aplikasi web interaktif.
- Membangun platform yang mudah digunakan dengan antarmuka modern dan responsif.
- Menerapkan arsitektur MVP (Model-View-Presenter) untuk backend dan PWA (Progressive Web App) untuk frontend.

##  Fitur Utama

- **Formulir Input Multi-Step:** Pengguna mengisi data diri, minat, keahlian, dan preferensi melalui formulir yang intuitif.
- **Rekomendasi Berbasis ML:** Model machine learning TensorFlow (klastering) menganalisis input pengguna untuk memberikan rekomendasi.
- **Hasil Rekomendasi Lengkap:** Menampilkan jurusan atau karir yang direkomendasikan, skor probabilitas, alasan rekomendasi, saran peningkatan skill, dan informasi kebutuhan pasar.
- **RESTful API:** Backend Node.js dengan Hapi.js menyediakan API untuk frontend.
- **Riwayat Rekomendasi:** (Fitur potensial) Menyimpan dan menampilkan riwayat rekomendasi pengguna.
- **PWA Ready:** Aplikasi dapat diinstal dan memiliki kemampuan offline dasar.

##  Desain Antarmuka (Frontend)

- **Teknologi:** HTML5, Tailwind CSS (via CDN atau dibundel), JavaScript Native (ES6 modular).
- **Bundler:** Webpack dengan Babel.
- **Desain:** Responsif (mobile-first), modern, dan bersih.
- **Warna Utama:** Biru Navy (`#1E3A8A`) dan Putih (`#FFFFFF`).
- **Ikon:** Font Awesome (via CDN).
- **Fitur UI:** Loading indicator, validasi input, error handling, transisi lembut antar step form.

##  Back-End (RESTful API)

- **Teknologi:** Node.js dengan Hapi.js.
- **Arsitektur:** Modular berbasis MVC/MVP (routes, controllers, services).
- **Database:** SQLite untuk menyimpan riwayat input dan hasil rekomendasi (jika diimplementasikan).
- **Integrasi ML:** Menjalankan script Python (TensorFlow) menggunakan `child_process` untuk inferensi model.
- **API Endpoint Utama:**
  - `POST /api/recommend`: Mengirim data input dan mendapatkan hasil rekomendasi.
  - `GET /api/history`: (Jika diimplementasikan) Mengambil riwayat rekomendasi.

##  Machine Learning

- **Teknologi:** TensorFlow (Python).
- **Model:** Klastering (misalnya KMeans, DBSCAN) untuk mengelompokkan pengguna berdasarkan input.
- **Input Model:** Data numerik dan kategorikal yang telah diproses.
- **Output Model:** Cluster ID, skor/probabilitas, dan interpretasi dasar.
- **Inference:** Dipanggil secara lokal dari backend Node.js.

##  Struktur Folder Proyek

```''
EudPathFinder/
├── backend/
│   ├── config/         # Konfigurasi (database, ml)
│   ├── controllers/    # Logika request/response
│   ├── data/           # File database SQLite
│   ├── routes/         # Definisi endpoint API
│   ├── services/       # Logika bisnis
│   ├── server.js       # Entry point backend
│   ├── package.json
│   └── .env            # Variabel lingkungan
├── frontend/
│   ├── css/            # File CSS (style.css)
│   ├── img/            # Aset gambar (termasuk ikon PWA)
│   │   └── icons/
│   ├── js/             # Kode JavaScript (index.js, modules)
│   ├── index.html      # Halaman utama
│   ├── manifest.json   # Manifest PWA
│   ├── package.json
│   ├── webpack.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── babel.config.js
├── ml-model/
│   ├── data/           # Dataset (jika ada untuk pelatihan)
│   ├── models/         # Model ML yang sudah dilatih (misalnya .h5)
│   ├── notebooks/      # (Opsional) Jupyter notebooks untuk eksplorasi & pelatihan
│   ├── scripts/        # Script Python untuk preprocessing, training, predict
│   └── requirements.txt # Dependensi Python
└── README.md
```

##  Instalasi dan Menjalankan Proyek

### Prasyarat

- Node.js (versi LTS direkomendasikan)
- npm (biasanya terinstal bersama Node.js)
- Python (versi 3.8+ direkomendasikan)
- pip (biasanya terinstal bersama Python)

### Backend

1.  **Masuk ke direktori backend:**
    ```bash
    cd backend
    ```
2.  **Install dependensi Node.js:**
    ```bash
    npm install
    ```
3.  **Buat file `.env`** dari contoh `.env.example` (jika ada) atau konfigurasikan variabel lingkungan seperti `PORT`, `DB_PATH`, `ML_SCRIPT_PATH`.
4.  **Jalankan server backend:**
    ```bash
    npm start
    # atau untuk development dengan nodemon
    # npm run dev
    ```
    Server backend akan berjalan di `http://localhost:3000` (atau port yang dikonfigurasi).

### Frontend

1.  **Masuk ke direktori frontend:**
    ```bash
    cd frontend
    ```
2.  **Install dependensi Node.js (untuk Webpack, Babel, dll.):**
    ```bash
    npm install
    ```
3.  **Jalankan server development frontend:**
    ```bash
    npm start
    ```
    Aplikasi frontend akan terbuka di browser, biasanya di `http://localhost:8080`.

### Machine Learning Model

1.  **Masuk ke direktori ml-model:**
    ```bash
    cd ml-model
    ```
2.  **Buat virtual environment :**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    # venv\Scripts\activate    # Windows
    ```
3.  **Install dependensi Python:**
    ```bash
    pip install -r requirements.txt
    # (Buat file requirements.txt berisi TensorFlow, Pandas, NumPy, dll.)
    ```
4.  Pastikan path ke script `predict.py` sudah benar di file `.env` backend.

## ✅ Fitur yang Ada 

- [x] Struktur folder proyek dibuat.
- [x] `package.json` untuk backend dan frontend dibuat.
- [x] Konfigurasi dasar server Hapi.js di `backend/server.js`.
- [x] Konfigurasi dasar Webpack di `frontend/webpack.config.js`.
- [x] File HTML (`index.html`), CSS (`style.css`), dan JS (`index.js`) dasar untuk frontend.
- [x] `manifest.json` untuk PWA.
- [ ] Formulir input lengkap dengan validasi di frontend.
- [ ] Halaman hasil rekomendasi di frontend.
- [ ] API endpoint `POST /api/recommend` berfungsi.
- [ ] Integrasi `child_process` untuk memanggil script Python dari backend.
- [ ] Script Python `predict.py` placeholder yang mengembalikan output dummy.
- [ ] Tampilan responsif dasar.
- [ ] Service worker terdaftar untuk PWA.
- [ ] Kode terstruktur sesuai arsitektur MVP/MVC.

## 🛠️ Alat dan Teknologi

- **Frontend:** HTML, Tailwind CSS, Vanilla JavaScript (ES6), Webpack, Babel, Font Awesome.
- **Backend:** Node.js, Hapi.js, SQLite.
- **Machine Learning:** Python, TensorFlow, Pandas, NumPy.
- **Lainnya:** Git, npm.


_Proyek ini adalah bagian dari Capstone Project._
