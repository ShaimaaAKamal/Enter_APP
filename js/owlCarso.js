$('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    navText : ["<i class='fa fa-chevron-left me-3'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplay:true,
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
        }
    }
})