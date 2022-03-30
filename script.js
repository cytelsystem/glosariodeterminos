window.addEventListener("load", function() {
  let formulario = document.querySelector("form.reservation");

  formulario.addEventListener("submit", function(e) {
    let errores = []; // Array de errores

    let campoNombre = document.querySelector("input.nombre");
    let campoApellido = document.querySelector("input.apellido");
    let campoFecha = document.querySelector("input.fecha");
    let campoMessage = document.querySelector("input.message");

    if (campoNombre.value == "") {
      errores.push("El campo nombre esta vacio");
    } else if (campoNombre.value.length < 3) {
      errores.push("Campo nombre debe tener almenos 3 caracteres");
    }

    if (campoApellido.value == "") {
      errores.push("El campo apellido esta vacio");
    } else if (campoApellido.value.length < 3) {
      errores.push("El campo apellido debe tener mas de 3 caracteres")
    }

    if (campoFecha.value == "") {
      errores.push("El campo fecha esta vacio");
    }

    if (campoMessage.value == "") {
      errores.push("El campo mensaje esta vacio");
    }

    if (errores.length > 0){
      e.preventDefault(); // si hay errores no se envia el formulario
      let ulErrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
      }
    }
  });

});
