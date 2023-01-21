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

fix.addEventListener("click", rgb);

function rgb() {
  fix.classList.toggle("btn-6");
}

let the = document.querySelector("a:nth-of-type(7)");

the.addEventListener("click", bounce);

function bounce() {
  the.classList.toggle("btn-7");
}

let flow = document.querySelector("a:nth-of-type(8)");

flow.addEventListener("click", flip);

function flip() {
  flow.classList.toggle("btn-8");
}

let user = document.querySelector("a:nth-of-type(9)");

user.addEventListener("click", rotate);

function rotate() {
  user.classList.toggle("btn-9");
}

let interface = document.querySelector("a:nth-of-type(10)");

interface.addEventListener("click", lightoff);

function lightoff() {
  interface.classList.toggle("btn-10");
}
