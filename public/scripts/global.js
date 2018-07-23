// Scroll functions
let prevScrollPos = window.pageYOffset;
$(window).scroll(function() {
    let currentScrollPos = window.pageYOffset;

    // Hide & show the navigation bar
    let navbar = $("#nav-bar");
    let navbarCompact = $("#nav-bar-compact");
    if (prevScrollPos > currentScrollPos || currentScrollPos <= 100) {
        navbar.css("top", 0);
        navbarCompact.css("top", 0);
    } else {
        navbar.css("top", -100);
        navbarCompact.css("top", -100);
    }
    prevScrollPos = currentScrollPos;
});

// Smooth scrolling for anchor tags
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});