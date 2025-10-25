$(document).ready(function(){
    // Cache selectors for preformance
    var $window = $(window);
    var $navbar = $('.navbar');
    var $menu = $('.navbar .menu');
    var $menuBtnIcon = $('.menu-btn i');
    var $menuLinks = $('.menu li a');

    // Sticky Navbar 
    $window.on('scroll', function() {
        if(this.scrollY > 20){
            $navbar.addClass('sticky');
        } else {
            $navbar.removeClass('sticky');
        }
    });

    // Toggle Mobile Menu 
    $('.menu-btn').click(function(){
        $menu.toggleClass('active');
        $menuBtnIcon.toggleClass('active');
    });

    // Smooth Scroll for Navbar Links
    $menuLinks.on('click', function(e) {
        var target = $(this).attr('href');

        // Only scroll if the href starts with #
        if (target.startsWith('#') && $(target).length) {
            e,precentDefault();

            // Close mobile menu if open
            if ($menu.hasClass('active')) {
                $menu.removeClass('active');
                $menuBtnIcon.removeClass('active');
            }

            // Animate scroll
            $('html, body').animate({
                scrollTop: $(target).offset().top - $navbar.outerHeight() // offset for fixed navbar
            }, 600);
        }
    });
});