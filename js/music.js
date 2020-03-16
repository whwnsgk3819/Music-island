$(document).ready(function(){
    //메인슬라이더
    $('.partners__wrap-itembox-slider').bxSlider({
      speed: 500,
      auto: true,
      pause:5000,
      pager : false,
      controls : false
    })

var $right =  $(".menu__top-logo-img-right")
var $left =  $(".menu__top-logo-img-left")
var $button =  $(".button")
var $close =  $(".button__menu-img-right")

    $right.click(function(){
        alert("서비스 준비중입니다.")   
    })
    $left.click(function(){
        $button.addClass("on")
    })
    $close.click(function(){
        $button.removeClass("on")
        
    })

    $('.menu__top').mouseenter(function(){
        if($('.navigation').hasClass('on')){
            $('.navigation').removeClass('on')
        }
    })
    $('.menu__bottom-wrap-text').mouseenter(function(){
        $('.navigation').addClass('on');
    })

    $('.navigation').mouseleave(function(){
        $(this).removeClass('on');  
    })

})
