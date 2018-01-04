$(document).ready(function () {
    $("#loader-pre").addClass('loader-pre')

    $(".input-id").submit(function( event ) {
        event.preventDefault();
        $(".input-id").addClass("input-animation-go")
        $(".loader").addClass("input-animation-go")
        $(".perspective").removeClass("hide-cards")
        $(".perspective").addClass("show-card")
        setTimeout(() => {
            $(".move-container-loader").remove()
            $("#wrapper").removeClass("hide-arrow")
            $("#wrapper").addClass("wrapper")
            $("#page2").addClass("page2")
            $("#page3").addClass("page3")
            $("#page4").addClass("page4")
            $("#page5").addClass("page5")
            $("#page6").addClass("page6")
            $(".id-display-name").removeClass("display-name-hide")
            $(".id-display-name").addClass("display-name")
            $('.card-container').toggleClass("spread")
        }, 2000);
        setTimeout(() => {
            $("#nav-wrapper").removeClass("nav-dispaly-none");
            $("#nav-wrapper").addClass("nav-display-animation");
            $(".social").removeClass("hide");
            $(".social").addClass("social-animation")
            $('#page3').removeClass('hide')
            $('#page3').addClass('show')
            $('#page2').removeClass('hide')
            $('#page2').addClass('show-services')
            $('#page4').removeClass('hide')
            $('#page4').addClass('show-services')
        }, 3000);
    })
    
    //cards
    $('.card-container').click(function(){
      $(this).toggleClass("spread");
    });

})

