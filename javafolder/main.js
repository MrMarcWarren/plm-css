window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
}
)

window.addEventListener("scroll",reveal);

function reveal(){
    var reveals = document.querySelectorAll(".row1, .row2, .row3, .titlerow, .arow1, .asec2-btn, .officer-container, .team-container");
    for (var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 110;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        }
        else{
           reveals[i].classList.remove("active"); 
        }
    }
}

let yesbtn = document.querySelector("#yes-btn");
let nobtn = document.querySelector("#no-btn");
let p = document.querySelector("#question");
let p2 = document.querySelector("#question2")

p2.style.opacity = "0";

yesbtn.addEventListener("click", () => {
    p2.style.opacity = "1";
    p2.style.transition = "all 2s";
    p.remove();
    yesbtn.remove();
    nobtn.remove();
})