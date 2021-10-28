$(document).ready(function () {

    $('.box2 img').click(function() {

        var thmb = this;

        var src = this.src;

        $('.box1 img').fadeOut(400,function(){

            thmb.src = this.src;

            $(this).fadeIn(400)[0].src = src;
            
        });
        
    });

    });