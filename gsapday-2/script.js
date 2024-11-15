var cursor = document.querySelector(".cursor");
var experience = document.querySelector(".experience");
var video = document.querySelector(".video");

var tl = gsap.timeline();



tl.from(".logo",{

    y:-100,
    opacity:0,
 

})
tl.from(".part2 li",{

    y:-100,
    opacity:0,
 

   

})

tl.from(".heading h1",{

    y:100,
    opacity:0,
    duration:1,
})

tl.from(".subheading p",{

    y:100,
    opacity:0,
    duration:1,
})

gsap.to(".video video",{

width:"100%",
duration:1,
scrollTrigger:{
    trigger:".video",
   start:"top 60%",
   end:"bottom 10%",

    scrub:true,
    
}
})

gsap.to(".experience p",{
   transform:"translateX(-190%)",
  
   scrollTrigger:{
    trigger:".experience",
    start:"top 10%",
    end:"bottom 3%",
    markers:true,


    scrub:2,
    pin:true,
  
  
   }
})

video.addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        scale:4,
        innerHTML: "<div style='width:100%; height:100%; border-radius:100%; display:flex; justify-content:center; align-items:center;'><p style='font-size:6px; text-align:center;'>view more</p></div>",
        

        
    })
})
video.addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        innerHTML:"",
        scale:1,
        
    })
})



document.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x,
        y: e.clientY - 100,
        duration: 1,
    

    })
})