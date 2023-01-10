var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
      }
    function hideMenu() {
        navLinks.style.right = "-200px";
      }


// -----slideshow-----
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },

}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

});