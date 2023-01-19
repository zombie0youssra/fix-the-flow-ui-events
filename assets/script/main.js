let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("click", colorchange);

function colorchange() {
  frontend.classList.toggle("btn-1");
}

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("click", grow);

function grow() {
  design.classList.toggle("btn-2");
}
