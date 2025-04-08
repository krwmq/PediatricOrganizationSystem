import React, { useState } from 'react';

function Quiz() {
  const [result, setResult] = useState(''); // Sonuç için state
  const [score, setScore] = useState(0); // Puan için state
  const [answers, setAnswers] = useState([]); // Doğru/yanlış cevaplar için state

  const checkQuiz = () => {
    const questions = [
      { id: 'q1', correctAnswer: 'correct' },
      { id: 'q2', correctAnswer: 'correct' },
      { id: 'q3', correctAnswer: 'correct' },
      { id: 'q4', correctAnswer: 'correct' },
      { id: 'q5', correctAnswer: 'correct' },
      { id: 'q6', correctAnswer: 'correct' },
      { id: 'q7', correctAnswer: 'correct' },
      { id: 'q8', correctAnswer: 'correct' },
      { id: 'q9', correctAnswer: 'correct' },
      { id: 'q10', correctAnswer: 'correct' },
    ];

    let currentScore = 0;
    let userAnswers = [];

    // Her soruyu kontrol et
    questions.forEach((question) => {
      const selectedAnswer = document.querySelector(`input[name="${question.id}"]:checked`);
      const isCorrect = selectedAnswer && selectedAnswer.value === question.correctAnswer;
      if (isCorrect) {
        currentScore++;
      }
      userAnswers.push({
        questionId: question.id,
        isCorrect: isCorrect
      });
    });

    setScore(currentScore);
    setAnswers(userAnswers);

    // Geri bildirim mesajını oluştur
    let feedback = '';
    if (currentScore <= 4) {
      feedback = 'Bir tıp öğrencisinin, güncel tıbbi gelişmeleri takip etme ve sağlık alanındaki yeniliklere dair bilgi sahibi olma konusunda eksiklikler yaşayabileceği unutulmamalıdır. Bu eksikliği gidermek için tıbbi dergiler, online platformlar ve sağlık haberlerini takip etmek, öğrencinin bilgi seviyesini önemli ölçüde artıracaktır. Güncel bilgilere sahip olmak, gelecekteki bir hekim olarak etkili kararlar almayı sağlar.';
    } else if (currentScore >= 5 && currentScore <= 7) {
      feedback = 'Bir tıp öğrencisi, şu anda orta seviyede bilgiye sahip olabilir, ancak güncel gelişmeleri takip ederek ve sürekli öğrenerek bilgisini daha da geliştirebilir. Bu, hem akademik hem de profesyonel başarı için önemlidir.';
    } else if (currentScore >= 8 && currentScore <= 10) {
      feedback = 'Yeterli seviyede bilgiye sahipsiniz. Tebrikler.';
    }

    setResult(`Toplam doğru cevap sayısı: ${currentScore} / 10. ${feedback}`);
  };

  return (
    <div>
      <header className="sayfa-header">
        <h1>Quiz</h1>
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main className="quiz-container" style={{ flex: '1', padding: '20px' }}>
          <h1>Tıp Quiz</h1>
          <form id="quiz-form">
            <div className="question">
              <h2>1. COVID-19 pandemisinde en sık görülen semptom nedir?</h2>
              <label>
                <input type="radio" name="q1" value="correct" /> Ateş
              </label>
              <label>
                <input type="radio" name="q1" value="wrong" /> Bulantı
              </label>
              <label>
                <input type="radio" name="q1" value="wrong" /> Kas Ağrısı
              </label>
              <label>
                <input type="radio" name="q1" value="wrong" /> Görme Bozukluğu
              </label>
            </div>

            <div className="question">
              <h2>2. Pandemi sırasında izolasyon süresi ne kadardır?</h2>
              <label>
                <input type="radio" name="q2" value="wrong" /> 3 Gün
              </label>
              <label>
                <input type="radio" name="q2" value="correct" /> 14 Gün
              </label>
              <label>
                <input type="radio" name="q2" value="wrong" /> 1 Ay
              </label>
              <label>
                <input type="radio" name="q2" value="wrong" /> 1 Hafta
              </label>
            </div>

            <div className="question">
              <h2>3. Aşı sonrası hangi yan etki genellikle gözlemlenir?</h2>
              <label>
                <input type="radio" name="q3" value="correct" /> Hafif Ateş
              </label>
              <label>
                <input type="radio" name="q3" value="wrong" /> Görme Kaybı
              </label>
              <label>
                <input type="radio" name="q3" value="wrong" /> Kol Kırılması
              </label>
              <label>
                <input type="radio" name="q3" value="wrong" /> Ciddi Nefes Darlığı
              </label>
            </div>


            <div className="question">
              <h2>4. COVID-19’un en yaygın belirtilerinden biri nedir?</h2>
              <label>
                <input type="radio" name="q4" value="correct" /> Ateş ve Öksürük
              </label>
              <label>
                <input type="radio" name="q4" value="wrong" /> Gözde Kızarıklık
              </label>
              <label>
                <input type="radio" name="q4" value="wrong" /> Ani Kilo Alımı
              </label>
              <label>
                <input type="radio" name="q4" value="wrong" /> Böbrek Ağrısı
              </label>
            </div>

            <div className="question">
              <h2>5. Maymun Çiçeği hastalığı hangi yollarla bulaşabilir?</h2>
              <label>
                <input type="radio" name="q5" value="correct" /> Yakın Fiziksel Temas
              </label>
              <label>
                <input type="radio" name="q5" value="wrong" /> Su Yoluyla
              </label>
              <label>
                <input type="radio" name="q5" value="wrong" /> Böcek Sokması
              </label>
              <label>
                <input type="radio" name="q5" value="wrong" /> Kirli Yiyecekler
              </label>
            </div>

            <div className="question">
              <h2>6. COVID-19 aşılarının temel amacı nedir?</h2>
              <label>
                <input type="radio" name="q6" value="correct" /> Bağışıklık Sistemini Güçlendirmek
              </label>
              <label>
                <input type="radio" name="q6" value="wrong" /> Virüsü Tamamen Yok Etmek
              </label>
              <label>
                <input type="radio" name="q6" value="wrong" /> Antibiyotik Direncini Arttırmak
              </label>
              <label>
                <input type="radio" name="q6" value="wrong" /> Kas Gücünü Artırmak
              </label>
            </div>

            <div className="question">
              <h2>7. COVID-19 varyantlarının daha bulaşıcı olmasının nedeni nedir?</h2>
              <label>
                <input type="radio" name="q7" value="correct" /> Virüsün Mutasyona Uğraması
              </label>
              <label>
                <input type="radio" name="q7" value="wrong" /> Antibiyotik Eksikliği
              </label>
              <label>
                <input type="radio" name="q7" value="wrong" /> Aşıların Yan Etkileri
              </label>
              <label>
                <input type="radio" name="q7" value="wrong" /> Sağlık Çalışanlarının Eksikliği
              </label>
            </div>

            <div className="question">
              <h2>8. Maymun Çiçeği hastalığının ana belirtisi nedir?</h2>
              <label>
                <input type="radio" name="q8" value="correct" /> Deride Döküntü ve Kabarcıklar
              </label>
              <label>
                <input type="radio" name="q8" value="wrong" /> Yüksek Ateş
              </label>
              <label>
                <input type="radio" name="q8" value="wrong" /> Şiddetli Baş Ağrısı
              </label>
              <label>
                <input type="radio" name="q8" value="wrong" /> Görme Bozukluğu
              </label>
            </div>

            <div className="question">
              <h2>9. COVID-19 salgınında hangi önlem en etkili kabul edilir?</h2>
              <label>
                <input type="radio" name="q9" value="correct" /> Maske ve Sosyal Mesafe
              </label>
              <label>
                <input type="radio" name="q9" value="wrong" /> Yalnızca Spor Yapmak
              </label>
              <label>
                <input type="radio" name="q9" value="wrong" /> Günlük Aşı Uygulaması
              </label>
              <label>
                <input type="radio" name="q9" value="wrong" /> Sürekli El Kremi Kullanmak
              </label>
            </div>

            <div className="question">
              <h2>10. Pandemi döneminde artan stresin en yaygın etkilerinden biri nedir?</h2>
              <label>
                <input type="radio" name="q10" value="correct" /> Uyku Bozukluğu
              </label>
              <label>
                <input type="radio" name="q10" value="wrong" /> Kol Kırılması
              </label>
              <label>
                <input type="radio" name="q10" value="wrong" /> Göz Enfeksiyonu
              </label>
              <label>
                <input type="radio" name="q10" value="wrong" /> Solunum Yetmezliği
              </label>
            </div>

            <button type="button" onClick={checkQuiz} className="btn btn-primary mt-3">
              Cevapları Gönder
            </button>
          </form>

          {/* Sonuçları göstermek için */}
          {result && <div id="quiz-result" className="result mt-3"><strong>{result}</strong></div>}

          {/* Doğru ve yanlış yapılan soruları listele */}
          {answers.length > 0 && (
            <div className="answer-feedback mt-3">
              <h3>Sonuçlar</h3>
              <ul>
                {answers.map((answer, index) => (
                  <li key={index} style={{ color: answer.isCorrect ? 'green' : 'red' }}>
                    {`Soru ${index + 1}: ${answer.isCorrect ? 'Doğru' : 'Yanlış'}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
      <footer className="footer-dark">
        <p>© 2024 Pediatri Organizasyon Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}

export default Quiz;