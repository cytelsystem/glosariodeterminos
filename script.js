window.addEventListener("load", function() {
  let form = document.querySelector("form.reservation");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // cancela el reenvio hasta que lo validemos el formulario
    console.log(1);
  })
});