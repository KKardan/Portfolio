// SHOW/HIDE MENU PLAGE
let navBtn = document.querySelector("#navMenu");
navBtn.addEventListener("click", _showNav);

let navPage = document.getElementById("navPage");

navPage.style.left = "100vw";
function _showNav () {
    // ANIMATE BURGER MENU
    navBtn.classList.add("open");
    setTimeout(function() {burgerLines.forEach( k => {
        k.style.background = "#ffffff";
    })}, 900);

    console.log("click"); 
    navPage.style.display = "block";
    if( navPage.style.left === "100vw" ){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        navPage.style.left = 0;
        setTimeout(function (){
            artistPage.style.display = "none"; 
            galleryPage.style.display = "none";  
            groupSeven.style.display = "none";
        },900)
        setTimeout(function () {IsolationPeak.style.height = "100vh";IsolationPeak.style.display = "none";}, 900)
    } else {
        navBtn.classList.remove("open");
        if(IsolationPeak.style.height === "100vh") {
            IsolationPeak.style.height = "158vh";
            IsolationPeak.style.display = "block";
            navPage.style.left = "100vw";
            setTimeout(function() {navPage.style.display = "none";}, 900);
        }else{
            navPage.style.left = "100vw";
            setTimeout(function() {navPage.style.display = "none";}, 900);
        }
    }
    
}

// BURGER LINES
let burgerLines = document.querySelectorAll("#navMenu span");
console.log(burgerLines);
// SHOW ARTIST PAGE
let artistPage = document.getElementById("artistPage");
let artist = document.getElementById("artist");

artist.addEventListener("click", _showArtistPage);
function _showArtistPage () {
    artistPage.style.display = "block";
    mcMicheal.style.display = "none";
    IsolationPeak.style.display = "none";
    galleryPage.style.display = "none";
    FAQPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    setTimeout(function() {burgerLines.forEach( k => {
        k.style.background = "#516f79";
    })}, 900);
    navBtn.classList.remove("open");
}

// SHOW GALLERY PAGE
let galleryPage = document.getElementById("galleryPage");
let gallery = document.getElementById("gallery");

gallery.addEventListener("click", _showGalleryPage);
function _showGalleryPage () {
    galleryPage.style.display = "block";
    IsolationPeak.style.display = "none";
    artistPage.style.display = "none";
    mcMicheal.style.display = "none";
    FAQPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    navBtn.classList.remove("open");
}

// SHOW GROUP OF SEVEN
let groupOfSeven = document.getElementById("groupOfSeven");
let groupSeven = document.getElementById("groupSeven");

groupOfSeven.addEventListener("click", _showGroupOfSeven);
function _showGroupOfSeven () {
    groupSeven.style.display = "block";
    IsolationPeak.style.display = "none";
    mcMicheal.style.display = "none";
    galleryPage.style.display = "none";
    artistPage.style.display = "none";
    FAQPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    setTimeout(function() {burgerLines.forEach( k => {
        k.style.background = "#516f79";
    })}, 900);
    navBtn.classList.remove("open");
}

// SHOW MCMICHEAL PAGE
let mcMicheal = document.getElementById("mcMicheal");
let mcMichealGallery = document.getElementById("mcMichealGallery");

mcMichealGallery.addEventListener("click", _showMcMicheal);
function _showMcMicheal () {
    mcMicheal.style.display = "flex";
    IsolationPeak.style.display = "none";
    galleryPage.style.display = "none";
    artistPage.style.display = "none";
    FAQPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    navBtn.classList.remove("open");
}

// SHOW ISOLATION PEAK
let IsolationPeak = document.getElementById("IsolationPeak");
let art = document.getElementById("art");

art.addEventListener("click", _showArt);
function _showArt () {
    IsolationPeak.style.height = "158vh";
    IsolationPeak.style.display = "block";
    mcMicheal.style.display = "none";
    galleryPage.style.display = "none";
    artistPage.style.display = "none";
    FAQPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    navBtn.classList.remove("open");
}

// SHOW FAQ
let FAQPage = document.getElementById("FAQPage");
let FAQ = document.getElementById("FAQ");

FAQ.addEventListener("click", _showFAQ);
function _showFAQ () {
    FAQPage.style.display = "block";
    IsolationPeak.style.display = "none";
    mcMicheal.style.display = "none";
    galleryPage.style.display = "none";
    artistPage.style.display = "none";
    carouselPage.style.display = "none";
    navPage.style.left = "100vw";
    setTimeout(function (){navPage.style.display = "none"},900);
    navBtn.classList.remove("open");
}

// CAROUSEL 
let carouselPage = document.getElementById("galleryPageCarousel");
function _showCarousel() {
    carouselPage.style.display = "block";
    FAQPage.style.display = "none";
    IsolationPeak.style.display = "none";
    mcMicheal.style.display = "none";
    galleryPage.style.display = "block";
    artistPage.style.display = "none";
    navPage.style.left = "100vw";
    navBtn.classList.add("open");
    setTimeout(function (){navBtn.style.display = "none"},250);
    setTimeout(function (){navPage.style.display = "none"},900);
    setTimeout(function (){carouselClose.style.opacity = 1;},250);
}
// CAROUSEL CLOSE
let carouselClose = document.getElementById("carouselClose");
carouselClose.addEventListener("click", _closeCarousel);
function _closeCarousel() {
    carouselPage.style.display = "none";
    navBtn.style.display = "block";
    setTimeout(function (){navBtn.classList.remove("open");},100);
}

// LIGHTBOX CLOSE
let lightBoxClose = document.getElementById("lightBoxClose");
function _showLightBox(){
    navBtn.classList.add("open");
    setTimeout(function (){navBtn.style.display = "none"},250);
    setTimeout(function (){ lightBoxClose.style.opacity = 1;},100);
    groupSeven.style.height = "100vh";
    groupSeven.style.overflowY="hidden";
}
function _closeLightBox() {
    navBtn.style.display = "block";
    setTimeout(function (){navBtn.classList.remove("open");},100);
    setTimeout(function (){ lightBoxClose.style.opacity = 1;},100);
    groupSeven.style.height = "150vh";
    groupSeven.style.overflowY="auto";
}


// Scroll

let scroll = document.getElementById("scroll");
let peak = document.getElementById("peak");
scroll.addEventListener("click", function (e) {
    e.preventDefault();
    peak.scrollIntoView({
        behavior:"smooth"
    })
});

// ACCORDION FOR FAQ PAGE
$("#accordion dt").on("click", function() {
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

