const cerrarSesion = () => {
  let validar = confirm (`Esta seguro que desea cerrar sesión?`)
  if (validar){

    localStorage.removeItem("user");
    location.replace("../index.html");
  }
};





