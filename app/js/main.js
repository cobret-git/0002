$(function(){
    $('.header__nav').on('mouseover', function(){
        $(this).css({ 'width': 'auto' });
        $('.header__nav-list').addClass('header__nav-list--active');
        $('.header-nav__btn').css({
            'background-image': 'url("asset/image/icon-close.png")'
        });
        $('.header').addClass('header--disabled');
    });
    $('.header__nav').on('mouseleave', function(){
        $('.header__nav-list').removeClass('header__nav-list--active')
        $('.header-nav__btn').css({
            'background-image': 'url("asset/image/icon-open.png")'
        });
        $('.header').removeClass('header--disabled');
        setTimeout(removeWidth,300);
        function removeWidth() {
            $(this).css({ 'width': '50px' })
        }
    });
    $('.header__slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true,
        draggable: false,
        centerPadding: '0px'
    })
});