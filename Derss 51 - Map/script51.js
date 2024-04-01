// // map ögesine tekli veri değil ikili veri girilmek durumunda
// ilk girilen veriye key, ikinci girilen veriye value denir.
// let sozluk = new Map();

// // map'e veri eklemek
// sozluk.set(1,"emirozdemir");

// // map'ten veri almak
// let sonuc = sozluk.get(1);
// document.write(sonuc);

// // map'in büyüklüğünü almak
// sozluk.size;

// // map'ten öge silmek
// // sozluk.delete(1);


// yeni bir dosya oluşturun, map içerisine id ve 
// kullanıcı adları ekleyin. kullanıcıdan girilen
// kullanıcı adı sistemde varsa, bu kullanıcı adı
// kullanılmaktadır diye uyarı.

// map'in herhangi bir ögesi kullanılıyor mu diye
// bakmak istiyorsanız has özelliğini kullanabilirsiniz
let kullanicilar = new Map();
kullanicilar.set("emirgorkemozdemir",1);

let deger = prompt();
if(kullanicilar.has(deger)==true)
{
document.write("Kullanıcı adı kullanılmakta");
}
else
{
    document.write("Kullanıcı adı müsait");
}