 // locomotive js - smooth scrolling 
 const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
 })
                // smooth scrolling done



 //  gsap to animate 

 gsap.from(".nlink", {
    stagger :0.2,
    y: 10,
    opacity: 0 ,
    duration: 1 ,
    ease : Power2
 })


 // shery js to animate images gsap.to(".nlink", {
 Shery.textAnimate("#headings h1", {
  style: 2,
  duration: 1,
  stagger :0.5,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",

});


gsap.from(".anim2",{
    y:50,
    stagger:0.3,
    opacity:0,
    ease: Expo,
    duration:1

})

Shery.imageEffect("#imgntext img", {
    style: 2,
    debug: true,
  });

 gsap.from("#imgntext img" ,{
    z: "70",
    opacity: 0,
    duration : 2,
    ease : Expo.easenInOut(),
 })  


 gsap.from(".imgeff img",{
    7:"50",
    stagger:0.3,
    opacity:0,
    ease: ExpoInOut,
    duration:1

})

Shery.imageEffect("#bimg",{
    style :5,
    debug :true,
    gooey :true
})

var futureButton = document.querySelector("#ftext button")
futureButton.addEventListener("mouseover" , function(){
    gsap.to("#future video ",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})

futureButton.addEventListener("mouseleave" , function(){
    gsap.to("#future video ",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
})