$(document).ready(function () {

    $(".input-id").submit(function( event ) {
        event.preventDefault();
        $(".input-id").addClass("input-animation-go")
        setTimeout(() => {
            $("#wrapper").removeClass("hide-arrow")
            $("#wrapper").addClass("wrapper")
            $("#page2").addClass("page2")
            $("#page3").addClass("page3")
            $("#page4").addClass("page4")
            $("#page5").addClass("page5")
            $("#page6").addClass("page6")
            $(".id-display-name").removeClass("display-name-hide")
            $(".id-display-name").addClass("display-name")
        }, 2000);
        setTimeout(() => {
            $("#nav-wrapper").removeClass("nav-dispaly-none");
            $("#nav-wrapper").addClass("nav-display-animation");
        }, 3000);
    })
    

})

