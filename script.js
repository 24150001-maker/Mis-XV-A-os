// Abrir sobre
document.querySelector(".icono-sobre").addEventListener("click", function () {

  const tapa = document.querySelector(".sobre-tapa");
  const musica = document.getElementById("musica");

  tapa.classList.add("abierta");

  musica.play().catch(() => {
    console.log("Autoplay bloqueado");
  });

  setTimeout(() => {

    document.getElementById("sobre").classList.add("oculto");

    document
      .getElementById("invitacion")
      .classList.remove("oculto");

  }, 1000);

});

// Slides automáticos
const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

  slides[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");

}, 7000);

// WhatsApp
document.getElementById("confirmar").addEventListener("click", function () {

  const nombre = prompt("Escribe tu nombre:");

  if (!nombre || nombre.trim() === "") {

    alert("Debes escribir tu nombre.");

    return;
  }

  const numero = "527621006984";

  const mensaje =
`✨ CONFIRMACIÓN DE ASISTENCIA ✨

Nombre: ${nombre}

Confirmo mi asistencia a tus XV años Monse 💖`;

  const url =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");

});

// Cuenta regresiva
function iniciarCuentaRegresiva() {

  const fechaEvento =
    new Date("July 5, 2026 14:00:00").getTime();

  const contador =
    document.getElementById("contador");

  setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia =
      fechaEvento - ahora;

    if (diferencia > 0) {

      const dias =
        Math.floor(diferencia / (1000 * 60 * 60 * 24));

      const horas =
        Math.floor(
          (diferencia %
            (1000 * 60 * 60 * 24))
          / (1000 * 60 * 60)
        );

      const minutos =
        Math.floor(
          (diferencia %
            (1000 * 60 * 60))
          / (1000 * 60)
        );

      const segundos =
        Math.floor(
          (diferencia %
            (1000 * 60))
          / 1000
        );

      contador.textContent =
        `${dias} días • ${horas} horas • ${minutos} minutos • ${segundos} segundos`;

    } else {

      contador.textContent =
        "✨ ¡Hoy es el gran día! ✨";

    }

  }, 1000);

}

iniciarCuentaRegresiva();

// Botón Música
document.addEventListener("click", function(e){

  if(e.target && e.target.id === "btnMusica"){

    const musica = document.getElementById("musica");

    if(musica.paused){

      musica.play();
      e.target.innerHTML = "⏸️ Pausar Música";

    }else{

      musica.pause();
      e.target.innerHTML = "🎵 Escuchar Música";

    }

  }

});
