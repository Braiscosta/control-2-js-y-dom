const body = document.querySelector("body");

const botonIniciar = document.createElement("button");
botonIniciar.textContent = "Iniciar";

const botonParar = document.createElement("button");
botonParar.textContent = "Parar";

const botonResetear = document.createElement("button");
botonResetear.textContent = "Resetear";

body.appendChild(botonIniciar);
body.appendChild(botonParar);
body.appendChild(botonResetear);

const div = document.createElement("div");
body.appendChild(div);

div.innerText = "00:00:00:00";
div.style.fontSize = "2.2rem";

let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

function cronometro() {
  const iniciar = setInterval(function () {
    msec = msec + 1;
    if (msec === 100) {
      msec = 0;
      sec++;
    }

    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hour++;
    }

    function formatNumber(numberToFormat) {
      return numberToFormat > 9 ? `${numberToFormat}` : `0${numberToFormat}`;
    }
    div.innerText = `${formatNumber(hour)}:${formatNumber(min)}:${formatNumber(
      sec
    )}:${formatNumber(msec)}`;
  }, 10);

  function pause() {
    clearInterval(iniciar);
    botonIniciar.addEventListener("click", cronometro);
  }

  botonParar.addEventListener("click", pause);

  function reset() {
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    div.innerText = "00:00:00:00";
    clearInterval(iniciar);
    botonIniciar.addEventListener("click", cronometro);
  }

  botonResetear.addEventListener("click", reset);
  botonIniciar.removeEventListener("click", cronometro);
}

botonIniciar.addEventListener("click", cronometro);
