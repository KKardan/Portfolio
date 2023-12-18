const trueNumber = function(num, max){
    return num < 0 ? num+max : num;
}

const signNumber = function(num, max){
    return num > max * 0.5 ? num%max-max : num;
}
const wrapNumber = function(num, max){
    return trueNumber(signNumber(num, max), max);
}

let imageNum
let imageIndex
let galleryImages = document.querySelectorAll(".galleryImages");
console.log(galleryImages);
galleryImages.forEach((image, index) => { 
    image.addEventListener("click",function(){
        imageNum =  image.getAttribute("name");
        // console.log(imageNum);
        imageIndex = index;
        // console.log(imageIndex);
        _showCarousel();
    });
 })

class Carousel {
    constructor(o){
        Object.assign(this, o);

        let carousel = this;
        // setting the initial silde to the silde with index 0

        this.currentSlide = 0;
        // assigning the slides from html to the slide variable in the constructor
        this.slides = this.element.find(".slide");
        this.dots = this.element.find(".control-dot");

        // create a timmer for the slide to automatically run
        if(this.timing){
            this.startSlideShow();
        }

        // change the slide with the left and right arrow
        this.element.find(".control-left").on("click", function(){
            carousel.changeSlide(false);
            carousel.restartSlideShow();
        })

        this.element.find(".control-right").on("click", function(){
            carousel.changeSlide(true);
            carousel.restartSlideShow();
        })

        this.element.find(".control-dot").on("click", function(){
            //setting the index to be the element index
            let index = $(this).index();
            // change the slide to the index slide
            carousel.changeSlide(index);
            carousel.restartSlideShow();
        });
    }

    // changeSlide function
    changeSlide(direction){
        this.previousSlide = this.currentSlide;
        
        if(direction === true){
            this.currentSlide++;
        }else if(direction === false){ 
            this.currentSlide--;
         }else{
            if(this.currentSlide == direction) {
                return;
            }
            this.currentSlide = direction; 
            direction = this.currentSlide > this.previousSlide;
        }
        this.currentSlide = wrapNumber(this.currentSlide, this.slides.length);
        this.showSlide(direction);
    }

    // showSlide function
    showSlide(direction) {
        let c = this;
        this.slides.removeClass("moving left right center");
        this.slides.eq(this.previousSlide).addClass("center");
        if(direction){
            this.slides.eq(this.currentSlide).addClass("right");
        }else{
            this.slides.eq(this.currentSlide).addClass("left");
        }
        setTimeout(function(){
            c.dots.eq(c.currentSlide).addClass("acitve").siblings().removeClass("active");
            c.slides.eq(c.currentSlide).removeClass("left right").addClass("center moving");
            if(direction){
                c.slides.eq(c.previousSlide).removeClass("center").addClass("left moving");
            }else{
                c.slides.eq(c.previousSlide).removeClass("center").addClass("right moving");
            }
        }, 10)
    } 

    // startSlideShow function
    startSlideShow(){
        let c = this;
        c.stopSlideShow();
        c.timer = setTimeout(function(){
            c.changeSlide(true);
            c.showSlide(true);
            c.startSlideShow();
        }, c.timing); 
    }

    //stopSlideShow function
    stopSlideShow() {
        clearTimeout(this.timer);
    }

    // restartSlideShow function
    restartSlideShow(){
        let c = this;
        this.stopSlideShow();
        if(this.timing){
            this.timer = setTimeout(function(){
                c.startSlideShow();
            }, 5000);
        }
    }
}