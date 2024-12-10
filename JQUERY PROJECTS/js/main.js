$(document).ready(function(){
    $("#menu").click(function(){
        $("aside").fadeToggle();
    });

    //remove history

    $(".close-history").click(function(){
       $(this).parent().remove();
    });

    //funtion for slideshow

    let slideIndex = 0;
    let slide = $(".slide");

    function showSlide(){
        slide.eq(slideIndex).slideDown(100);
        slide.eq((slideIndex -1 + slide.length) % slide.length).slideUp(100);
       slideIndex = (slideIndex + 1) % slide.length;
    }

    setInterval(showSlide,3000)
});