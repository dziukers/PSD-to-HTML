const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    const pageNav = document.querySelector('.menu');
    const pageHeader = document.querySelector('.page-header');
    pageNav.classList.toggle('menu-opened');
    pageHeader.classList.toggle('darken-page');

});
