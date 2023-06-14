let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

class Mensaje {
    constructor(nombre, correo, mensaje ) {
      this.nombre = nombre;
      this.correo = correo;
      this.mensaje = mensaje;
    
    }
  }


  const guardarMensaje = function (e) {
    e.preventDefault();
  
    let nombre = document.getElementById("nombre_contacto").value;
    let correo = document.getElementById("correo_contacto").value;
    let mensaje = document.getElementById("mensaje_contacto").value;

    mensajes.push(new Mensaje(nombre, correo, mensaje));
    localStorage.setItem("mensajes", JSON.stringify(mensajes));
    document.getElementById("form_contacto").reset();
  alert("Mensaje enviado");
  document.getElementById("nombre_contacto").focus();
}
  
  document.getElementById("form_contacto").addEventListener("submit", guardarMensaje);