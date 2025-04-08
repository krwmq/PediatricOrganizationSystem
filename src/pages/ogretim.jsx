import React, { useState } from 'react';

function Ogretim() {
  const [selectedDr, setSelectedDr] = useState(null);

  const doktorlar = {
    "Çocuk Acil": [
      { id: 1, name: "Doçent Dr. Mehmet Aksoy", image: "/gorseller/Doktor1.jpg", email: "MehmetAksoy66@mail.com", bolum: "Çocuk Acil", details: " detayları." },
      { id: 2, name: "Dr. Elif Çetin", image: "/gorseller/Doktor2.jpg", email: "elif_sd@mail.com", bolum: "Çocuk Acil", details: " detayları." },
      { id: 3, name: "Dr. Ali Demirtaş", image: "/gorseller/Doktor3.jpg", email: "AliDemirts12@mail.com", bolum: "Çocuk Acil", details: " detayları." },
    ],
    "Çocuk Yoğun Bakım": [
      { id: 4, name: "Profesör Dr. Zeynep Arslan", image: "/gorseller/Doktor4.jpg", email: "ZeynepArsln01@mail.com", bolum: "Çocuk Yoğun Bakım", details: " detayları." },
      { id: 5, name: "Dr. Ayşe Kılıç", image: "/gorseller/Doktor5.jpg", email: "06AyseKilic@mail.com", bolum: "Çocuk Yoğun Bakım", details: " detayları." },
    ],
    "Çocuk Hematolojisi": [
      { id: 6, name: "Profesör Dr. Murat Yıldırım", image: "/gorseller/Doktor6.jpg", email: "MuratYıldrm@mail.com", bolum: "Çocuk Hematolojisi", details: " detayları." },
      { id: 7, name: "Doçent Dr. Sevil Öztürk", image: "/gorseller/Doktor7.jpg", email: "Sevil.Oztrk1@mail.com", bolum: "Çocuk Hematolojisi", details: " detayları." },
    ],
  };

  const handleDrClick = (doktor) => {
    setSelectedDr(doktor);
  };

  const closeModal = () => {
    setSelectedDr(null);
  };

  return (
    <div>
      <header className="sayfa-header">
        <h1>Öğretim Üyeleri</h1>
      </header>
      
      <div className="container">
        {/* Çocuk Acil */}
        <h2>Çocuk Acil</h2>
        <div className="asistan-list">
          {doktorlar["Çocuk Acil"].map((doktor) => (
            <div key={doktor.id} className="asistan-item" onClick={() => handleDrClick(doktor)}>
              <img src={doktor.image} alt={doktor.name} className="asistan-image" />
              <h3 className="asistan-name">{doktor.name}</h3>
            </div>
          ))}
        </div>

        {/* Çocuk Yoğun Bakım */}
        <h2>Çocuk Yoğun Bakım</h2>
        <div className="asistan-list">
          {doktorlar["Çocuk Yoğun Bakım"].map((doktor) => (
            <div key={doktor.id} className="asistan-item" onClick={() => handleDrClick(doktor)}>
              <img src={doktor.image} alt={doktor.name} className="asistan-image" />
              <h3 className="asistan-name">{doktor.name}</h3>
            </div>
          ))}
        </div>

        {/* Çocuk Hematolojisi */}
        <h2>Çocuk Hematolojisi</h2>
        <div className="asistan-list">
          {doktorlar["Çocuk Hematolojisi"].map((doktor) => (
            <div key={doktor.id} className="asistan-item" onClick={() => handleDrClick(doktor)}>
              <img src={doktor.image} alt={doktor.name} className="asistan-image" />
              <h3 className="asistan-name">{doktor.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedDr && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedDr.name}</h2>
            <img src={selectedDr.image} alt={selectedDr.name} className="modal-image" />
            <p><strong>Doktor Adı:</strong> {selectedDr.name}</p>
            <p><strong>Doktor Maili:</strong> {selectedDr.email}</p>
            <p><strong>Doktor Bölümü:</strong> {selectedDr.bolum}</p>
            <p><strong>Doktor:</strong> {selectedDr.details}</p>
          </div>
        </div>
      )}

      <footer className="footer-dark">
        <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}

export default Ogretim;
