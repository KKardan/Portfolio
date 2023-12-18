

// ACCORDION FOR FAQ PAGE
$("#accordion dt").on("click", function() {
    console.log("sddsav")
    //index the dt element that is clicked on
    let element = $(this).index("#accordion dt");    
    console.log(element);

    // target the adjecent sibling of the td that has been clicked on
    let adjacentSibling = $("#accordion dd").eq(element);
    console.log(adjacentSibling);

    // check condition
    if(adjacentSibling.is(":visible")){
        // if it is visible slide it up.
        adjacentSibling.slideUp();
    }else{
        // slide down the adjacentSibling and find it's dd siblings and slide them up.
        adjacentSibling.slideDown().siblings("dd").slideUp();
    }
});


// ACCARDION FOR ROBO TASKs
$("#accordionRobo dt").on("click", function() {
    console.log("sddsav")
    //index the dt element that is clicked on
    let element = $(this).index("#accordionRobo dt");    
    console.log(element);

    // target the adjecent sibling of the td that has been clicked on
    let adjacentSibling = $("#accordionRobo dd").eq(element);
    console.log(adjacentSibling);

    // check condition
    if(adjacentSibling.is(":visible")){
        // if it is visible slide it up.
        adjacentSibling.slideUp();
    }else{
        // slide down the adjacentSibling and find it's dd siblings and slide them up.
        adjacentSibling.slideDown().siblings("dd").slideUp();
    }
});

// ACCARDION FOR ROBO TASKs
$("#accordionWonder dt").on("click", function() {
    console.log("sddsav")
    //index the dt element that is clicked on
    let element = $(this).index("#accordionWonder dt");    
    console.log(element);

    // target the adjecent sibling of the td that has been clicked on
    let adjacentSibling = $("#accordionWonder dd").eq(element);
    console.log(adjacentSibling);

    // check condition
    if(adjacentSibling.is(":visible")){
        // if it is visible slide it up.
        adjacentSibling.slideUp();
    }else{
        // slide down the adjacentSibling and find it's dd siblings and slide them up.
        adjacentSibling.slideDown().siblings("dd").slideUp();
    }
});
