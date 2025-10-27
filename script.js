$(document).ready(function(){
    // Cache selectors for preformance
    var $window = $(window);
    var $navbar = $('.navbar');
    var $menu = $('.navbar .menu');
    var $menuBtnIcon = $('.menu-btn i');
    var $menuLinks = $('.menu li a');

    // ==============
    // Sticky Navbar 
    // ==============
    if ($window.scrollTop() > 20) {
        $navbar.addClass('sticky');
    } else {
        $navbar.removeClass('sticky');
    };

    // ===================
    // Toggle Mobile Menu 
    // ===================
    $('.menu-btn').click(function(){
        $menu.toggleClass('active');
        $menuBtnIcon.toggleClass('active');
    });

    // Smooth Scroll for Navbar Links
    $menuLinks.on('click', function(e) {
        var target = $(this).attr('href');

        // Only scroll if the href starts with #
        if (target.startsWith('#') && $(target).length) {
            e.preventDefault();

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

    // Typing Animation Script
    var typed = new Typed(".typing", {
        strings: ["AI Developer", "Data Scientist", "ML Developer", "Data Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    // ========================
    // CONTACT FORM SUBMISSION 
    // ========================
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Stop default redirect to Formspree page

            // Converts data from the form to JSON
            const formData = {
                name: form.querySelector('input[name="name"]').value,
                email: form.querySelector('input[name="email"]').value,
                subject: form.querySelector('input[name="subject"]').value,
                message: form.querySelector('textarea[name="message"]').value,
            };

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    form.reset();
                    successMsg.style.display = 'block';
                    successMsg.style.animation = 'fadeInOut 4s ease';
                    setTimeout(() => successMsg.style.display = 'none', 4000);
                } else {
                    alert("⚠️ Something went wrong. Please try again later.");
                }
            } catch (error) {
                errorMsg.style.display = 'block';
                errorMsg.style.animation = 'fadeInOut 4s ease';
                setTimeout(() => errorMsg.style.display = 'none', 4000)
            }
        });
    }


});