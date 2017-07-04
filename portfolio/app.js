//--------Disables modals and enables button w/ collapse--------//
$(document).ready(function () {
    var viewportWidth = $(window).width();

    if (viewportWidth < 768) {        
        $("#myModal, #myModal-one, #myModal-two").removeAttr("id");
        $("img").removeClass("modal");
        $("collapse-one, collapse-two, collapse-three").addClass("collapse");
    } else {
        $(".btn-info").remove();
    }
})    
