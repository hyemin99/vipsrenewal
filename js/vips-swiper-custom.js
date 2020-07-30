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
		},
		
    });
});