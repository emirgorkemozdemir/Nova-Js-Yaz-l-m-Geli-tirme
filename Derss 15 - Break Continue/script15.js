// Döngülerde belirli bir koşul olduğunda döngüyü tamamen 
// sonlandırabilir veya hemen bir sonraki adıma geçebilirsiniz

// While döngüsü ile kullanıcı tek sayı girene kadar
// çalışan bir uygulama yapınız. prompt();

while(true)
{
    let value = prompt("Bir sayı giriniz : ");
    if(value%2==0)
    {
       window.alert(value);
    }
    else
    {
        break;
    }
}

