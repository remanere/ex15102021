
$(document).ready(function () {

    let menu = $("#menu");

    $("#btnMenu").click(function () {
        if (menu.is(":visible")){
            menu.fadeOut();
        }else{
            menu.fadeIn();
        }
    });

});