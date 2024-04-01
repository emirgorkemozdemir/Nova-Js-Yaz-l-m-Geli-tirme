let dizi = ["Emir","Ahmet","Mehmet",55];

// Arrayin ögesini seçmek
dizi[0];

// Arrayin ögelerini değiştirmek
dizi[0]="Cem";

// Dizinin tüm ögelerine erişmek için döngü lazım
// iteration işlemi
for(i=0;i<dizi.length;i++)
{
window.alert(dizi[i]);
}


// Alternatif olarak aşağıdaki şekilde de array
// oluşturabilirsiniz
let names = new Array("Emir","Ahmet","Mehmet");
