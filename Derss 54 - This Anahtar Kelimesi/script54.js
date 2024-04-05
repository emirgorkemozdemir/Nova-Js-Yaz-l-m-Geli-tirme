// Dümdüz boş bir noktada this yazarsam window
// seçilir.
this

const person={
    first_name:"Emir",
    last_name:"Özdemir",
    full_name:
    function()
    {
      return this.first_name+" "+this.last_name;
    }
}

let isim = person.full_name();
window.alert(isim);