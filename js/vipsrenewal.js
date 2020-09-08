$(function(){
    
    fn_article3('nav-rolling', 'rolling-btn',true);

    $('.center-nav').on('mouseenter', function(){
        $('.gnb-menu-container:not(:animated)').slideDown(function(){
            $('.nav-underline').css({
                'display' : 'block'
            });
        });
    }).on('mouseleave', function(){
        $('.gnb-menu-container').slideUp(function(){
            $('.nav-underline').css({
                'display' : 'none'
            });
        });
    });
    
    $(".gnb-menu li").each(function() {
        $(this).on("mouseenter", function () {
            var navList = ['01', '02', '03', '04', '05'];
		    var classlist = $(this).attr('class');
		    for (var navCnt=0;navCnt<navList.length;navCnt++) {
                if (classlist.indexOf(navList[navCnt]) != -1) {
                    $('.gnb-type li:nth-child('+(navCnt+1)+')').addClass("on");
                }
            }
        }).on("mouseleave", function () {
            var navList = ['01', '02', '03', '04', '05'];
		    var classlist = $(this).attr('class');
		    for (var navCnt=0;navCnt<navList.length;navCnt++) {
                if (classlist.indexOf(navList[navCnt]) != -1) {
                    $('.gnb-type li:nth-child('+(navCnt+1)+')').removeClass("on");
                }
            }
        });
      });
	
	$('#hamburger').on('click',function(){
		$(this).toggleClass('active');
        $(this).find('div').removeClass('no-ani');
        $('#sidemenu').toggleClass('active');

        if($('#sidemenu').hasClass("active")){
            $('.modal').stop().animate({'right' : '0'}, 800);
            $('#wrap').on('scroll touchmove mousewheel', function(event) { 
                event.preventDefault();     
                event.stopPropagation();     
                return false; 
            });
		}else{
            $('.modal').stop().animate({'right' : '-100%'}, 500);
            $('#wrap').off('scroll touchmove mousewheel');
		}
    });
    
    $('.side-submenu').click(function(){
		$('.side-menu-list',this).slideToggle(500);
     });
     
    $(window).on('scroll', function(){
        var windowHegiht = $(this).scrollTop()+750

        if (windowHegiht > $('#store').offset().top) {
            $('#store div').addClass('on');
        }
    });

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
});