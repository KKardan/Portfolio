let body = document.getElementById("body");
let menu = document.getElementById("menu");
let burger = document.getElementById("burger");
let navLinks = document.querySelectorAll(".navLinks");
let navLinkBars = document.querySelectorAll(".bar");
let menuOpen = false;

let robocodeProject = document.getElementById("robocode");
let robocodePage = document.getElementById("robocodePage");

let worldProject = document.getElementById("world");
let wonderPage = document.getElementById("wonderPage")

let gameHubProject = document.getElementById("gameHub");
let dashPage = document.getElementById("dashPage")

let khealthProject = document.getElementById("khealth");
let khealthPage = document.getElementById("khealthPage");

function _menuClose () {
    menu.classList.remove("in");
    body.classList.remove("menuActive");
    burger.classList.remove("open")
    menuOpen = false;
}
function _menuOpen () {
    menu.classList.add("in");
    body.classList.add("menuActive");
    burger.classList.add("open")
    menuOpen = true;
}
burger.addEventListener("click", () => {
    if(!menuOpen){
        _menuOpen();
    }else {
        _menuClose();
    }
   
})



// ANIMATE MENU LINKS
navLinks.forEach( link => { link.addEventListener("mouseenter", function(){
    let bar = link.previousElementSibling;

    link.classList.add("slideLink");    
    bar.classList.add("slideLinkBar");
    bar.classList.remove("slideLinkBarBack");

    setTimeout( function(){
        link.classList.remove("slideLinkBack");
        link.classList.remove("slideLinkBarBack");
    } , 300);
    
})})

// ANIMATE MENU LINKS
navLinks.forEach( link => { link.addEventListener("mouseleave", function(){
    let bar = link.previousElementSibling;

    bar.classList.add("slideLinkBarBack");
    link.classList.add("slideLinkBack"); 

    setTimeout( function(){
        bar.classList.remove("slideLink");
        bar.classList.remove("slideLinkBack");
        link.classList.remove("slideLinkBar"); 
        link.classList.remove("slideLinkBarBack"); 
    } , 600);
    
})})

// ANIMATE MENU LINKS
let homePage = document.getElementById("homePage");
let aboutPage = document.getElementById("aboutPage");

navLinks.forEach(thisLink => {
    thisLink.addEventListener("click", function() {
        
        if(thisLink === navLinks[0]){
      
            _menuClose();

            window.scrollTo({
                top: 0,
                left:0,
                behavior: 'smooth'
            })
            
            setTimeout(function(){
                homePage.classList.remove("slideOut");
                aboutPage.classList.remove("slideIn");
                robocodePage.classList.remove("slideIn");
                wonderPage.classList.remove("slideIn"); 
                dashPage.classList.remove("slideIn");  
                khealthPage.classList.remove("slideIn");         
            },1500)
        
            
        }else if (thisLink === navLinks[1]){

            
            _menuClose();

            window.scrollTo({
                top: 0,
                left:0,
                behavior: 'smooth'
            })
            
            setTimeout(function(){
                aboutPage.classList.add("slideIn");
                homePage.classList.remove("slideIn");
                homePage.classList.add("slideOut");
                robocodePage.classList.remove("slideIn");
                wonderPage.classList.remove("slideIn"); 
                dashPage.classList.remove("slideIn");    
                khealthPage.classList.remove("slideIn");      
            }, 1500)
    
         
        }
        

    })
})


robocodeProject.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        robocodePage.classList.add("slideIn");     
    }, 500);
   
})

worldProject.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        wonderPage.classList.add("slideIn");     
    }, 500);
   
})

gameHubProject.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        dashPage.classList.add("slideIn");     
    }, 500);
   
})


khealthProject.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    })

    setTimeout(() => {
        khealthPage.classList.add("slideIn");     
    }, 500);
   
})