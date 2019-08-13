// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

$('.depth1').hover(
    function () {
        $('.menu-box').addClass('show');
    },
    function () {
        $('.menu-box').removeClass('show');
    },

);


$(document).ready(function () {
    $('.slider').bxSlider(
    {
        auto:true,
        speed:500

    }
    );
    
});









