$(function(){
    var swiper = new Swiper('.swiper-container', {
		effect : 'fade',
		speed : 500,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.slide-button-next',
			prevEl: '.slide-button-prev',
		},
		autoplay: {
            delay: 4000,
            disableOnInteraction: false,
		}
	});

	var swiper = new Swiper('.best-menu-right', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
		  el: '.best-menu-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.best-menu-next',
			prevEl: '.best-menu-prev',
		}
	  });

	swiper.on('slideChange', function () {
        var slideIndex = this.activeIndex;
		var slideTextIndex = 0;

        if (slideIndex == 1 || slideIndex == 6) slideTextIndex = 0;
        else if (slideIndex == 2) slideTextIndex = 1;
        else if (slideIndex == 3) slideTextIndex = 2;
        else if (slideIndex == 4) slideTextIndex = 3;
		else if (slideIndex == 5 || slideIndex == 0) slideTextIndex = 4;
		
        $('.best-menu-img-list li').each(function(){
            $(this).removeClass('on');
        });
		$('.best-menu-img-list li:nth-child('+(slideTextIndex+1)+')').addClass('on');
    });

});
