/*var elemone = document.querySelector("#elem-one")
var elemImg = document.querySelector("#elem-one img")

elemone.addEventListener("mousemove",function(dets){
    elemImg.style.left = dets.x+"px"
    elemImg.style.top = dets.y+"px"
})


elemone.addEventListener("mouseenter",function(dets){
    elemImg.style.opacity = 1
    
})



elemone.addEventListener("mouseleave",function(dets){
    elemImg.style.opacity = 0
    
})*/



var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    // val.childNodes[3].style.opacity = 1
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1

    });

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0

    });

    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"

    });
    
});


