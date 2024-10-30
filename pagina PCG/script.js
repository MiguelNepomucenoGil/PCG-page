const toggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

toggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show'); // Alterna a classe 'show' no menu
});
