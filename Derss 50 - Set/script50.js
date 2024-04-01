// set tıpkı array gibi birden fazla değeri tutmak
// için kullanılır. Ancak eklenen ögeler belirli bir
// sırada gitmez bu yüzden 0. 1. gibi ifadelerle
// ögeleri çağırmak mümkün değildir.

let kume = new Set();

// set'e veri eklemek
kume.add("Emir");
kume.add("Ahmet");

// set'ten veri silmek
kume.delete("Emir");

// tüm degerleri almak
kume.values();

// kümenin kaç elemanı oldugunu bulmak
kume.size;

// tüm degerleri dolaşmak
for(deger of kume)
{
    document.write(deger);
}

