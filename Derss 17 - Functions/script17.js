// Fonksiyon programlama dillerinin tamamında kullanılan 
// ve tekrar eden bir kısmı birden fazla kez yazmamak adına
// tek bir parça olarak ekleme işlemidir.

// Ek olarak js'te tekrar eden işlemler dışında html dosyasından
// bir işlevi çağırmak için de kullanılırlar.

function yazdir(isim)
{
    // scope
    document.write(isim);
}

let value = prompt("İsminizi giriniz");
yazdir(value);


// function topla(sayi1,sayi2)
// {
//    return sayi1+sayi2;
// }

// let sonuc = topla(5,6);