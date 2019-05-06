$(document).ready(function () {
    window.onscroll = function () {
        var top = $('body, html').scrollTop();
        if (top > 50) {
            $('#back-to-top').fadeIn(500);  
        } else {
            $('#back-to-top').fadeOut(500);   
        }
    }

    $('#back-to-top').click(function () {
        $('body, html').animate({scrollTop: 0}, 800);
    })

})