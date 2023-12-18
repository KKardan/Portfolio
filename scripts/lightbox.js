const openLightBox = function (event){
    console.log(event.target.src);
    $(".lightbox-content").html("<img src='" + event.target.src + "'/>");
    $(".lightbox").addClass("active");
    _showLightBox();

}

$(function(){
    $(".gallery img").on("click",  openLightBox);

    $(".lightbox-back").on("click", function(){
        $(".lightbox").removeClass("active");
        _closeLightBox();
    })
    $("#lightBoxClose").on("click", function(){
        $(".lightbox").removeClass("active");
        _closeLightBox();
    })
})