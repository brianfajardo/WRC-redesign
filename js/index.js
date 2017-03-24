$(document).ready(function () {

    // navbar fix to top
    $(window).scroll(function(){
        const navOffset = $('.navbar').offset().top;
        const scrollPos = $(window).scrollTop();

        if (scrollPos >= navOffset) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    })

    // navbar active item
    $(".navbar a").on("click", function(){
        $(".navbar").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
 
    // fixing navbar jumpiness
    $('.navbar').wrap('<div class="nav-placeholder"></div>');
    $('.nav-placeholder').height($('nav').outerHeight());

    // navbar href scroll smoothing
    $('.navbar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, () => {
            window.location.hash = target;
        });
    });

    // Animations

    // About
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated zoomIn')
    }, {offset: '100%'})
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeIn')
    }, {offset: '100%'})
    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn')
    }, {offset: '100%'})
    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated fadeIn')
    }, {offset: '100%'})


    // Numbers/stats
    $('.js-wp-5').waypoint(function(direction) {
        $('.js-wp-5').addClass('animated zoomIn')
    }, {offset: '90%'})
    $('.js-wp-6').waypoint(function(direction) {
        $('.js-wp-6').addClass('animated flipInX')
    }, {offset:'90%'})

    // Latest Events
    $('.js-wp-7').waypoint(function(direction) {
        $('.js-wp-7').addClass('animated zoomIn')
    }, {offset: '100%'})
    $('.js-wp-8').waypoint(function(direction) {
        $('.js-wp-8').addClass('animated fadeInLeft')
    }, {offset: '100%'})
    $('.js-wp-9').waypoint(function(direction) {
        $('.js-wp-9').addClass('animated fadeInRight')
    }, {offset: '100%'})
    $('.js-wp-10').waypoint(function(direction) {
        $('.js-wp-10').addClass('animated fadeInLeft')
    }, {offset: '100%'})
    $('.js-wp-11').waypoint(function(direction) {
        $('.js-wp-11').addClass('animated fadeInRight')
    }, {offset: '100%'})

    // Drivers
    $('.js-wp-12').waypoint(function(direction) {
        $('.js-wp-12').addClass('animated zoomIn')
    }, {offset: '100%'})
    $('.js-wp-13').waypoint(function(direction) {
        $('.js-wp-13').addClass('animated fadeInUp')
    }, {offset: '100%'})
    $('.js-wp-14').waypoint(function(direction) {
        $('.js-wp-14').addClass('animated fadeInUp')
    }, {offset: '85%'})
    $('.js-wp-15').waypoint(function(direction) {
        $('.js-wp-15').addClass('animated fadeInUp')
    }, {offset: '75%'})
    $('.js-wp-16').waypoint(function(direction) {
        $('.js-wp-16').addClass('animated fadeInUp')
    }, {offset: '65%'})
    $('.js-wp-17').waypoint(function(direction) {
        $('.js-wp-17').addClass('animated fadeInUp')
    }, {offset: '55%'})

    // //Fans/Testimonials
    $('.js-wp-18').waypoint(function(direction) {
        $('.js-wp-18').addClass('animated zoomIn')
    }, {offset: '100%'})
    $('.js-wp-19').waypoint(function(direction) {
        $('.js-wp-19').addClass('animated flipInY')
    }, {offset: '100%'})
    $('.js-wp-20').waypoint(function(direction) {
        $('.js-wp-20').addClass('animated slideInUp')
    }, {offset: '100%'})

    // // Contact
    $('.js-wp-21').waypoint(function(direction) {
        $('.js-wp-21').addClass('animated zoomIn')
    }, {offset: '100%'})
    
    function slideshow(){
        $()
    }

});

