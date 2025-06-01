
import sys
import json
import random


def preprocess_data(user_data):
    """Fungsi untuk melakukan preprocessing data input pengguna."""
   
    print(f"Data mentah diterima: {user_data}", file=sys.stderr)
    
   
    processed_features = [
        user_data.get('usia', 20), 
        len(user_data.get('minat_utama', '')),
        len(user_data.get('hobi', '')),
        len(user_data.get('keahlian', '')),
        
    ]
    print(f"Fitur setelah pra-pemrosesan (contoh): {processed_features}", file=sys.stderr)
    return processed_features

def load_model(model_path='../models/model_placeholder.h5'):
    """Fungsi untuk memuat model Machine Learning."""
    
    print(f"Placeholder: Model akan dimuat dari {model_path}", file=sys.stderr)
    return None 

def predict(model, processed_data):
    """Fungsi untuk melakukan prediksi menggunakan model."""
    
    cluster_id = random.randint(0, 4) # Asumsi ada 5 cluster
    score = random.random()
    
    print(f"Hasil prediksi (contoh): Cluster ID={cluster_id}, Skor={score}", file=sys.stderr)
    return cluster_id, score

def get_recommendation_details(cluster_id, score, user_data):
    """Fungsi untuk mendapatkan detail rekomendasi berdasarkan hasil prediksi."""
  
    
    jurusan_options = [
        "Teknik Informatika", "Sistem Informasi", "Desain Komunikasi Visual", 
        "Manajemen Bisnis", "Psikologi", "Sastra Inggris", "Ilmu Komunikasi"
    ]
    karir_options = [
        "Software Engineer", "Data Analyst", "UI/UX Designer", 
        "Product Manager", "HR Specialist", "Content Writer", "Digital Marketer"
    ]
    
    alasan_template = (
        f"Berdasarkan minat Anda pada '{user_data.get('minat_utama', 'tidak disebutkan')}' dan "
        f"keahlian '{user_data.get('keahlian', 'tidak disebutkan')}', serta preferensi "
        f"untuk bekerja di '{user_data.get('preferensi_tempat_kerja', 'tidak disebutkan')}', "
        f"sistem merekomendasikan jalur ini. Gaya belajar Anda '{user_data.get('gaya_belajar', 'tidak disebutkan')}' "
        f"juga mendukung pilihan ini."
    )
    
    saran_skill_template = (
        "Untuk meningkatkan peluang Anda, pertimbangkan untuk mempelajari: Python, SQL, "
        "dasar-dasar machine learning, dan teknik presentasi yang baik. "
        "Asah juga kemampuan problem-solving dan kerja tim Anda."
    )
    
    kebutuhan_pasar_template = (
        "Saat ini, terdapat permintaan tinggi untuk profesional di bidang teknologi dan data. "
        "Perusahaan mencari individu yang adaptif, memiliki kemampuan analitis, "
        "dan mau terus belajar hal baru. Posisi entry-level sering tersedia."
    )
    
    return {
        "jurusan_rekomendasi": random.choice(jurusan_options),
        "karir_rekomendasi": random.choice(karir_options),
        "skor_probabilitas": score,
        "cluster_id": int(cluster_id),
        "alasan": alasan_template,
        "saran_skill": saran_skill_template,
        "kebutuhan_pasar": kebutuhan_pasar_template
    }

if __name__ == "__main__":
    if len(sys.argv) > 1:
       
        input_data_json = sys.argv[1]
        try:
            user_data = json.loads(input_data_json)
            
        
            dummy_cluster_id = random.randint(0, 4)
            dummy_score = random.random()
            
         
            recommendation = get_recommendation_details(dummy_cluster_id, dummy_score, user_data)
            
         
            print(json.dumps(recommendation))
            
        except json.JSONDecodeError as e:
            print(json.dumps({"error": f"Gagal memparsing JSON input: {e}"}), file=sys.stderr)
            sys.exit(1)
        except Exception as e:
            print(json.dumps({"error": f"Terjadi kesalahan dalam script Python: {e}"}), file=sys.stderr)
            sys.exit(1)
    else:
        print(json.dumps({"error": "Tidak ada data input yang diberikan ke script Python."}), file=sys.stderr)
        sys.exit(1)