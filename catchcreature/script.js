
var screen = document.querySelectorAll(".screen")
var btn = document.querySelector(".screen button")
var allElems = document.querySelectorAll(".elem")
var playGround = document.querySelector(".playground")
var selected = ""
var scoreValue = document.querySelector(".time-score h3 span")
var score = 0
var timeval = document.querySelector(".time-score h5 span")
var time = 10
var over = document.querySelector("#over")



btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"
})

allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
        screen[2].style.transform = "translateY(-200%)"
        selected= elem.childNodes[3].getAttribute("src")
        
        var f = setInterval(function(){
            time--
            timeval.innerHTML = time
            createImage()
        },1000)
        setTimeout(function(){
            clearInterval(f)
            // createImage(f)
            // catchImage(f)
        },10000)
        
        
    })
})


function createImage(){
        var newImg = document.createElement("img")
        newImg.setAttribute("src",selected)
        var x = Math.random()*100
        var y = Math.random()*100
        // var rot = Math.random()*360
        newImg.style.left = x+"%"
        newImg.style.top = y+"%"
        // newImg.style.rotate = rot+"deg"
        console.log(newImg)
        playGround.appendChild(newImg)

        catchImage()

        setTimeout(function(){
            playGround.removeChild(newImg)
            
        },1200)
        setTimeout(function(){
            over.style.display = "block"
        },10000)
        
}


function catchImage(){
    var images = document.querySelectorAll(".playground img")
    images.forEach(function(elem){
        elem.addEventListener("click",function(){
            score++
            
            scoreValue.innerHTML = score
        })
    })
}

// var tl = gsap.timeline()
// tl.from(".screen h1",{
//     y:-700,
//     opacity:0,
//     duration:2,
//     // repeat:-1,
   

// })
// tl.from(".screen h2",{
//     x:-600,
//     duration:2,
//     opacity:0
// })
// tl.from(".elem-container .elem",{
//     left:-600,
//     opacity:1,
//     duration:2,
    
//     stagger:0.4
    
// })

var tl = gsap.timeline()
tl.from(".screen h1",{
    y:-700,
    opacity:0,
    duration:2,
    // repeat:-1,
   

})
tl.from(".screen h2",{
    x:-600,
    duration:2,
    opacity:0
})
tl.from(".elem-container .elem",{
    left:-600,
    opacity:0.7,
    duration:2,
    
    stagger:0.4
    
})
