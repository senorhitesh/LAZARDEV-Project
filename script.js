let hoverDivs = document.querySelectorAll(".projects-divs");
let arrow = document.querySelector(".arrow");

hoverDivs.forEach((div) =>{
    div.addEventListener("mouseenter",function(){
         gsap.to( div.childNodes[3],{
            opacity:1 ,
            scale:1
         })
    })
    div.addEventListener("mouseleave",function(){
         gsap.to( div.childNodes[3],{
            opacity:0 ,
            scale:0
         })
    })
    div.addEventListener("mousemove",function(value){
        gsap.to( div.childNodes[3],{
           x:value.x - div.getBoundingClientRect().x - 30,
           y:value.y - div.getBoundingClientRect().y -140
         })
    })
})