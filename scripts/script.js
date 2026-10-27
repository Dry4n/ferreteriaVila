// Menú hamburguesa
const btnMenu = document.getElementById("btn-menu");
const navigation = document.getElementById("navigation");

btnMenu.addEventListener("click", function () {
  navigation.classList.toggle("abierto");
});

// Cerrar menú al hacer clic en un enlace (móvil)
const enlacesMenu = navigation.querySelectorAll("a");

for (let i = 0; i < enlacesMenu.length; i++) {
  enlacesMenu[i].addEventListener("click", function () {
    navigation.classList.remove("abierto");
  });
}

// Mostrar botón de llamada y subir arriba al hacer scroll
const btnLlamada = document.getElementById("btn-llamada");
const btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    btnLlamada.hidden = false;
    btnArriba.hidden = false;
  } else {
    btnLlamada.hidden = true;
    btnArriba.hidden = true;
  }
});

// Botón volver arriba
btnArriba.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// Formulario de contacto (solo demostración)
const formulario = document.getElementById("contact-form");
const estadoForm = document.getElementById("form-status");

if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    estadoForm.textContent = "Formulario completado. No se ha enviado ningún mensaje.";
    formulario.reset();
  });
}
