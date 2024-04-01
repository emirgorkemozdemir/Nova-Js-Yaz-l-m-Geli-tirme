// arraylerin filter özelliği ile
// bir arrayi filtreleyebilirsiniz.

let ages = [15,19,25,28,75,12];

function yas_kontrol(value,index)
{
return value>=18;
}
let sonuc = ages.filter(yas_kontrol);
document.write(sonuc);