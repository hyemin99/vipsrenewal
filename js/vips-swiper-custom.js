$(function(){
    var swiper = new Swiper('.swiper-container', {
		effect : 'fade',
		speed : 500,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
});