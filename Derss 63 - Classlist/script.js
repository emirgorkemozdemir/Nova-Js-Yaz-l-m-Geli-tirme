function change_class()
{
//     // Classlist add ile yeni class ekler
//    document.querySelector("#mydiv").classList.add("box");

//    // Classlist remove ile class'ı siler
//    document.querySelector("#mydiv").classList.remove("box");

   // Toggle her tıklamada belirtilen class varsa siler, yoksa ekler.
    document.querySelector("#mydiv").classList.toggle("box");

   let classes= document.querySelector("#mydiv").classList;

   console.log(classes);
}