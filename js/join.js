$(function(){
    $('.modal-btn').on('click',function () {
        $(".modal-container").css('display', 'block');
        $('#container').on('scroll touchmove mousewheel', function(event) { 
            event.preventDefault();     
            event.stopPropagation();     
            return false; 
        });
	});
    $('.modal-back, .modal-close').on('click',function () {
        $(".modal-container").css('display', 'none');
        $('#container').off('scroll touchmove mousewheel');
    });
    

    $('.check-all').click(function(){
        $('.li-check').prop('checked', this.checked );
    });


});