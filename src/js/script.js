$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        slideToShow: 1,
        dots: false,
        speed: 300,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_l.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_r.png"></button>',
        slideToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            }


        ]


    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__shop').removeClass('catalog__shop_active').eq($(this).index()).addClass('catalog__shop_active');
    });

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).removeClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).addClass('catalog-item__list_active');

        })
    });

    $('.catalog-item__link-back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__list').eq(i).removeClass('catalog-item__list_active');
            $('.catalog-item__content').eq(i).addClass('catalog-item__content_active');

        })
    });

    function toggleSlider(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__list_active').eq(i).toggleClass('catalog-item__list');
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            })
        });
    };


    function toggleSlider(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content_acive').eq(i).toggleClass('catalog-item__content');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    // toggleSlider('.catalog-item__link');
    // toggleSlider('.catalog-item__link-back');

    //--------------MODALS----------------

    $('[data-model=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal-win__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_card').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal-win__content_description').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('.feed-form').validate();
    $('#consultation form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }

        },
        messages: {
            name: {
                required: "Пожалуйста, введита Ваше имя",
                minlength: jQuery.validator.format("Необходимо ввести минимум 2 символа")
            },
            phone: "Пожалуйста, введите номер Вашего телефона",
            email: {
                required: "Пожалуйста, введите Вашу почту",
                email: "Неправильно введен почтовый адрес"
            }
        }
    });
    $('#order form').validate();

    // function validateForms(form) {
    //     $('.feed-form').validate()
    //     $('#consultation form').validate({
    //         rules: {
    //             name: {
    //                 required: true,
    //                 minLength: 2
    //             },
    //             phone: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             }

    //         },
    //         messages: {
    //             name: {
    //                 required: "Пожалуйста, введита Ваше имя",
    //                 minLength: jQuery.validator.format("Необходимо ввести минимум {2} символа")
    //             },
    //             phone: "Пожалуйста, введите номер Вашего телефона",
    //             email: {
    //                 required: "Пожалуйста, введите Вашу почту",
    //                 email: "Неправильно введен почтовый адрес"
    //             }
    //         }
    //     })

    //     validateForms('.feed-form');
    //     validateForms('#consultation form');
    //     validateForms('#order form');

    //     $('input[name=phone]').mask("+3(999) 999-99-99");

    // };
    $('input[name=phone]').mask("+3(999) 999-99-99");

    //Smooth scroll page up
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    new WOW().init();
})
