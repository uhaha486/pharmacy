
$('.depth1').hover(
    function () {
        $('.menu-box').addClass('show');
    },
    function () {
        $('.menu-box').removeClass('show');
    },

);



$(function(){
    $('#group1').click(function(){
        $('.notice-text').removeClass('show');
        $('.news1').addClass('show');
   
    })
    $('#group2').click(function(){
        $('.notice-text').removeClass('show');
        $('.news2').addClass('show');
    })
    $('#group3').click(function(){
        $('.notice-text').removeClass('show');
        $('.news3').addClass('show');
    })
})
//tap color change

$(function(){
    $('#group1').click(function(){
  $('button').removeClass('color');
  $('#group1').addClass('color');
    })
    $('#group2').click(function(){
        $('button').removeClass('color');
        $('#group2').addClass('color');
    })
    $('#group3').click(function(){
        $('button').removeClass('color');
        $('#group3').addClass('color');
    });
});





//sticky

// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;
// console.log(sticky);

// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//         $('#myHeader').css('backgrondColor', '#000');
//         $('#myHeader .container img').attr('src', 'images/logo-white.png')
//     } else {
//         header.classList.remove("sticky");
//         $('#myHeader .container img').attr('src', 'images/logo.png')
//     }
// }





