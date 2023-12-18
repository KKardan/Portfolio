const evPoints = e => e.type.substring(0,5)!="touch"?[e]:!e.touches.length?e.changedTouches:e.touches;
const getEXY = (e,o) => { let rect = (o||e.target).getBoundingClientRect(); return ({ x:e.pageX-rect.left - window.scrollX, y:e.pageY-rect.top - window.scrollY}); } 
// const getEXY = (e,o) => { let rect = (o||e.target).getBoundingClientRect(); return ({ x:e.pageX-rect.left, y:e.pageY-rect.top}); } 
const getEventXY = (e,o) => getEXY(evPoints(e)[0],o);
const clamp = (min,max) => n => {
	return n > max ? max : n < min ? min : n;
};

$(function(){

	$(".main-image").on("mousemove touchmove", function(event){
		// LOCATION OF THE MOUSE ON SCREEN X AND Y
		let pos = getEventXY(event);
		// console.log (pos);

		// DEFINING THE X AND Y 
		let zoompos = {
			x: clamp(0, 449)(pos.x - 100),
			y: clamp(0, 250)(pos.y - 100)
		}
		// ALIGNING THE MOVEMENT OF THE ZOOMER BOX WITH THE CURSOR POSITION
		$(this).closest(".zoom").find(".zoomer").css({
			transform:'translate(' + zoompos.x + 'px, ' + zoompos.y	+ 'px)'
		});
		//MULTIPLYING THE ZOOMER PISTION BY 5 AND SETTING AS THE BACKGROUND POSITION FOR THE ZOOMED IMAGE
		$(this).closest(".zoom").find(".zoomed-image").css({
			"background-position": (-zoompos.x * 5) + 'px ' + (-zoompos.y * 5) + 'px'
		});
	});
	
});