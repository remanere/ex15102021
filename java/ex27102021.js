
$(document).ready(function () {

    $(function() {

        if ($.cookie('cookieStore')) {
             var data=JSON.parse($.cookie("cookieStore"));
             $('#name').text(data[0]);
             $('#address').text(data[1]);
       }

       $('#submit').on('click', function(){

             var storeData = new Array();
             storeData[0] = $('#inputName').val();
             storeData[1] = $('#inputAddress').val();

             $.cookie("cookieStore", JSON.stringify(storeData));
             var data=JSON.parse($.cookie("cookieStore"));
             $('#name').text(data[0]);
             $('#address').text(data[1]);
       });
     });
});