"use strict";

let sec = 0;
let min = 0;
let hour = 0;
let days = 0;

function counter() {
  sec += 5;
  if (sec > 59) {
    sec = 0;
    min++;
  } else if (min > 59) {
    min = 0;
    hour++;
  } else if (hour > 23) {
    hour = 0;
    days++;
  }
}

function format(number) {
  return number > 9 ? `${number}` : `0${number}`;
}

function showCounter() {
  console.log(
    `Tiempo de uso = ${format(days)} Dias ${format(hour)} horas ${format(
      min
    )} minutos ${format(sec)} segundos`
  );
}

setInterval(() => {
  counter();
  showCounter();
}, 5000);
