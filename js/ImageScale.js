// ************** HOME PAGE 

let projectImages = document.querySelectorAll(".projectItem");

// MOUSE OVER
projectImages.forEach( image => { image.addEventListener("mouseenter", function(){
    let img = image.firstElementChild.firstElementChild;
    let description = img.nextElementSibling.nextElementSibling.nextElementSibling;
    let title = img.nextElementSibling.nextElementSibling.classList;
    
    img.classList.add("scale");
    img.nextElementSibling.classList.add("on");
    title.add("appear");  
    description.classList.add("appear");
})})

// MOUSE OUT
projectImages.forEach( image => { image.addEventListener("mouseleave", function(){
    let img = image.firstElementChild.firstElementChild;
    let description = img.nextElementSibling.nextElementSibling.nextElementSibling;
    let title = img.nextElementSibling.nextElementSibling.classList;

    img.classList.remove("scale");
    img.nextElementSibling.classList.remove("on");
    title.remove("appear");  
    description.classList.remove("appear");  
})})


// ************** ABOUT PAGE

let expertiseItem = document.querySelectorAll(".expertiseItem");
expertiseItem.forEach( card => { card.addEventListener("mouseenter", function(){
    let div = card.firstElementChild;
    let img = div.firstElementChild;
    card.classList.add("hovered");
    img.classList.add("scaleUp");
})})
expertiseItem.forEach( card => { card.addEventListener("mouseleave", function(){
    let div = card.firstElementChild;
    let img = div.firstElementChild;
    card.classList.remove("hovered");
    img.classList.remove("scaleUp");
})})