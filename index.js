$(window).scroll(function(){
    if ($(document).scrollTop() > 10) {
        $('.navbar').css({'background': 'black', 'transition': '500ms', 'box-shadow': '1px 1px 2px 1px rgba(0,0,0,0.2)'});
    }
    else {
        $('.navbar').css({'background': 'transparent', 'box-shadow': 'none'});
    }
});

$('#navcontact').click(function(){
    $('#cont').toggle();
});

$("#serv").click(function() {
    $('html,body').animate({
        scrollTop: $(".block2").offset().top},
        'slow');
});
