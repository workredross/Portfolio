$(document).ready(function () {
    var $window = $(window);
    $window.scroll(function() {
        
        if ($window.scrollTop()>window.innerHeight*.05 && $window.scrollTop()<window.innerHeight*.6 ) {
        $('.one').removeClass('li-color')        
        $('.one').addClass('active')
        $('.two').removeClass('active')
        $('.two').addClass('li-color')
        $('.three').addClass('li-color')
        $('.four').addClass('li-color')
        $('.five').addClass('li-color')
        $('.six').addClass('li-color')
        $("#nav-bar").addClass('nav-color')
        }
        else if($window.scrollTop()>= window.innerHeight*.6 && $window.scrollTop()<window.innerHeight*1.6){
            $('.one').removeClass('active')
            $('.one').addClass('li-color')
            $('.two').removeClass('li-color')
            $('.two').addClass('active')
            $('.three').removeClass('active')
            $('.three').addClass('li-color')
        }
        else if($window.scrollTop()>= window.innerHeight*1.6 && $window.scrollTop()<window.innerHeight*2.6){
            $('.two').removeClass('active')
            $('.two').addClass('li-color')
            $('.three').removeClass('li-color')
            $('.three').addClass('active')
            $('.four').removeClass('active')
            $('.four').addClass('li-color')
            
        }
        else if($window.scrollTop()>= window.innerHeight*2.6 && $window.scrollTop()<window.innerHeight*3.6){
            $('.three').removeClass('active')
            $('.three').addClass('li-color')
            $('.four').removeClass('li-color')
            $('.four').addClass('active')
            $('.five').removeClass('active')
            $('.five').addClass('li-color')
        }
        else if($window.scrollTop()>= window.innerHeight*3.6 && $window.scrollTop()<window.innerHeight*5){
            $('.four').removeClass('active')
            $('.four').addClass('li-color')
            $('.five').removeClass('li-color')
            $('.five').addClass('active')
            $('.six').removeClass('active')
            $('.six').addClass('li-color')
        }
    });
})