document.addEventListener('DOMContentLoaded', function () {
    var lastScrollPos = 0;

    document.addEventListener('scroll', function () {
        var scrollPos = window.scrollY;
//If user scroll down the page
        if (scrollPos > lastScrollPos) {
            //The elments fade out
            fadeOut('.heading');
            fadeOut('.paragraph');
            fadeOut('.scroll-text');
            fadeOut('.scroll-icon');
            fadeOut('.share-icon');
            setTimeout(function () {
                fadeIn('.black-section');
                fadeIn('.everest-section');
                fadeIn('.everest-section h1');
                fadeIn('.everest-section p');

            }, 200);
            setTimeout(function () {
                fadeInWithZoom('.video-image img');
            }, 1000);

        } else {
            fadeIn('.heading');
            fadeIn('.paragraph');
            fadeIn('.scroll-text');
            fadeIn('.scroll-icon');
            fadeIn('.share-icon');
            setTimeout(function () {
                fadeOut('.black-section');
                fadeOut('.everest-section');
                fadeOut('.everest-section h1');
                fadeOut('.everest-section p');
                fadeOut('.video-image img');

            }, 200);
        }
        lastScrollPos = scrollPos;
    });
    function fadeOut(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';

        }
    }
    function fadeIn(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '1';

        }
    }
    //Reverse the zoom action reverse scroll
    function fadeInWithZoom(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '1';

            element.style.transform = 'scale(1)';
            element.style.transition = 'opacity 0.5s ease , transform 0.5s ease';
            setTimeout(function () {
                element.style.transform = 'scale(1)';

            }, 500)

        }
    }
});