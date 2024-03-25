let x = 55;
// durum ? "durum dogruysa" : "durum yanlışsa"

x > 10 ? window.alert("sayı 10'dan büyük") : window.alert("sayı 10'dan küçük");

// kullanıcı tarafından yaş değeri girilsin, yaş 18den küçükse
// ehliyet alamaz, büyükse ehliyet alabilir diye çıktı versin.
// ternary ile yapın

let yas = prompt("Yaşınızı giriniz");
yas < 18 ? window.alert("Ehliyet alamaz") : window.alert("Ehliyet alabilir");
