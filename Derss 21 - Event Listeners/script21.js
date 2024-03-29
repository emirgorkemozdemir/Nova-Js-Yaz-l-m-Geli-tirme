function tikla() {
  window.alert("asdfasdf");
}

// 1. Yol
// document.getElementById("mybutton").addEventListener("click", tikla);

// 2 . Yol
document.getElementById("mybutton").addEventListener("click", function () {
  window.alert("asdfasdf");
});
