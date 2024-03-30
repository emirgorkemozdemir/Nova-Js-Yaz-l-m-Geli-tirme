let yazi = "Hello World";

// 1. yöntem slice. Keserken son indexi dahil etmez.
// let yeni_yazi = yazi.slice(0, 5);
// window.alert(yeni_yazi);

// 2. yöntem substring. Keserken son indexi dahil etmez
// let yeni_yazi = yazi.substring(0,6);

// 3. yöntem substr
// deprecated metotların üstü çizili gelir
// deprecated demek bazı tarayıcılarda bu metot çalışmaz demek.
// substr(başlangıç indexi, kaç karakter kesileceği)
let x = yazi.substr(1, 3);
// window.alert(x);
