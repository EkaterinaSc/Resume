const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', mobileMenu);

function mobileMenu(e) {
    e.preventDefault();
    console.log('test');
    nav.classList.toggle('active');
    console.log('final');
   }

