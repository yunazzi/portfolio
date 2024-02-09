//새로고침되자마자 스크롤이벤트 실행하게끔 실행
$(window).trigger('scroll');

//gnb
$('.scroll-move').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top})
})

$('.section').each(function(i,el){
    ScrollTrigger.create({
        trigger:el,
        start:"0% 50%",
        end:"100% 50%",
        toggleClass:{
            targets:$('.header .gnb li').eq(el.dataset.idx),
            className:"on"
        }
    })
})

//sc-visual
const visualtl = gsap.timeline({
    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:'100% 10%',
        scrub:1,
    },
});

//sc-content1
gsap.to('.sc-content1 .area-wrap',{
    scrollTrigger:{
        trigger:'.sc-content1 .area1',
        start:'0% 100%',
        end:'100% 0%',
        scrub:0
    },
    xPercent:-100
})

//main
$('.sc-project .link .tags a').hover(function(){
    $(this).css({color: "#e0fd60"});
    $(this).children().find('path').css({ stroke: "#e0fd60" });
},function(){
    $(this).css({color:"#fff"});
    $(this).children().find('path').css({ stroke: "#fff" });
})

//sub
$('.sc-project .content .sub-area a').hover(function(){
    $(this).css({color: "#e0fd60"});
    $(this).children().find('path').css({ stroke: "#e0fd60" });
},function(){
    $(this).css({color:"#fff"});
    $(this).children().find('path').css({ stroke: "#fff" });
})


var swiper1 = new Swiper(".in-title",{
    slidesPerView:'auto',
    spaceBetween:100,
    speed:5000,
    loop:true,
    autoplay:{
        delay:0,
        disableOnInteraction:false
    },
})


$('.out-title').mouseenter(function(){
    $(this).siblings().css({opacity:1})
})
$('.out-title').mouseleave(function(){
    $(this).siblings().css({opacity:0})
})


var swiper2 = new Swiper('.content',{
    slidesPerView:'auto',
    spaceBetween:30,
})


let lastScrollTop = 0;
let isFlowslideActive = true;

$(window).scroll(function(){

    const curr=$(this).scrollTop();

    //go-top
    if(curr>=30){
        $('.btn-gotop').css({opacity:1})
    }else{
        $('.btn-gotop').css({opacity:0})
    }
    $('.btn-gotop').click(function(){
        $(window).scrollTop();
    })

    lastScrollTop = curr;
})

$('.btn-gotop').hover(function(){
    $('.btn-gotop').css({opacity:1})
},function(){
    $('.btn-gotop').css({opacity:0})
})


$('.circle').click(function(){
    window.scrollTo({top:0,behavior:'smooth'})
})


gsap.to('.bar',{
    scrollTrigger:{
        trigger:".container",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0
    },
    "stroke-dashoffset": 0
})


$('.footer a p').mouseenter(function(){
    $('.footer a img').css({transform:"translateY(0rem)"})
})
$('.footer a p').mouseleave(function(){
    $('.footer a img').css({transform:"translateY(2rem)"})
})

$('.footer a p').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'})
})