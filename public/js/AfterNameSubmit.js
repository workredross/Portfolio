$(document).ready(function () {
    $(".input-id").submit(function( event ) {
        event.preventDefault();
        $(".input-id").addClass("input-animation-go")
        setTimeout(() => {
            $("#wrapper").removeClass("hide-arrow")
            $("#wrapper").addClass("wrapper")
            $("#page2").addClass("page2")
            $(".id-display-name").removeClass("display-name-hide")
            $(".id-display-name").addClass("display-name")
        }, 2000);
        // setTimeout(() => {
            
        // }, 3000);
    })

})

