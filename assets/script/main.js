let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('click', colorchange )

function colorchange(){
  frontend.classList.toggle('colorpop')
}

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click',gradientcolor)

function gradientcolor(){
  design.classList.toggle('bordergradient')
}

let and = document.querySelector('a:nth-of-type(3)')

and.addEventListener('click', shakebutton)
and.addEventListener('animationend', shakebutton)

function shakebutton() {
  and.classList.toggle('shake')
}