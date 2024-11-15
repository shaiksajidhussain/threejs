// gsap.from("h1", {
  
//     opacity:0,
//     duration:1,
//     delay:1,
//     y:50,
//     stagger:1,

// });


// gsap.to("#box", {
//     x: 500,
//     delay:1,
//     duration:2,
//     repeat:-1,
//     yoyo:true,
    
   
// });



// var tl = gsap.timeline();

// tl.from("#box1", {
//     x:500,
//     duration:2,
// })

// tl.from("#box2", {
//     x:500,
//     duration:2,
// })

// tl.from("#box", {
//     x:500,
//     duration:2,
// })



var tl = gsap.timeline();


tl.from("#nav", {
    y: -100,
    duration:1,
    opacity:0,

    stagger:2
})

tl.from("li", {
    y: -100,
    duration:1,
    
    opacity:0,

    stagger:0.2
})

tl.from("h1", {

    duration:1,
    y:20,
    opacity:0,
    transform: "scale(0.1)",
})