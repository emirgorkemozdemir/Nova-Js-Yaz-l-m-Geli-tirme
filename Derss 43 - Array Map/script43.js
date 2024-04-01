// let numbers = [12,25,35,69,55];

// // arraylerin map özelliği ile array içindeki değerlerin
// // tamamına belirli bir işlemi uygulayabilirsiniz.

// // bir tane usernames dizisi oluşturun
// // bu dizide bulunan degerlerin baş harflerini
// // büyük hale getirin. (map kullanarak)

// function ikiye_katla(value,index)
// {
// return value*2;
// }

// let yeni_dizi = numbers.map(ikiye_katla);
// document.write(yeni_dizi);

let usernames = ["emirozdemir","mehmetozdemir"];

function buyut(value,index)
{
 let temp = value[0].toUpperCase();
 return value.replace(value[0],temp);
}

let sonuc =usernames.map(buyut);
document.write(sonuc);