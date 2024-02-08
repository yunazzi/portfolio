//gnb
$('.scroll-move').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top})
    //offset().top -> 해당요소의 맨위
    //scrollTop 스크롤바 수직위치(값)

    

    
    // 해당섹션에 갔을때, on클래스가 있고, 해당섹션에 벗어나면 on클래스가 없고
})


// $(window).on('scroll', function() {
//     let currentPosition = $(this).scrollTop();
//     // 섹션 위치값 비교

//     $('section').each(function() {
//       let top = $(this).offset().top - 150; // 
//       let bottom = top + $(this).outerHeight();

//       if (currentPosition >= top && currentPosition <= bottom) {
//         let sectionId = $(this).attr('id');
//         $('.gnb li').removeClass('on');
//         $('.gnb li').find('a[href="#' + sectionId + '"]').parent().addClass('on');
//       }
//     });
//   });





//sc-visual
const visualtl = gsap.timeline({
    scrollTrigger:{
        trigger:"body",
        start:"top top",
        end:'100% 10%',
        scrub:1,
        // markers:true,
    },
});
// visualtl
//     .fromTo('.sc-visual .img1',{rotate:-15},{rotate:15,duration:0.1},"a")
//     .fromTo('.sc-visual .img2',{rotate:-85},{rotate:0,duration:0.1},"a")
//     .fromTo('.sc-visual .img3',{rotate:0},{rotate:30,duration:0.1},"a")
//     .fromTo('.sc-visual .img4',{rotate:15},{rotate:-15,duration:0.1},"a+=0.1")


// //lenis - 조금 더 gsap을 부들거리게 해줌
// const lenis = new Lenis()

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 2000)
// })

// gsap.ticker.lagSmoothing(0)

//sc-content1
gsap.to('.sc-content1 .area-wrap',{//움직일대상
    scrollTrigger:{
        trigger:'.sc-content1 .area1',//기준
        start:'0% 100%',
        end:'100% 0%',
        // markers:true,
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
$('.circle').click(function(){
    window.scrollTo({top:0,behavior:'smooth'})
})

// $('.circle').hover(function(){

// })





// $('.sc-visual img').each(function(i,el){
//     gsap.to($(this),{
//         scrollTrigger:{
//             trigger:$(this),
//             start:'0% 100%',
//             end:'100% 0%'
//         },
//         rotate:10,
//         rotate:5
//     })
// })

gsap.to('.bar',{
    scrollTrigger:{
        trigger:".container",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0
    },
    "stroke-dashoffset": 0
})

$('.btn-gotop').hover(function(){
    $('.btn-gotop').css({opacity:1})
},function(){
    $('.btn-gotop').css({opacity:0})
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


// $('.sc-contact .contact-content a').each(function(){})
$('.out-title').mouseenter(function(){
    $(this).siblings().css({opacity:1})
    // $(this).siblings().css({transform: "scaleY(1)"})
    // $(this).css({opacity:0})
})
$('.out-title').mouseleave(function(){
    $(this).siblings().css({opacity:0})
    // $(this).siblings().css({transform: "scaleY(0)"})
    // $(this).css({opacity:1})
})
// $('.out-title').each(function(){})