const carousel = document.querySelector('#slider');
const slider = carousel.querySelector('.slider-wrapper');
const items = carousel.querySelectorAll('.slider-img');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
    
var width, height, totalWidth,
    currIndex = 0,
    interval, intervalTime = 4000;

function init() {
    move();
    bindEvents();
    timer();
}


function move(index) {
    console.log("jfvbisb");
    
    if(index < 1) index = items.length;
    if(index > items.length) index = 1;
    currIndex = index;
      
    for(var i = 0; i < items.length; i++) {
        let item = items[i];
        if(i == (index - 1)) {
            console.log("shdvbjs");
            // item.classList.add("sliderActive");
            // item.style.transform = "perspective:(1000px)"; 
            item.style.transform = "translateX(-100%)"
        } else {
            // item.classList.remove("sliderActive");
            // item.style.transform = "translateX(100%)"
            // item.style.transform = "perspective(1000px) rotateY(" + (i < (index - 1) ? -40 : 40) + "deg)";
        }
    }
      
}
    
function timer() {
    clearInterval(interval);    
    interval = setInterval(() => {
        move(++currIndex);
    }, intervalTime);    
}
    
function prev() {
    // alert('jnso');
    move(--currIndex);
    timer();
}
    
function next() {
    // alert('jnso');
    move(++currIndex);    
    timer();
}
    
    
function bindEvents() {
    prevBtn.addEventListener('click', () => { 
        prev(); 
    });
    nextBtn.addEventListener('click', () => { 
        next(); 
    });    
}


init();