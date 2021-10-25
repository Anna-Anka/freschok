$(function () {
    $('.main-slider__items').slick({
        arrows: true,
        dots: true
    });

    $('.header-bottom__link--search').on('click', function () {
        $('.search--mobile').toggleClass('search--active')
    });

    $('.mobile, .mobile-menu__close').on('click', function () {
        $('.mobile-menu').toggleClass('mobile-menu--active');
        $('.body').toggleClass('lock');
    });

    var products = document.querySelector('[data-ref="products"]');
    var discount = document.querySelector('[data-ref="discount"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer_products = mixitup(products, config);
    var mixer_discount = mixitup(discount, config);
});