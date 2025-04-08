import React, { useState } from "react";

function Bolum() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(""); // Görsel ile ilişkili bilgiyi saklamak için
  const [selectedDoctors, setSelectedDoctors] = useState([]); // Hocaların görsellerini saklamak için

  // Bölümlerin verilerini içeren diziler
  const bolumler = [
    {
      id: 1,
      name: "Çocuk Acil",
      hastaSayisi: 25,
      bosYatak: 5,
      ozelDurum: "Yüksek yoğunluk nedeniyle acil müdahaleler önceliklidir.",
      imageUrl: "/gorseller/CocukAcil.jpg",
      info: "Çocuk Acil: Anlık müdahale gerektiren vakaların yoğun olarak görüldüğü bölüm.",
      doctors: [
        { name: "Mehmet Aksoy", image: "/gorseller/Doktor1.jpg" },
        { name: "Elif Çetin", image: "/gorseller/Doktor2.jpg" },
        { name: "Ali Demirtaş", image: "/gorseller/Doktor3.jpg" }
      ]
    },
    {
      id: 2,
      name: "Çocuk Yoğun Bakım",
      hastaSayisi: 15,
      bosYatak: 2,
      ozelDurum: "Sepsis ve kritik müdahale gerektiren hastalar var.",
      imageUrl: "/gorseller/CocukYogunBakim.jpg",
      info: "Çocuk Yoğun Bakım: Kritik durumdaki çocuk hastaların izlendiği birim.",
      doctors: [
        { name: "Zeynep Arslan", image: "/gorseller/Doktor4.jpg" },
        { name: "Ayşe Kılıç", image: "/gorseller/Doktor5.jpg" }
      ]
    },
    {
      id: 3,
      name: "Çocuk Hematolojisi",
      hastaSayisi: 10,
      bosYatak: 3,
      ozelDurum: "Kemoterapi tedavisi gören 3 hasta mevcut.",
      imageUrl: "/gorseller/CocukHematolojisi.jpg",
      info: "Çocuk Hematolojisi: Kan hastalıklarının tanı ve tedavisinin yapıldığı bölüm.",
      doctors: [
        { name: "Murat Yıldırım", image: "/gorseller/Doktor6.jpg" },
        { name: "Sevil Öztürk", image: "/gorseller/Doktor7.jpg" }
      ]
    }
  ];

  const handleImageClick = (info, doctors) => {
    setSelectedImage(null);  // Görseli null yapıyoruz
    setSelectedInfo(info);
    setSelectedDoctors(doctors); // Seçilen bölümün doktorlarını set ediyoruz
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedInfo("");
    setSelectedDoctors([]);
  };

  return (
    <div>
      <header className="sayfa-header">
        <h1>Bölümlerimiz</h1>
      </header>
      <main>
        {bolumler.map((bolum) => (
          <section key={bolum.id} className="bolum-container">
            <h2>{bolum.name}</h2>
            <p>
              Hasta Sayısı: <strong>{bolum.hastaSayisi}</strong>
            </p>
            <p>
              Boş Yatak: <strong>{bolum.bosYatak}</strong>
            </p>
            <p>
              Özel Durumlar: <strong>{bolum.ozelDurum}</strong>
            </p>
            <img
              src={bolum.imageUrl}
              alt={bolum.name}
              className="bolum-image"
              onClick={() => handleImageClick(bolum.info, bolum.doctors)}
            />
          </section>
        ))}
      </main>

      {/* Pop-up Modal */}
      {selectedInfo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <header className="sayfa-header">
              <h1>Bölüm Hocalarımız</h1>
            </header>
            <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
              {selectedDoctors.map((doctor, index) => (
                <div key={index}>
                  <img src={doctor.image} alt={`Doktor ${doctor.name}`} style={{ marginRight: '5px', borderRadius: '3px'}}/>
                  <p>{doctor.name}</p>
                </div>

              ))}
              <p>
                <strong>{selectedInfo}</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="footer-dark">
        <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}

export default Bolum;
