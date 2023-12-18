$(function(e){
    $(".tabGroup .tab").on("click", function(e){
        //get the index number of the tab that has been clicked
        let index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).closest(".tabGroup").find(".content").eq(index)
        .addClass("active").siblings().removeClass("active");
    })
})