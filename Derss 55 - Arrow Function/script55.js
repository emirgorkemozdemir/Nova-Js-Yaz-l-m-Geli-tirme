// Arrow function ile fonksiyonların yazımı
// daha kolay bir hale getirilebilir.

//  isim    parametreler     işlem
// let topla = (sayi1,sayi2) => sayi1+sayi2;

// // arrow function ile return yazmamız gerekmez kendisi
// // otomatik olarak return yapar.

// let sonuc = topla(5,3);
// window.alert(sonuc);

let rastgele_sayi = () => Math.trunc(Math.random()*1000);
let sonuc2 = rastgele_sayi();
window.alert(sonuc2);