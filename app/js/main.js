$(function () {
    $('.main-slider__items').slick({
        arrows: true,
        dots: true
    });

    $('.brands__items').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,

        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

var $range = $(".filter__price");
var $inputFrom = $(".filter__price-from");
var $inputTo = $(".filter__price-to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

    $('.navigation-body__btn').on('click', function () {
        $('.catalog').toggleClass('catalog--active');
        $('.navigation-body__catalog').toggleClass('navigation-body__catalog--active');
    });

    $('.product-card__field, .catalog-filters__item').styler();

    $('.navigation-account__link--basket, .basket__close').on('click', function () {
        $('.basket').toggleClass('basket--active');
        $('.navigation-account__basket').toggleClass('navigation-account__basket--active');
        $('.body').toggleClass('lock');
    });

    $('.navigation-info__burger, .navigation-user__close').on('click', function () {
        $('.navigation-user').toggleClass('navigation-user--active');
        $('.body').toggleClass('lock');
    });

    $('.catalog-filters__button, .filters__close').on('click', function () {
        $('.filters--catalog').toggleClass('filters--active');
        $('.body').toggleClass('lock');
    });

    $('.navigation-account__search').on('click', function () {
        $('.search').toggleClass('search--active')
    });

    $('.mobile, .mobile-menu__close').on('click', function () {
        $('.mobile-menu').toggleClass('mobile-menu--active');
        $('.body').toggleClass('lock');
    });

    $('.catalog-filters__btn').on('click', function () {
        $('.catalog-filters__btn').removeClass('catalog-filters__btn--active');
        $(this).addClass('catalog-filters__btn--active');
    });

    $('.catalog-filters__btn--list').on('click', function () {
        $('.catalog__items').addClass('catalog__items--list');
    });

    $('.catalog-filters__btn--grid').on('click', function () {
        $('.catalog__items').removeClass('catalog__items--list');
    });

    var mediaQuery = window.matchMedia("screen and (max-width: 576px)");
    mediaQuery.addListener(media);
    media(mediaQuery);

    function media(media) {
        $('.catalog-filters__btn').on('click', function () {
            $('.catalog-filters__btn').removeClass('catalog-filters__btn--list');
        });
    }

    const filterTitle = document.querySelectorAll('.filter__title');
    filterTitle.forEach(item => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('filter--hidden');
        });
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