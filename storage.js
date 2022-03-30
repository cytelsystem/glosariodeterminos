window.addEventListener("load", function() {

  if (localStorage.getItem("nombreUsuario") == null) {
    let nombre = prompt("Ingrese su nombre de pila");
    document.querySelector(".bienvenida").innerHTML = "hola" + nombre;
    localStorage.setItem("nombreUsuario", nombre)

  } else {
    let nombre = localStorage.getItem("nombreUsuario");
    document.querySelector(".bienvenida").innerHTML = "hola" + nombre;

  }

  console.log(localStorage);

})