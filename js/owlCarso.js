$('.owl-carousel').owlCarousel({
    margin:10,
    autoplay:true,
    dots:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2 

        },
        992:{
            items:3     
        },
        1200:{
            items:4    
        }
    }
})