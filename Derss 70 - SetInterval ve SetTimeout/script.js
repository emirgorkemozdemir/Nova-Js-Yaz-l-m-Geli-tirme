
function sıcaklık_olc()
{
    document.writeln("Sıcaklık 29C");
}


// settimeout ve setinterval içerisindeki değerler milisaniye
// cinsinden. 1s = 1000ms.

// Set timeout Belirlenen süre geçtikten sonra belirtilen işlemi yapar.
// setTimeout(sıcaklık_olc,3000);


// Set interval belirli zaman aralıklarında sürekli aynı işlemi tekrarlar
setInterval(sıcaklık_olc,60000);


