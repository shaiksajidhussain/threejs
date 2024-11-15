gsap.to(".page2 h1", {
    transform: "translateX(-280%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
   
  
        start: "top 0%",
        end: "top -700%",
        scrub: 3,
        pin: true,
        toggleActions: "play none none none" 
    }
});


gsap.to(".video #video", {
    scale: 2, 
    scrollTrigger: {
        trigger: ".video",
        scroller: "body",
   
        start: "top 40%",
        end: "top 10%", // Keeps the zoom effect active until the video is completely scrolled past
        scrub: 3,
        pin: true,
        toggleActions: "play none none none" // The zoom effect will stay zoomed in after scroll
    }
});



gsap.from(".navone",{

    opacity:0,
    duration:1.5,
    delay:1,
    y:-100

})
gsap.from(".navtwo li",{

    opacity:0,
    duration:1.5,
    delay:1,
    y:-100,
    stagger:0.3

})
gsap.from("#hello",{

    opacity:0,
    duration:1.5,
    delay:1,
    y:100,
    stagger:0.3,
   

})
gsap.from("#weare",{

    opacity:0,
    duration:1.5,
    delay:1,
    y:100,
    stagger:0.3

})
gsap.from("#wethink",{

    opacity:0,
    duration:1.5,
    delay:1,
    y:100,
    stagger:0.3

})



gsap.from("#paragraph", {
    opacity: 0,
    duration: 3.5,
    delay: 1,
    y: 500,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#paragraph", // Trigger the animation when the paragraph enters the viewport
        scroller: "body", // Ensure the body is used for scrolling
        
        start: "top 80%", // Start animation when top of paragraph is 80% from the top of the viewport
        end: "bottom 60%", // Animation will continue until the bottom of the paragraph is 60% from the top of the viewport
        scrub: 1, // Smooths the animation over the scroll duration
   
    }
});
