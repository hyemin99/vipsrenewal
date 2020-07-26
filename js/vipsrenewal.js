$(function(){
    fn_article3('nav-rolling', 'rolling-btn',true);

    $('.center-nav').on('mouseenter', function(){
        $('.gnb-menu-container:not(:animated)').slideDown(function(){
            $('.nav-underline').css({
                'display' : 'block'
            });
        });
    }).on('mouseleave', function(){
        $('.gnb-menu-container:not(:animated)').slideUp(function(){
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
  
    // $('.gnb-menu li:nth-child(1)').on('mouseenter', function(){
    //     $('.gnb-type li:nth-child(1)').addClass('on');
    // }).on('mouseleave', function(){
    //     $('.gnb-type li:nth-child(1)').removeClass('on');
    // });
    // $('.gnb-menu li:nth-child(2)').on('mouseenter', function(){
    //     $('.gnb-type li:nth-child(2)').addClass('on');
    // }).on('mouseleave', function(){
    //     $('.gnb-type li:nth-child(2)').removeClass('on');
    // });
    // $('.gnb-menu li:nth-child(3)').on('mouseenter', function(){
    //     $('.gnb-type li:nth-child(3)').addClass('on');
    // }).on('mouseleave', function(){
    //     $('.gnb-type li:nth-child(3)').removeClass('on');
    // });
    // $('.gnb-menu li:nth-child(4)').on('mouseenter', function(){
    //     $('.gnb-type li:nth-child(4)').addClass('on');
    // }).on('mouseleave', function(){
    //     $('.gnb-type li:nth-child(4)').removeClass('on');
    // });
    // $('.gnb-menu li:nth-child(5)').on('mouseenter', function(){
    //     $('.gnb-type li:nth-child(5)').addClass('on');
    // }).on('mouseleave', function(){
    //     $('.gnb-type li:nth-child(5)').removeClass('on');
    // });
    
});