// 6 haneli sayı oluşturmak
// let sayi = Math.trunc(Math.random() * 1000000);
// document.write(sayi);

// Örneğin elimde 32 tane veri olsun. Öyle bir
// fonksiyon yazalım ki sadece 1 ile 32 arasında veri
// gelsin rastgele olarak.

function rastegele_sayı()
{
    let sayi= Math.ceil(Math.random() * 100);
    return sayi;
}


var yeni_sayi = rastegele_sayı();
if(yeni_sayi<=32)
{
 document.write(yeni_sayi);
}
else
{

}
