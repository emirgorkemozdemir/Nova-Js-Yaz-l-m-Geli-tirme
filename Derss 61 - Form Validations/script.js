function check_password()
{
let sifre = document.querySelector("#mypassword").value;
let kucuk_harf_kontrol = sifre.match(/[a-z]/g);
let buyuk_harf_kontrol = sifre.match(/[A-Z]/g);
let sayi_kontrol = sifre.match(/[1-9]/g);

let semboller ="!'^+%&//()=?_-*$£#{[]};:.,";
let sembol_puani = 0;
for(i=0;i<semboller.length;i++)
{
if(sifre.includes(semboller[i]))
{
sembol_puani++;
}
}


if (sifre.length >= 8) 
{
  if (kucuk_harf_kontrol != null)
  {
    if(buyuk_harf_kontrol != null)
    {
       if(sayi_kontrol !=null)
       {
         if(sembol_puani==0)
         {
             window.alert("Şifrenizde en az 1 tane sembol bulunmak zorundadır.");
         }
         else
         {
          window.alert("Şifre geçerli");
         }
       }
       else
       {
        window.alert("Şifrenizde en az 1 tane sayı bulunmak zorundadır.");
       }
    }
    else
    {
       window.alert("Şifrenizde en az 1 tane büyük harf bulunmak zorundadır.");
    }
  }
  else
  {
    window.alert("Şifrenizde en az 1 tane küçük harf bulunmak zorundadır.");
  }
} 
else
{
  window.alert("Şifreniz 8'den küçük olamaz");
}

return false;
}