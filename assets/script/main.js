let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction.classList.toggle("jump");
}

let frontend = document.querySelector("a:nth-of-type(1)");

frontend.addEventListener("click", colorchange);

function colorchange() {
  frontend.classList.toggle("colorpop");
}

let design = document.querySelector("a:nth-of-type(2)");

design.addEventListener("click", gradientcolor);
design.addEventListener("animationend", gradientcolor);

function gradientcolor() {
  design.classList.toggle("bordergradient");
}

let and = document.querySelector("a:nth-of-type(3)");

and.addEventListener("click", shakebutton);
and.addEventListener("animationend", shakebutton);

function shakebutton() {
  and.classList.toggle("shake");
}

let development = document.querySelector("a:nth-of-type(4)");

development.addEventListener("click", buttonfade);

function buttonfade() {
  development.classList.toggle("btn-4");
}

let sprint = document.querySelector("a:nth-of-type(5)");

sprint.addEventListener("click", rainbow);

function rainbow() {
  sprint.classList.toggle("btn-5");
}

let fix = document.querySelector("a:nth-of-type(6)");

fix.addEventListener("click", hulk);

function hulk() {
  fix.classList.toggle("btn-6");
}

let the = document.querySelector("a:nth-of-type(7)");

the.addEventListener("click", halo);

function halo() {
  the.classList.toggle("btn-7");
}

let flow = document.querySelector("a:nth-of-type(8)");

flow.addEventListener("click", down);

function down() {
  flow.classList.toggle("btn-8");
}

let user = document.querySelector("a:nth-of-type(9)");

user.addEventListener("click", down);

function down() {
  user.classList.toggle("btn-9");
}

let interface = document.querySelector("a:nth-of-type(10)");

interface.addEventListener("click", down);

function down() {
  interface.classList.toggle("btn-10");
}
