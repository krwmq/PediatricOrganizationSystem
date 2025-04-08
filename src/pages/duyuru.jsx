import React, { useState } from "react";

const DuyuruPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hastane haberleri (slider için)
  const newsItems = [
    { title: "Yeni Eğitim Semineri Başlıyor!", content: "Hastane içi seminer hakkında bilgi." },
    { title: "Tatbikat Tarihleri Duyurusu", content: "Tatbikatlar ve katılım şartları." },
    { title: "Başarılarımız", content: "Akademik başarılarla ilgili detaylar." },
  ];

  // Öğretim üyeleri ve asistanlar için başarılar
  const successStories = [
    { name: "Profesör Dr. Murat Yıldırım", achievement: "Uluslararası Tıp Konferansında Birincilik Ödülü" },
    { name: "Doçent Dr. Mehmet Aksoy", achievement: "Yerli Araştırmalarda En Yüksek Başarı" },
    { name: "Dr. Ali Demirtaş", achievement: "Biyoteknoloji Alanında Başarı Ödülü" },
  ];

  // Başlangıç duyuruları
  const duyuruList = [
    { title: "Hastane 1 Ocak Günü Tatil", description: "Yılbaşı nedeniyle hastane 1 Ocak günü kapalı olacaktır." },
    { title: "Yeni Eğitim Semineri", description: "Seminerin başlangıç tarihi ve katılım koşulları hakkında detaylar." },
    { title: "Tatbikat Duyurusu", description: "Yapılacak tatbikatların tarihleri ve içerikleri." },
  ];

  // Slider kontrol fonksiyonları
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
  };
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + newsItems.length) % newsItems.length
    );
  };

  return (
    <div>
      <header className="sayfa-header">
        <h1>Duyuru Sayfası</h1>
      </header>
      <div className="duyuru-page">

        {/* Başlangıç Duyuruları */}
        <section className="duyuru-list-section">
          <h2>Hastane Duyuruları</h2>
          <ul className="duyuru-list">
            {duyuruList.map((duyuru, index) => (
              <li key={index} className="duyuru-item">
                <h3>{duyuru.title}</h3>
                <p>{duyuru.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="duyuru-news-section">
          <h1 style={{ textAlign: 'center', color: 'rgb(0, 123, 255)' }}>Hastane Haberleri</h1>
          <div className="duyuru-slider">
            <button className="duyuru-slider-button prev" onClick={prevSlide}>
              ‹
            </button>
            <div className="duyuru-slider-content">
              <h3>{newsItems[currentSlide].title}</h3>
              <p>{newsItems[currentSlide].content}</p>
            </div>
            <button className="duyuru-slider-button next" onClick={nextSlide}>
              ›
            </button>
          </div>
        </section>

        <section className="duyuru-success-section">
          <h2>Başarılarımız</h2>
          <ul className="duyuru-success-list">
            {successStories.map((story, index) => (
              <li key={index} className="duyuru-success-item">
                <h3>{story.name}</h3>
                <p>{story.achievement}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="footer-dark">
        <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

export default DuyuruPage;
