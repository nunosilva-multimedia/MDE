/********** Banner **********/
$(window).scroll(function () {
    var banner = $(".first");
    var bannerOffset = banner.offset();

    if (window.pageYOffset > bannerOffset.top) {
        $("header").addClass('fixed');
    } else {
        $("header").removeClass('fixed');
    }
});

$('header > .btn').click(function () {

    var tl = anime.timeline({
        targets: 'header > .btn'
    });

    tl.add({
        targets: 'header > .btn span',
        update: function () {
            $('header > .btn span').addClass('animate');
        },
        duration: 250
    }).add({
        targets: 'header > .btn span',
        update: function () {
            $('.menu').addClass('open');
        },
        delay: 250
    }).add({
        update: function () {
            $('.menu .header .btn span.first').addClass('animate');
            $('.menu .header .btn span.second').addClass('animate');
        },
        delay: 250
    });

});

$('.menu .header .btn').click(function () {

    var tl = anime.timeline({
        targets: '.menu .header .btn'
    });

    tl.add({
        update: function () {
            $('.menu .header .btn span.first').removeClass('animate');
            $('.menu .header .btn span.second').removeClass('animate');
        },
        duration: 100
    }).add({
        targets: 'header > .btn span',
        update: function () {
            $('.menu').removeClass('open');
        }
    }).add({
        targets: 'header > .btn span',
        update: function () {
            $('header > .btn span').removeClass('animate');
        }
    });

});