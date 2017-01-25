(function($){
   

//var w = $(window);
//console.log(w.height());
//var d = $(document);
//    console.log(d.height());
//$(window).scroll(function(){
//    var top = $('html').scrollTop();
//    setTimeout(
//    function(){
//        if(top == 0){
//            $('#hero').animate({
//                height:'70px'
//            })
//        }else{
//            $('#hero').animate({
//                height:'50px'
//            })
//        }
//    },100);
//});
    var scrollTimer = null;
$(window).scroll(function() {
    var top = $(document).scrollTop(); // use document (suggested by seva.rubbo)
                                       // use local var (suggested by Sam Battat)

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(
    function() 
    {
        if(top == 0)
        {
            $("#hero").animate({height:'70px'});
        }
        else
        {
            $("#hero").animate({height:'43px'});
        }
    }, 100);
});
})(jQuery);