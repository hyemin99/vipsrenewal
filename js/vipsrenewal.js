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
	
	$('.hamburger').on('click',function(){
		$(this).toggleClass('active');
		$(this).find('div').removeClass('no-ani')
	});
});