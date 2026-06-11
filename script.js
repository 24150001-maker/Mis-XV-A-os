// Abrir sobre con animación
document.querySelector(".icono-sobre").addEventListener("click", function () {
  const tapa = document.querySelector(".sobre-tapa");
  tapa.classList.add("abierta");

  setTimeout(() => {
    document.getElementById("sobre").classList.add("oculto");
    document.getElementById("invitacion").classList.remove("oculto");
  }, 1000);
});

// Transiciones automáticas entre apartados
const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

// Confirmación vía WhatsApp
document.getElementById("confirmar").addEventListener("click", function () {

  const nombre = prompt("Por favor escribe tu nombre:");

  if (!nombre || nombre.trim() === "") {
    alert("Debes escribir tu nombre para confirmar.");
    return;
  }

  const numero = "527621006984"; // Cambia este número por el tuyo

  const mensaje =
`✨ CONFIRMACIÓN DE ASISTENCIA ✨

Nombre: ${nombre}

Confirmo mi asistencia a los XV años de Montserrat 💖`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});

// Cuenta regresiva real
function iniciarCuentaRegresiva() {
  const fechaEvento = new Date("July 5, 2026 14:00:00").getTime();
  const cuenta = document.querySelector("#slide2 p");

  setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia > 0) {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) / (1000 * 60)
      );
      const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
      );

      cuenta.textContent =
        `Ya sólo faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para mi gran día ✨`;
    } else {
      cuenta.textContent = "¡Hoy es el gran día! ✨";
    }
  }, 1000);
}

iniciarCuentaRegresiva();
