var main = document.getElementById("main");  // No #
var cursor = document.getElementById("cursor");  // No #


var menu = document.querySelector(".left i")

var cross = document.querySelector(".full i")





var tl = gsap.timeline()


tl.to(".full",{
    right:0,
    duration:0.8,
   
})


gsap.from(".left h3", {
    y: -150,  
    duration: 0.9,
    delay:1,
    opacity: 0
});


tl.from(".full h4",{

    x:500,
    duration:0.5,
    stagger:0.3,
    opacity:0

})
tl.from(".full i",{

   
    opacity:0

})

tl.pause()

menu.addEventListener('click',()=>{
   tl.play()
})

cross.addEventListener('click',()=>{
    tl.reverse()
})


main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX,  // Use clientX instead of dets.x
        y: dets.clientY,  // Use clientY instead of dets.y
        duration:1.2
    });
});

