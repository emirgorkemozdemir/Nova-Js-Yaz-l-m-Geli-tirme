let yazi =
  "lorem ipsum dolor sit amet, consectetur lOrEm LoREM adipisicing elit. Dolores, nobis!";

// Bir yazı içerisinde spesifik bir kısmın tam olarak hangi indexte
// başladığını aratır. Birden fazla bulursa ilkinin indexini verir
// let secili_index = yazi.indexOf("Lorem");

// indexof'un tersten aramaya başlayanı
// let secili_index = yazi.lastIndexOf("Lorem");

// Regex yani regular expression neredeyse tüm programlama dillerinde
// kullanılan ve text içerisinde büyük küçük harf duyarlılığı olmadan
// veya belirli sayı-sembol-yazı-karakter aralıklarını bulmamıza
// yarayan yapıdır.

// search metodu yine indexi bulur
// search ile gloabal yani g harfini kullanamzsınız. çünkü
// ilk bulduğu değeri döndürmeye odaklı.
// let x = yazi.search(/lorem/i);

// includes true veya false cevabını verir.
// burası regex kullanımına izin vermemekte.
// let sonuc = yazi.includes("asdfasdfasdf");
// window.alert(sonuc);

// Match metodu en işlevli metot. regex kullanılabiliyor
// let sonuc = yazi.match(/lorem/gi);
// document.write(sonuc);

let sifre = prompt("Şifrenizi giriniz");
// Match ile belirli aralıktaki harfleri sayıları kontrol edebilirim

// girilen şifrenin içerisinde bir adet küçük harf, bir adet
// büyük harf bir adet rakam [1-9] ve şifre uzunluğu
// en az 8 karakter olup olmadığını kontrol eden algoritmayı
// yazınız. match metodunun sonucu array olacak.
// dizinin içinde öge var mı diye uzunluğuna bakmanız gerekiyor.

let kucuk_harf_kontrol = sifre.match(/[a-z]/g);
let buyuk_harf_kontrol = sifre.match(/[A-Z]/g);
let sayi_kontrol = sifre.match(/[1-9]/g);

let semboller ="!'^+%&//()=?_-*$£#{[]};:.,";
let sembol_puani = 0;
for(i=0;i<semboller.length;i++)
{
if(sifre.includes(semboller[i]))
{
sembol_puani++;
}
}


if (sifre.length >= 8) 
{
  if (kucuk_harf_kontrol != null)
  {
    if(buyuk_harf_kontrol != null)
    {
       if(sayi_kontrol !=null)
       {
         if(sembol_puani==0)
         {
             window.alert("Şifrenizde en az 1 tane sembol bulunmak zorundadır.");
         }
         else
         {
          window.alert("Şifre geçerli");
         }
       }
       else
       {
        window.alert("Şifrenizde en az 1 tane sayı bulunmak zorundadır.");
       }
    }
    else
    {
       window.alert("Şifrenizde en az 1 tane büyük harf bulunmak zorundadır.");
    }
  }
  else
  {
    window.alert("Şifrenizde en az 1 tane küçük harf bulunmak zorundadır.");
  }
} 
else
{
  window.alert("Şifreniz 8'den küçük olamaz");
}
