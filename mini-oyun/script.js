// script.js
let oyuncuPuan = 0;
let bilgisayarPuan = 0;

function oyna(kullaniciSecimi) {
  const secenekler = ['taş', 'kağıt', 'makas'];
  const bilgisayarSecimi = secenekler[Math.floor(Math.random() * 3)];

  let sonuc = '';

  // Seçim ikonlarını göster
  document.getElementById('oyuncuSecimResim').src = `${kullaniciSecimi}.png`;
  document.getElementById('bilgisayarSecimResim').src = `${bilgisayarSecimi}.png`;

  if (kullaniciSecimi === bilgisayarSecimi) {
    sonuc = `Berabere! 🤝 Her ikisi de ${kullaniciSecimi}`;
    document.getElementById('drawSound').play(); // Beraberlik sesi
  } else if (
    (kullaniciSecimi === 'taş' && bilgisayarSecimi === 'makas') ||
    (kullaniciSecimi === 'kağıt' && bilgisayarSecimi === 'taş') ||
    (kullaniciSecimi === 'makas' && bilgisayarSecimi === 'kağıt')
  ) {
    oyuncuPuan++;
    sonuc = `Kazandın! 🎉 Bilgisayar: ${bilgisayarSecimi}`;
    document.getElementById('winSound').play(); // Kazanma sesi
  } else {
    bilgisayarPuan++;
    sonuc = `Kaybettin 😢 Bilgisayar: ${bilgisayarSecimi}`;
    document.getElementById('loseSound').play(); // Kaybetme sesi
  }

  document.getElementById('sonuc').textContent = sonuc;
  document.getElementById('oyuncuPuan').textContent = oyuncuPuan;
  document.getElementById('bilgisayarPuan').textContent = bilgisayarPuan;
}




function yenidenOyna() {
  // Puanları sıfırla
  oyuncuPuan = 0;
  bilgisayarPuan = 0;
  
  // Seçim ikonlarını temizle
  document.getElementById('oyuncuSecimResim').src = '';
  document.getElementById('bilgisayarSecimResim').src = '';
  
  // Sonuç mesajını sıfırla
  document.getElementById('sonuc').textContent = '';
  
  // Puanları sıfırla
  document.getElementById('oyuncuPuan').textContent = oyuncuPuan;
  document.getElementById('bilgisayarPuan').textContent = bilgisayarPuan;
}

