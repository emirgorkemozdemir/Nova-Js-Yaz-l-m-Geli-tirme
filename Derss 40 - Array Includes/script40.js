let usernames = ["emirozdemir","mehmetozdemir"];

// usernames.includes(); // ile girilen kullanıcı adı
/// usernames içerisinde var mı ? bunu kontrol 
// edin

let kullanici_adi = prompt("Kullanıcı adınızı giriniz:");

if(usernames.includes(kullanici_adi))
{
window.alert("Kullancıı adı mevcut");
}
else
{
window.alert("Kullancıı adı mevcut değil");
}
