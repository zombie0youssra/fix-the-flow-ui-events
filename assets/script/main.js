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

let and = document.querySelector("a:nth-of-type(3)");

and.addEventListener("click", wiggle);

function wiggle() {
  and.classList.toggle("btn-3");
}

let development = document.querySelector("a:nth-of-type(4)");

development.addEventListener("click", lightsout);

function lightsout() {
  development.classList.toggle("lightsout");
}

let sprint = document.querySelector("a:nth-of-type(5)");

sprint.addEventListener("click", rainbow);

function rainbow() {
  sprint.classList.toggle("btn-5");
}

let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener("click", bounce);

function bounce() {
  fix.classList.toggle("btn-6");
}
