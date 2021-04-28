let parrafos = document.getElementsByTagName("P");

for (let i = 0; i < parrafos.length; i++) {
  let p = parrafos[i];
  let textoParrafo = p.innerHTML;
  let palabrasParrafo = textoParrafo.split(/[\s,\.,\"]+/);

  console.log(palabrasParrafo);

  for (const palabra of palabrasParrafo) {
    if (palabra.length > 5) {
      textoParrafo = textoParrafo
        .split(palabra)
        .join(`<span>${palabra}</span>`);
      p.innerHTML = textoParrafo;
    }
  }
}

let span = document.getElementsByTagName("span");
for (let i = 0; i < span.length; i++) {
  span[i].style.textDecoration = "underline";
}
