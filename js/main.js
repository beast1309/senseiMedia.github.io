$(function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            679: {
                loop: true,
                autoHeight: true,
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    })

    $('#indexPage').on('click', function () {
        $('#servicePage').removeClass('--active')
        $('#worksPage').removeClass('--active')
        $('#contactsPage').removeClass('--active')

        $('#servicePage').removeAttr('disabled')
        $('#worksPage').removeAttr('disabled')
        $('#contactsPage').removeAttr('disabled')

        $('#indexPage').toggleClass('--active')
        $('#indexPage').attr('disabled', 'disabled')

        $('section').removeClass('--hidden')
    })

    $('#servicePage').on('click', function () {
        $('#indexPage').removeClass('--active')
        $('#worksPage').removeClass('--active')
        $('#contactsPage').removeClass('--active')

        $('#indexPage').removeAttr('disabled')
        $('#worksPage').removeAttr('disabled')
        $('#contactsPage').removeAttr('disabled')

        $('#servicePage').toggleClass('--active')
        $('#servicePage').attr('disabled', 'disabled')

        $('section').removeClass('--hidden')
        $('section').toggleClass('--hidden')
        $('.service').removeClass('--hidden')
    })

    $('#worksPage').on('click', function () {
        $('#indexPage').removeClass('--active')
        $('#servicePage').removeClass('--active')
        $('#contactsPage').removeClass('--active')

        $('#indexPage').removeAttr('disabled')
        $('#servicePage').removeAttr('disabled')
        $('#contactsPage').removeAttr('disabled')

        $('#worksPage').toggleClass('--active')
        $('#worksPage').attr('disabled', 'disabled')

        $('section').removeClass('--hidden')
        $('section').toggleClass('--hidden')
        $('.works').removeClass('--hidden')
    })

    $('#contactsPage').on('click', function () {
        $('#indexPage').removeClass('--active')
        $('#servicePage').removeClass('--active')
        $('#worksPage').removeClass('--active')

        $('#indexPage').removeAttr('disabled')
        $('#servicePage').removeAttr('disabled')
        $('#worksPage').removeAttr('disabled')

        $('#contactsPage').toggleClass('--active')
        $('#contactsPage').attr('disabled', 'disabled')

        $('section').removeClass('--hidden')
        $('section').toggleClass('--hidden')
        $('.callback').removeClass('--hidden')
    })
});