import React, { useState } from 'react';

function Asistan() {
  const [selectedAsistan, setSelectedAsistan] = useState(null);

  const asistans = [
    { id: 1, name: "Ahmet Yılmaz", image: "/gorseller/Asistan1.jpg", email: "bumblebees.pedic@klashtop.com", bolum: "Pediatri", details: "Uzun yürüyüşler yapmak ve keşfedilmemiş patikalarda yürüyüş yapmak. Özellikle dağlık bölgelerde kaybolmayı ve doğanın huzuruna dalmayı seviyorum. Hayatta kalma becerileri üzerine kitaplar okuyarak daha fazla şey öğrenmeye çalışıyorum" },
    { id: 2, name: "Elif Kaya", image: "/gorseller/Asistan2.jpg", email: "fuzzycatz.pluto@padiqo.org", bolum: "Pediatri", details: "Eski film koleksiyonları yapmak ve 1920'ler ile 1950'ler arasında yapılan klasik filmleri izlemek. Geçmişin altın çağındaki sinemanın büyüsüne kapılmak, beni hem eğlendiriyor hem de zamanın nasıl geçtiğini unutturuyor" },
    { id: 3, name: "Burak Demir", image: "/gorseller/Asistan3.jpg", email: "rhino.specter@krokstr.com", bolum: "Pediatri", details: "Doğada keşfe çıkmak, çeşitli bitkiler hakkında araştırmalar yapmak ve yeni bitki türleri keşfetmek. Doğanın sunduğu sırları çözmek bana büyük bir mutluluk veriyor." },
    { id: 4, name: "Zeynep Arslan", image: "/gorseller/Asistan4.jpg", email: "leafstorm.pine@zyblitz.org", bolum: "Pediatri", details: "Kitap okumayı ve özellikle felsefi kitaplarla kendimi derinlemesine düşünmeye iten metinleri incelemeyi seviyorum. Hayatla ilgili derin sorular sormak, insanı daha çok anlamaya yönelik ilham verici bir yolculuk." },
    { id: 5, name: "Ali Can", image: "/gorseller/Asistan5.jpg", email: "sugarpuff.skye@osmetrix.com", bolum: "Pediatri", details: "Sanat galerilerini gezmeyi ve modern sanatla ilgilenmeyi çok seviyorum. Çeşitli sanat akımlarını keşfetmek ve bu eserleri incelemek, bana ilham veriyor ve yaratıcılığımı harekete geçiriyor." },
    { id: 6, name: "Ayşe Çelik", image: "/gorseller/Asistan6.jpg", email: "cloverpatch.dream@vorkwin.org", bolum: "Pediatri", details: "Yoga yaparak hem bedensel hem de zihinsel sağlığımı iyileştirmeye çalışıyorum. Derin nefes almayı, zihni sakinleştirmeyi ve bedenimin sınırlarını keşfetmeyi seviyorum. Aynı zamanda meditasyon yaparak iç huzurumu buluyorum." },
    { id: 7, name: "Emre Özdemir", image: "/gorseller/Asistan7.jpg", email: "lunarblossom.pixie@frosnix.com", bolum: "Pediatri", details: "Astronomi ile ilgileniyorum. Gece gökyüzünü izlemek, yıldızların ve gezegenlerin hareketlerini takip etmek bana huzur veriyor. Ayrıca teleskopla gözlem yaparak daha fazla keşif yapmak istiyorum." },
    { id: 8, name: "Fatma Akbulut", image: "/gorseller/Asistan8.jpg", email: "spicyturtle.silk@cumbroser.org", bolum: "Pediatri", details: "Kendi yemek tariflerimi geliştirmek ve yeni mutfaklar denemek. Dünya mutfağını keşfetmek, tatları harmanlamak ve yaratıcı yemekler yapmak, mutfağı keşfetmek bana bir tür terapi gibi geliyor." },
    { id: 9, name: "Mert Kara", image: "/gorseller/Asistan9.jpg", email: "astroflame.bird@trezali.com", bolum: "Pediatri", details: "Geçmişe dair gizemleri çözmek ve farklı kültürlerin kalıntılarını incelemek için arkeolojik kazılara katılmak, hem bilgimi artırıyor hem de keşfetme tutkumun doyum noktasını bulmamı sağlıyor." },
    { id: 10, name: "Selin Güler", image: "/gorseller/Asistan10.jpg", email: "whispery.haze@shindrall.net", bolum: "Pediatri", details: "Dikiş yapmayı öğrenmek ve eski giysileri yenileyerek farklı tasarımlar oluşturmak. Bu, sadece kıyafetleri değil, kişisel tarzımı da yansıtan bir yaratıcı süreç oluyor." },
    { id: 11, name: "Ece Polat", image: "/gorseller/Asistan11.jpg", email: "cozyraindrop.ember@voltox.org", bolum: "Pediatri", details: "Fotoğrafçılık yaparak doğadaki güzellikleri ve şehir yaşamının sunduğu detayları yakalamak. Objektif aracılığıyla dünya üzerindeki en güzel anları ölümsüzleştirmek, bana derin bir tatmin sağlıyor." },
    { id: 12, name: "Büşra Çelik", image: "/gorseller/Asistan12.jpg", email: "pebblesmash.dazz@glixo.net", bolum: "Pediatri", details: "Bahçecilik yaparak organik sebzeler yetiştirmek. Farklı tohumlar denemek, bitkilerin nasıl büyüdüğünü gözlemlemek ve doğanın döngülerine uyum sağlamak bana büyük mutluluk veriyor." },
    { id: 13, name: "Esme Aydın", image: "/gorseller/Asistan13.jpg", email: "flutterwinds.pine@verblin.com", bolum: "Pediatri", details: "Müzik aletlerini öğrenmek, özellikle akustik gitar çalmayı çok seviyorum. Hem eğlenceli hem de rahatlatıcı bir hobi olarak müziği hayatımın her anına entegre ediyorum." },
    { id: 14, name: "Hande Korkmaz", image: "/gorseller/Asistan14.jpg", email: "deepcrimson.flare@pintorix.org", bolum: "Pediatri", details: "Sanat eserlerini koleksiyonlamak ve yeni sanat akımlarını keşfetmek. Her eserin arkasında bir hikaye olduğuna inanıyorum, bu yüzden sanatla iç içe olmak bana büyük ilham veriyor." },
    { id: 15, name: "Serkan Yıldız", image: "/gorseller/Asistan15.jpg", email: "twinkleprism.lux@vintrik.org", bolum: "Pediatri", details: "Zaman zaman bilim kurgu kitapları okumak ve farklı gelecekteki toplumları hayal etmek. Teknolojik gelişmelerin insanlar üzerindeki etkisini düşündükçe, farklı bakış açıları geliştirmek beni heyecanlandırıyor." },
];

  const handleAsistanClick = (asistan) => {
    setSelectedAsistan(asistan);
  };

  const closeModal = () => {
    setSelectedAsistan(null);
  };

  return (
    <div>
      <header className="sayfa-header">
          <h1>Asistanlarımız</h1>
        </header>
      <div className="container">
        <div className="asistan-list">
          {asistans.map((asistan) => (
            <div key={asistan.id} className="asistan-item" onClick={() => handleAsistanClick(asistan)}>
              <img src={asistan.image} alt={asistan.name} className="asistan-image" />
              <h3 className="asistan-name">{asistan.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedAsistan && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedAsistan.name}</h2>
            <img src={selectedAsistan.image} alt={selectedAsistan.name} className="modal-image" />
            <p><strong>Asistan Adı:</strong> {selectedAsistan.name}</p>
            <p><strong>Asistan Maili:</strong> {selectedAsistan.email}</p>
            <p><strong>Asistan Bölümü:</strong> {selectedAsistan.bolum}</p>
            <p><strong>Detaylar:</strong> {selectedAsistan.details}</p>
          </div>
        </div>
      )}

      <footer className="footer-dark">
        <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}

export default Asistan;
