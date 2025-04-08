import React, { useEffect, useState } from "react";
function Home() {
    const [assignedSchedule, setAssignedSchedule] = useState([]);

    useEffect(() => {
        // localStorage'dan kaydedilen takvim verilerini al
        const savedSchedules = JSON.parse(localStorage.getItem("assignedSchedules"));
        if (savedSchedules) {
            setAssignedSchedule(savedSchedules);
        }
    }, []);



    // Haftanın günleri
    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    // Günün takvimindeki atamaları almak
    const getScheduleForDay = (day) => {
        return assignedSchedule.filter(schedule => schedule.workday === day);
    };

    return (
        <div>
            <header className="sayfa-header">
                <h1>Takvim Atamaları:</h1>
            </header>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="calendar">
                        {daysOfWeek.map((day, index) => (
                            <div className="day" key={index}>
                                <h6>{day}</h6>
                                <ul>
                                    {getScheduleForDay(day.toLowerCase()).map((schedule, index) => (
                                        <li key={index}>
                                            {schedule.assistant} - {schedule.department}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <header className="sayfa-header">
                <h1>Bilgilendirme:</h1>
            </header>
            <div className="anasayfap">
                <p>
                    Çocukluk çağında meydana gelen adli olaylar tüm dünyada önlenebilir sağlık sorunlarının başında yer almaktadır. Bu çalışmada çocuk acil kliniğine başvuran, majör travma dışı adli vaka olarak değerlendirilen hastaların klinik ve demografik özelliklerinin ve tedavi yaklaşımlarının değerlendirilmesi amaçlanmıştır.
                    Yöntemler: Çocuk acil tıp kliniğimize Eylül 2015-Eylül 2016 tarihleri arasında başvuran 18 yaş altı 39756 hastadan, adli vaka olarak kabul edilen 683 hastanın dosyaları retrospektif olarak incelendi.
                    Bulgular: Adli olarak değerlendirilen 683 hastanın yaş aralığı 0-17 yıl arasında olup, tüm olguların yaş ortalaması 5,82±4,7 yıl olarak bulundu. Erkek çocukların yaş ortalaması 6,37±5,1 yıl iken kız çocukların yaş ortalaması 5,36±4,3 yıl olarak tespit edildi. Çocuk acile gelen adli olguların 316’sının kız (%46,3) ve 367’sinin erkek (%53,7) olduğu tespit edildi. Adli olayların dağılımını incelediğimizde en fazla intoksikasyon vakalarının (n: 260, %38,1) görüldüğü tespit edildi. Olayların yaş gruplarına göre dağılımı incelendiğinde intoksikasyon vakalarının %77,7’sinin 5 yaş altında, öz kıyım vakalarının %76,9’unun 15 yaş üstünde, yabancı cisim yutma vakalarının %62,3’ünün ve yabancı cisim aspirasyonu vakalarının %90,5’inin 5 yaş altında, uyuşturucu kullanımı vakalarının %89,5’inin en sık 15 yaş üstünde görüldüğü tespit edildi.
                    Sonuç: Tüm dünyada olduğu gibi ülkemizde de kazalar ve intoksikasyon vakaları, önlenebilir ölüm nedenlerinin başında gelmektedir. Bu tür olayların azaltılabilmesi için çocukların yaşadığı çevrelerde ve evde güvenlik için gerekli düzenlemeler yapılmalı, güvenliği sağlamak için gerektiğinde uygun güvenlik araçları kullanılmalıdır. Ayrıca eğitimciler ve sağlık profesyonelleri tarafından çocuklara ve ebeveynlere yaralanma korunma programları çerçevesinde düzenli eğitimler verilmelidir.
                    Kistik fibrozis: kalbi de etkileyen ilerleyici organ disfonksiyonu ile karakterize, kompleks, multisistemik kronik bir hastalıktır. Kistik fibrozis hastalarında gelişen kronik hipoksi, hiperkapni, sağ kalp boşluklarının dilatasyonu ve kullanılan sempatomimetik ilaçlar aritmiye neden olabilir. Çalışmamızın amacı kistik fibrozis tanılı çocuk hastaların elektrokardiyografi ve ekokardiyografi verilerini sağlıklı kontrol grubu ile karşılaştırarak ani ölüm açısından öngörüde bulunmak ve hastaların takiplerinde buna dikkat çekmektir.
                    Yöntemler: Elli bir kistik fibrozis tanılı çocuk hasta ile yaş ve cinsiyeti hasta grubu ile uyumlu olan 53 sağlıklı çocuk elektrokardiyografi verileri, sağ ventrikül sistolik basıncı ve sağ ventrikül sistolik fonksiyonlarını gösteren triküspit anüler düzlem sistolik hareketi açısından karşılaştırıldı.
                    Bulgular: Kistik fibrozis tanılı hastalarımızın 22’si (%43,1) kız iken, yaş ortalaması 107,9±59,7 ay idi. Kotrol grubunun ise 25’i kız (%47,1) iken, yaş ortalaması 108,1±59,7 ay idi. Kontrol grubu ile karşılaştırıldığında, hasta grubunda kalp hızı (p=0.03), QT dispersiyonu (p=0.002), QTc maksimum (p=0.01), QTc dispersiyonu (p=0.002) anlamlı olarak daha yüksekti. Triküspit anüler düzlem sistolik hareketi hasta grubunda kontrol grubuna göre (p,001) anlamlı olarak düşük saptandı.
                    Sonuç: Kistik fibrozis tanılı çocuk hastalarda, pulmoner kan basıncındaki artış kalp yetmezliğinin erken belirtisi olabilir. Bu tür kardiyak bozuklukların, akciğer fonksiyonunun kronik inflamasyonuna bağlı kademeli olarak ortaya çıkabileceğini ve bu nedenle hastaları klinik olarak stabil tutmak ve kistik fibrozisin ilerlemesinde kronik inflamasyonu mümkün olduğunca erken kontrol altına almak çok önemlidir. Kistik fibrozis tanılı hastalarımızın kontrol grubuna göre aritmiye sebep olabilecek elektrokardiyografi değişiklikleri ve sağ ventrikül sistolik fonksiyonunu yansıtan triküspit anüler düzlem sistolik hareketi düşük olduğu için sağ kalp yetmezliği, aritmi ve ani ölüm açısından yakından takip edilmeleri gerektiğini düşünüyoruz.
                </p>
            </div>
            <footer className="footer-dark">
                <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
            </footer>
        </div>
    );
}

export default Home;
