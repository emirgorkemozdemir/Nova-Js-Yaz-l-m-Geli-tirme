// En çok kullanılan ve ilk gördüğümüz seçim şekli id'ye göre
// document.getElementById("mydiv");

// Class'a göre seçim yaparsak seçilenleri array olarak döndürür
// let classes = document.getElementsByClassName("box");

// Direkt olarak etiket adına göre de seçim yapılabilir 
// document.getElementsByTagName("div");

// Query selector ile css gibi seçim yapabilirsiniz
document.querySelectorAll(".box");
document.querySelectorAll("#mydiv");
document.querySelectorAll("div");
document.querySelectorAll("#mydiv p");
