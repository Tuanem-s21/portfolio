const styleSwicherToggle = document.querySelector(".style-switcher-toggle");
const styleSwitcher = document.querySelector(".style-switcher");
const alternateStyle = document.querySelectorAll(".alternate-style");
const dayNight = document.querySelector(".day-night");

// open style switcher
styleSwicherToggle.addEventListener("click", ()=>{
    styleSwitcher.classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", ()=>{
    if(styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open");
    }
})

// change color
function setActiveStyle(color){
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor(){
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "true")
        }
    })
}

// light and dark
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
