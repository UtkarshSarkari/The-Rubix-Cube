const one  = document.getElementById("one");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    one.style.backgroundPositionY = offset * 0.7 + "px";
});