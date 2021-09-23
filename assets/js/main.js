$(document).ready(function () {
    var offset = $('.navegador').offset().top;
    $(window).on('scroll',function(){
        if($(window).scrollTop() > offset){
            $('.navegador').addClass('menu-estatico');
        }else{
            $('.navegador').removeClass('menu-estatico');
        }
    });  
});