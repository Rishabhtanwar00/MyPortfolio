var card = document.querySelectorAll('.project');
var projectImage = document.querySelectorAll('.project .projectimage');
var content = document.querySelectorAll('.project .content');

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('mouseover', () => {
    projectImage[i].style.opacity = '0';
    content[i].style.opacity = '1';
    content[i].style.transition = ' opacity 0.1s ease-in';
  });
  card[i].addEventListener('mouseout', () => {
    projectImage[i].style.opacity = '1';
    content[i].style.opacity = '0';
    projectImage[i].style.transition = 'opacity 0.3s ease-in';
  });
}
let container = document.querySelector(
  '.contact-container form .submit-container'
);
let form = document.querySelector('#form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.reset();
  container.innerHTML = `
    <div class="submit-container">
      <div class=onsubmit>
        <p>Your message has been sent!Thank you :)</p>
        <i class="fas fa-times" ></i>
      </div>
    <input class="submit aftersubmit" type="submit" />
    </div>
    `;
  setTimeout(function () {
    document.querySelector('.onsubmit').style.display = 'none';
  }, 2000);
});

var hamgurger = document.querySelector('.hamburger');
var hamgurger_container = document.querySelector('.hamburger-container');
var navlinks = document.querySelector('.nav-links');
var link = document.querySelectorAll('.nav-links a');

var menuOpen = false;

for(let i=0;i<link.length;i++){
link[i].addEventListener('click', () =>{
  navlinks.classList.remove('open');
  hamgurger.classList.remove('open');
})
}


hamgurger.addEventListener('click', () => {
  if (!menuOpen) {
    hamgurger.classList.add('open');
    navlinks.classList.add('open');
    menuOpen = true;
    navlinks.style.animation='hue 20s linear 1s infinite';
  } else {
    hamgurger.classList.remove('open');
    navlinks.classList.remove('open');
    menuOpen = false;
    navlinks.style.animation='none';

  }
});
document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
