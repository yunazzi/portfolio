//새로고침되자마자 스크롤이벤트 실행하게끔 실행
$(window).trigger('scroll');


//header
$('.nav').click(function(){
    $('html,body').animate({scrollTop:$(this.hash).offset().top})
})
//메뉴 열고 닫기
$('.gnb-toggle').click(function(e){
    e.preventDefault();
    $('.gnb-toggle').toggleClass('close');
    $('.gnb-toggle').toggleClass('open');
    $('.gnb-area').toggleClass('show');
    $('body').toggleClass('dimmed');
})
//메뉴링크 클릭시 닫기
$('.nav').click(function(){
    $('.gnb-toggle').toggleClass('close');
    $('.gnb-toggle').toggleClass('open');
    $('.gnb-area').toggleClass('show');
    $('body').toggleClass('dimmed');
})


//sc-visual
gsap.to('.sc-visual .detail-area',{
    scrollTrigger:{
        trigger:'.sc-visual .intro-area',
        start:'0% 10%',
        end:'0% 0%',
        scrub:1,
    },
    opacity:0,
    duration:5
})

const intro = gsap.timeline();

intro
    .addLabel('a')
    .from('.sc-visual .intro-area em:first-child',{autoAlpha:0,y:100,duration:1,delay:1},"a")
    .from('.sc-visual .intro-area em:first-child .box-line',{"transform": "scale(0)",duration:1.5,delay:1},"a")
    .from('.sc-visual .intro-area em:first-child .box-wrap',{autoAlpha:0,y:100,duration:1,delay:1.5},"a")
    .from('.sc-visual .intro-area em:nth-child(2)',{autoAlpha:0,y:100,duration:1,delay:1.9},"a")
    .from('.sc-visual .intro-area em:nth-child(3)',{autoAlpha:0,y:100,duration:1,delay:2.3},"a")
    .from('.sc-visual .detail-area',{autoAlpha:0,y:100,duration:1,delay:2.5},"a")


//sc-content
gsap.to('.sc-content .area-list',{
    scrollTrigger:{
        trigger:'.sc-content .area1',
        start:'0% 100%',
        end:'100% 0%',
        scrub:0
    },
    xPercent:-100
})

const contentTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-visual .intro-area em:nth-child(2)',
        start:'-30% 0%',
        end:'100% 100%',
    }
})

contentTl.from('.sc-content .area2 .line',{width:0,autoAlpha:0,duration:1,delay:1},"b")
contentTl.from('.sc-content .area2 .desc div:nth-child(1)',{autoAlpha:0,y:80,duration:1,delay:1.2},"b")
contentTl.from('.sc-content .area2 .desc div:nth-child(2)',{autoAlpha:0,y:80,duration:1,delay:1.3},"b")
contentTl.from('.sc-content .area2 .desc div:nth-child(3)',{autoAlpha:0,y:80,duration:1,delay:1.4},"b")


//sc-project main
const mainTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-content',
        start:'0% 0%',
        end:'100% 100%',
    }
})

mainTl.from('.sc-project.main .main-title em:first-child',{autoAlpha:0,y:100,duration:1,delay:1},"c")
mainTl.from('.sc-project.main .main-title em:last-child',{autoAlpha:0,y:100,duration:1,delay:1.2},"c")

$('.sc-project.main .link .link-btn a').hover(function(){
    $(this).css({color: "#e0fd60"});
    $(this).children().find('path').css({ stroke: "#e0fd60" });
},function(){
    $(this).css({color:"#fff"});
    $(this).children().find('path').css({ stroke: "#fff" });
})


//sc-project sub
const subTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-project.main .area:last-child',
        start:'40% 0%',
        end:'100% 100%',
    }
})
subTl.from('.sc-project.sub .main-title em:first-child',{autoAlpha:0,y:100,duration:1,delay:1},"d")
subTl.from('.sc-project.sub .main-title em:last-child',{autoAlpha:0,y:100,duration:1,delay:1.2},'d')

var swiper2 = new Swiper('.group-pc',{
    slidesPerView:'auto',
    spaceBetween:30,
    pagination:{
        el:".pagination",
        type:"progressbar"
    }
})


//sc-contact

//미디어쿼리시 작동여부
if(window.matchMedia("(min-width:769px").matches){ //768px이상

    const contactTl = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-project.sub .main-title em:last-child',
            start:'60% 0%',
            end:'150% 100%',
        }
    })

    contactTl.from('.sc-contact .contact-area .font',{autoAlpha:0,y:100,duration:1,delay:1},"e")
    contactTl.from('.sc-contact .contact-wrap small',{autoAlpha:0,y:100,duration:1,delay:1.1},"e")
    contactTl.from('.sc-contact .contact-wrap .line',{width:0,duration:1,delay:1},"e")


    $('.sc-contact .outer-box').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger:$(this),
                start:'-540% 0%',
                end:'100% 100%',
            },
            opacity:0,
            y:100,
            delay:1.2
        })
    },"d+1")
    $('.sc-contact .contact-wrap .con-line').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger:$(this),
                start:'-90000% 0%',
                end:'100% 100%',
            },
            opacity:1,
            width:0,
            delay:1.2
        })
    },"d+1")
}else{//768px 미만

}


$('.outer-box').mouseenter(function(){
    $(this).siblings('.inner-box').css({opacity:1,transform: "scaleY(1)"})
})
$('.outer-box').mouseleave(function(){
    $(this).siblings('.inner-box').css({opacity:0,transform: "scaleY(0)"})
})

var swiper1 = new Swiper(".inner-box",{
    slidesPerView:'auto',
    spaceBetween:100,
    speed:5000,
    loop:true,
    autoplay:{
        delay:0,
        disableOnInteraction:false
    },
})


//footer
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


//프로그레스 바 + btn-gotop버튼
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

let lastScrollTop = 0;
let isFlowslideActive = true;

$(window).scroll(function(){
    const curr=$(this).scrollTop();

    if(curr>30){
        $('.circle').css({opacity:1})
    }else{
        $('.circle').css({opacity:0})
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