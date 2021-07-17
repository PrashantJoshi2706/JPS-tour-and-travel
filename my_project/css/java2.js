const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}




$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle event */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
});
//owl - carousal
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    autoplaytimeout:3000,
    dots:false,
    nav:true,
    navText : [$('.owl-navigation .owl-nav-prev'),$(".owl-navigation .owl-nav-next")],
    responsive: responsive
});

$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    }, 1000);
})
document.querySelector('.press').addEventListener('click',function(){
    alert('this link is off currently');
 });
 document.querySelector('.press1').addEventListener('click',function(){
    alert('this link is off currently');
 });
