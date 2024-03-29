// Tek değişkende birden fazla veri tutmak için object kullanbilirsiniz

const person = 
{
first_name:"Emir",
last_name:"Özdemir",
age:24,
country:"Turkey"
};

window.alert(person.first_name);

window.alert(person["first_name"]);