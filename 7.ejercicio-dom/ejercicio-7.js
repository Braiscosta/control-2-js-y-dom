"use strcit";

const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "Añadir cuadrado";
button.style.marginBottom = "20px";
body.appendChild(button);

const main = document.createElement("main");
main.style.width = "400px";
main.style.display = "flex";
main.style.flexWrap = "wrap";
body.appendChild(main);

button.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  main.appendChild(div);
  setInterval(() => {
    const hex1 = Math.floor(Math.random() * 255);
    const hex2 = Math.floor(Math.random() * 255);
    const hex3 = Math.floor(Math.random() * 255);
    div.style.backgroundColor = `rgb(${hex1},${hex2},${hex3})`;
  }, 1000);
});
