document.addEventListener('DOMContentLoaded', function (){
    const menu = document.querySelector('.navbar .menu');
    const menuBtn = document.querySelector('.menu-btn');
    const menuBtnIcon = document.querySelector('.menu-btn i');
    const menuLinks = document.querySelectorAll('.navbar .menu li a');

    // Toggle mobile menu
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtnIcon.classList.toggle('active');
    });

    // Close mobile menu after clicking link 
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (){
            menu.classList.remove('active');
            menuBtnIcon.classList.remove('active');
        });
    });
});