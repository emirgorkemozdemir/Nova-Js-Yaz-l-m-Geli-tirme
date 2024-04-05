class Flag
{
    // inşaa edici metot yani constructor
    // bu class'tan yeni bir öge oluştuğunda
    // nelerin girileceğini belirler.

    // neredeyse tüm programlama dillerinde 
    // constructor bulunur. Constructor 
    // kullanılırken giren verilere genelde
    // _ atılır


    constructor(_name,_image)
    {
      this.name = _name;
      this.image = _image;
    }
}

let bayrak1 = new Flag("Turkey","imagelink");
let bayrak2 = new Flag("Argentina","imagelink2");
window.alert(bayrak2.name);


// Yeni bir dosyaya Student isminde bir class açın
// class içerisinde student_name, student_surname
// student_number değerleri olsun.

class Student
{
    constructor(_name,_surname,_number)
    {
       this.Name=_name;
       this.Surname=_surname;
       this.Number=_number;

       this.FullName = function()
       {
          return this.Name + " " + this.Surname;
       }
    }
    
 
}

let ogrenci1 = new Student("Emir","Özdemir",123456789);
window.alert(ogrenci1.Number);
window.alert(ogrenci1.FullName());