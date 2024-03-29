// String operations başlığı altında genelde text yani yazılarla ilgili işlemleri
// göreceğiz.

// Textin uzunluğunu length ile alabiliriz

// let sifre = "emir123";
// window.alert(sifre.length);

// şifreyi prompt ile alın, şifrenin uzunluğu 8den küçükse
// geçersiz, 8'den büyükse geçerli yazdırın
let password = prompt("Şifre giriniz");

if (password.length < 8) {
  window.alert("Şifre 8'den küçük olamaz");
} else {
  window.alert("Şifreniz oluşturulmuştur");
}
