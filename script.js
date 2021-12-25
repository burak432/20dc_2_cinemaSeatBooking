const container = document.getElementById("container");
const filmSelect = document.getElementById("filmSelect");
const koltuk = document.querySelectorAll(".row .koltuk:not(.dolu)");
const total = document.getElementById("total");
const secildi = document.getElementById("kacKoltuk");

let sayac = 0;

let biletFiyat = +filmSelect.value;

//fonksiyon bilet fiyatını ve seçilen koltuk sayısı güncelliyor
function biletGuncelle() {
  const secilenkoltuksayisi = document.querySelectorAll(".row .koltuk.secilen");
  secildi.textContent = secilenkoltuksayisi.length;
  total.textContent = secilenkoltuksayisi.length * biletFiyat;

  //localstorage kayıt, secilen koltuk indexlerinden array oluşturuluyor
  const koltukIndex = [...secilenkoltuksayisi].map((item) => {
    return [...koltuk].indexOf(item);
  });
  localStorage.setItem("secilenKoltuklar", JSON.stringify(koltukIndex));
}

//localstorage film select verilerini ekmele
function localeFilmVerisi(filmindex, koltukFiyati) {
  localStorage.setItem("filmindex", filmindex);
  localStorage.setItem("koltukFiyati", koltukFiyati);
}

//fonksiyon film değiştirildiğinde total fiyatı da güncelliyor
filmSelect.addEventListener("change", function (e) {
  biletFiyat = +e.target.value;
  biletGuncelle();
    //film verisini localstorage kayıt fonksiyonuna yönlendirme
    localeFilmVerisi(e.target.selectedIndex, e.target.value);
});

//eventlistener koltuk secimi
container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("koltuk") &&
    !e.target.classList.contains("dolu")
  ) {
    e.target.classList.toggle("secilen");
    biletGuncelle();
  }
});
