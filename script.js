const container = document.getElementById("container");
const filmSelect = document.getElementById("filmSelect");
const koltuk = document.querySelectorAll(".row .koltuk:not(.dolu)");
const total = document.getElementById("total");
const secildi = document.getElementById("kacKoltuk");

let sayac = 0;

let biletFiyat = +filmSelect.value;

//fonksiyon bilet fiyatını ve seçilen koltuk sayısı güncelliyor
function biletGuncelle() {
  const secilenkoltuksayisi = document.querySelectorAll(
    ".row .koltuk.secilen"
  ).length;
  secildi.textContent = secilenkoltuksayisi;
  total.textContent = secilenkoltuksayisi * biletFiyat;
}

//fonksiyon film değiştirildiğinde total fiyatı da güncelliyor
filmSelect.addEventListener("change", function (e) {
  biletFiyat = +e.target.value;
  biletGuncelle();
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
