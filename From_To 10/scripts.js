
var tl = gsap.timeline();


tl.from(".part1 h1",{

    y:-30,
    opacity:0,
    duration:1,
    delay:0.2,
    scale:2
  
})
tl.from(".part2 li",{

    y:-30,
    opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.3,
    scale:2
   
})