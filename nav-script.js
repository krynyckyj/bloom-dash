const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');
});




overlay.addEventListener('click', closeMenu);

const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

