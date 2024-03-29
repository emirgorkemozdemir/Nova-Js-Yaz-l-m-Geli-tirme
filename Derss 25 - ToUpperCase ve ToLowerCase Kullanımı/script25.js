// let kullanici_adi = "emirgorkemozdemir";

// Elimizde bulunan bir yazıyı full büyük veya full küçük hale
// getirebiliriz

// let buyuk = kullanici_adi.toUpperCase();
// let kucuk = kullanici_adi.toLowerCase();

// girilen textin sadece ilk karakterini büyük geri kalanını küçük
// hale dönüştüren fonksiyonu yazınız.

let deger = prompt("Kullanıcı adı giriniz").toLowerCase();

for (i = 0; i < deger.length; i++) {
  debugger;

  if (i == 0) {
    let temp = deger[0].toUpperCase();
    var yeni_deger = deger.replace(deger[0], temp);
  }
}

window.alert(yeni_deger);
