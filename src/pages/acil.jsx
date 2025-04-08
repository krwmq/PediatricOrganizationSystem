import React, { useState, useEffect } from 'react';

// Acil Durum Bileşeni (Emergency Component)
const AcilDurumPaneli = () => {
    // LocalStorage'dan acil durumları al
    const [acilDurumlar, setAcilDurumlar] = useState(() => {
        const savedData = localStorage.getItem('acilDurumlar');
        return savedData ? JSON.parse(savedData) : [];
    });

    const [yeniBaslik, setYeniBaslik] = useState("");
    const [yeniAciklama, setYeniAciklama] = useState("");

    const saveToLocalStorage = (updatedAcilDurumlar) => {
        localStorage.setItem('acilDurumlar', JSON.stringify(updatedAcilDurumlar));
    };

    const acilDurumEkle = () => {
        const yeniDurum = {
            id: acilDurumlar.length + 1,
            baslik: yeniBaslik,
            aciklama: yeniAciklama,
            tarih: new Date().toLocaleString()
        };
        const yeniAcilDurumlar = [...acilDurumlar, yeniDurum];
        setAcilDurumlar(yeniAcilDurumlar);
        saveToLocalStorage(yeniAcilDurumlar);
        setYeniBaslik(""); 
        setYeniAciklama(""); 
    };

    const acilDurumSil = (id) => {
        const kalanDurumlar = acilDurumlar.filter(durum => durum.id !== id);
        setAcilDurumlar(kalanDurumlar);
        saveToLocalStorage(kalanDurumlar);
    };

    const acilDurumGuncelle = (id, yeniBaslik, yeniAciklama) => {
        const guncellenmisDurumlar = acilDurumlar.map(durum =>
            durum.id === id ? { ...durum, baslik: yeniBaslik, aciklama: yeniAciklama } : durum
        );
        setAcilDurumlar(guncellenmisDurumlar);
        saveToLocalStorage(guncellenmisDurumlar);
    };

    return (
        <div>
            <header className="sayfa-header">
                <h1>Acil Durum</h1>
            </header>
            <div class="container3">
                <header className="sayfa-header" style={{ backgroundColor: "red" }}>
                    <h1>YÖNETMELİK</h1>
                </header>
                <ul>
                    <li>1. Acil durumlar, can ve mal kaybını engellemek için hızlı ve etkili müdahale gerektiren olaylardır.</li>
                    <li>2. Acil durum yönetimi, önceden belirlenmiş planlar ve eğitimler doğrultusunda yürütülmelidir.</li>
                    <li>3. Her kuruluş, acil durum senaryolarına uygun hazırlık yapmalı ve çalışanlarını düzenli olarak bilgilendirmelidir.</li>
                    <li>4. Acil durumlarda öncelikli hedef, yaralıların güvenli bir şekilde tahliye edilmesi ve tedavi edilmesidir.</li>
                    <li>5. İtfaiye, sağlık ve güvenlik birimleri arasında koordinasyon sağlanmalı, her türlü acil durumda birlikte hareket edilmelidir.</li>
                    <li>6. Acil durum ekipleri, olayın gerçekleştiği yerin türüne uygun olarak özel eğitim almalıdır.</li>
                    <li>7. Acil durum anında haberleşme araçları etkin bir şekilde kullanılmalı, bilgi akışı kesintisiz olmalıdır.</li>
                    <li>8. Kuruluşlar, doğal afetler, yangın, gaz sızıntısı gibi farklı acil durumlar için hazırlıklı olmalıdır.</li>
                    <li>9. Acil durumlarda kullanılan ekipmanlar düzenli olarak bakımdan geçirilmeli ve hazır durumda tutulmalıdır.</li>
                    <li>10. Acil durum planları yıllık olarak gözden geçirilmeli, her yıl tatbikat yapılmalıdır.</li>
                </ul>
            </div>

            <div className="panel-container">
                <h1>Acil Durum Yönetim Paneli</h1>

                <div className="acil-durumlar">
                    <h3>Acil Durumlar</h3>
                    {acilDurumlar.length > 0 ? (
                        <ul>
                            {acilDurumlar.map((durum) => (
                                <li key={durum.id} className="acil-durum-item">
                                    <h3>{durum.baslik}</h3>
                                    <p>{durum.aciklama}</p>
                                    <small>{durum.tarih}</small>
                                    <button onClick={() => acilDurumSil(durum.id)}>Sil</button>
                                    <button onClick={() => {
                                        const yeniBaslik = prompt("Yeni Başlık", durum.baslik);
                                        const yeniAciklama = prompt("Yeni Açıklama", durum.aciklama);
                                        if (yeniBaslik && yeniAciklama) {
                                            acilDurumGuncelle(durum.id, yeniBaslik, yeniAciklama);
                                        }
                                    }}>
                                        Güncelle
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Henüz bir acil durum bildirisi yapılmamıştır.</p>
                    )}
                </div>

                <div className="acil-durum-ekle">
                    <h2>Yeni Acil Durum Ekle</h2>
                    <input
                        type="text"
                        placeholder="Acil Durum Başlığı"
                        value={yeniBaslik}
                        onChange={(e) => setYeniBaslik(e.target.value)}
                    />
                    <textarea
                        placeholder="Acil Durum Açıklaması"
                        value={yeniAciklama}
                        onChange={(e) => setYeniAciklama(e.target.value)}
                    />
                    <button onClick={acilDurumEkle}>Ekle</button>
                </div>

            </div>
            <footer className="footer-dark">
                <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
            </footer>
        </div>
    );
};

export default AcilDurumPaneli;
