var card = document.querySelectorAll('.project');
var front = document.querySelectorAll('.project .front .projectimage');
var content = document.querySelectorAll('.project .content');
var title = document.querySelectorAll('.project .front .title');
var tech = document.querySelectorAll('.project .front .tech');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseover', () => {
    front[i].style.opacity = '0';
    tech[i].style.opacity = '0';
    content[i].style.opacity = '1';
    content[i].style.transition = ' opacity 0.3s ease-in 0.3s';
    front[i].style.transition = 'opacity 0.3s ease-in 0.0s';
    tech[i].style.transition = 'opacity 0.3s ease-in 0.0s';
    title[i].style.transition = '0.3s ease-in 0.2s';
    title[i].style.top = '-170px';
    title[i].style.left = '15px';
  });
  card[i].addEventListener('mouseout', () => {
    front[i].style.opacity = '1';
    tech[i].style.opacity = '1';
    content[i].style.opacity = '0';
    front[i].style.transition = 'opacity 0.3s ease-in 0.3s';
    tech[i].style.transition = 'opacity 0.3s ease-in 0.3s';
    content[i].style.transition = 'opacity 0.3s ease-in 0.0s';
    title[i].style.top = '0px';
    title[i].style.left = '0px';
    title[i].style.transition = '0.3s ease-in 0.2s ';
  });
}
let container = document.querySelector(
  '.contact-container form .submit-container'
);

let submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
  container.innerHTML = `
   <div class="submit-container">
   <p class="onsubmit">Your message has been sent!Thank you :)</p>
   <input class="submit aftersubmit" type="submit" />
   </div> 
   `;
  setTimeout(function () {
    container.innerHTML = `<input class="submit" type="submit" />`;
  }, 4000);
  document.getElementById('myform').reset();
});

var hamgurger = document.querySelector('.hamburger');
var hamgurger_container = document.querySelector('.hamburger-container');
var navlinks = document.querySelector('.nav-links');
var menuOpen = false;

hamgurger.addEventListener('click', () => {
  if (!menuOpen) {
    hamgurger.classList.add('open');
    navlinks.classList.add('open');
    menuOpen = true;
  } else {
    hamgurger.classList.remove('open');
    navlinks.classList.remove('open');
    menuOpen = false;
  }
});

setTimeout();
function preloader() {
  setTimeout(function () {
    // document.querySelector('.loader').style.display = 'none';
  }, 4200);
}
