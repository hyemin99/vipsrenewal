$(function(){
    $('.join-modal-btn').on('click',function () {
        $(".join-modal-container").css('display', 'block');
        $('#container').on('scroll touchmove mousewheel', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
	});
    $('.join-modal-back, .join-modal-close').on('click',function () {
        $(".join-modal-container").css('display', 'none');
        $('#container').off('scroll touchmove mousewheel');
    });
    

    $('.check-all').click(function(){
        $('.li-check').prop('checked', this.checked );
    });


});