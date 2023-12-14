const leftHome = document.querySelector(".home");
const leftPage = document.querySelector(".page");
const leftMore = document.querySelector(".more");
const leftBars = document.querySelector(".bars-left");
const rightBars = document.querySelector(".bars-right");
const leftBarsColum = document.querySelector(".bars-left-colum");
const rightBarsColum = document.querySelector(".bars-right-colum");
const rightConnectBtn = document.querySelector(".connect");
const bgOpacity = document.querySelector(".bg-opacity");
const right = document.querySelector(".right");



const menu = document.querySelector(".menu");
const linksContact = document.querySelector(".links-contact");
const leftListsHome = document.querySelector(".lists-home");
const leftListsPage = document.querySelector(".lists-page");
const leftListsMore = document.querySelector(".lists-more");
const leftLists = document.querySelector(".left-list");



let big = leftLists;
let smallHome = leftListsHome;
let smallPage = leftListsPage;
let smallMore = leftListsMore;


leftBars.addEventListener('click', function (){
    leftBarsColum.style.transform = "translateX(0)";
    bgOpacity.style.transform = "translateX(0)";

    const leftTurnOff = document.querySelector(".bars-left-turnOff");

    leftTurnOff.addEventListener('click', function (){
        leftBarsColum.style.transform = "translateX(-100%)";
        leftBarsColum.style.transition = "all 0.5s";
        bgOpacity.style.transform = "translateY(-100%)";
        bgOpacity.style.transition = "all 0.5s";
    });
});

rightConnectBtn.addEventListener('click', function (){
    // alert('dcbk');
    rightBarsColum.style.transform = "translateX(0)";
    rightBarsColum.style.transition = "all 0.5s";
    bgOpacity.style.transform = "translateY(0)";
    bgOpacity.style.transition = "all 0.5s";
    // right.style.display = "block";
    right.style.transform = "translateX(0%)";
    right.style.transition = "all 0.5s";
    right.style.zIndex = "3";

    const rightTurnOff = document.querySelector(".bars-right-turnOff");

    rightTurnOff.addEventListener('click', function (){
        rightBarsColum.style.transform = "translateX(100%)";
        rightBarsColum.style.transition = "all 0.5s";
        bgOpacity.style.transform = "translateY(-100%)";
        bgOpacity.style.transition = "all 0.5s";
        // right.style.display = "none";
        right.style.transform = "translateX(100%)";
        right.style.transition = "all 0.5s";
        right.style.zIndex = "-3";
    });
});


function moveLeftHome(){
    // alert('hvdc');
    big.style.transform = "translate(-300px)";
    big.style.transition = "all 0.5s";

    smallHome.style.transform = "translate(300px)";
    smallHome.style.transition = "all 0.5s";
    smallHome.style.opacity = "1";
    smallPage.style.opacity = "0";
    smallPage.style.zIndex = "-1";
};
leftHome.addEventListener('click', moveLeftHome);

const removeHome = document.querySelector(".removeHome");

function removeLeftHome(){
    // alert('hsdvc');
    big.style.transform = "translate(0px)";
    big.style.transition = "all 0.5s";

    smallHome.style.transform = "translate(600px)";
    smallHome.style.transition = "all 0.5s";
    smallHome.style.opacity = "0";
};

removeHome.addEventListener('click', removeLeftHome);


function moveLeftPage(){
    // alert('hvdc');
    big.style.transform = "translate(-300px)";
    big.style.transition = "all 0.5s";

    smallPage.style.transform = "translate(300px)";
    smallPage.style.transition = "all 0.5s";
    smallPage.style.opacity = "1";
    smallHome.style.opacity = "0";

};

leftPage.addEventListener('click', moveLeftPage);


const removePage = document.querySelector(".removePage");

function removeLeftPage(){
    // alert('hsdvc');
    big.style.transform = "translate(0px)";
    big.style.transition = "all 0.5s";

    smallPage.style.transform = "translate(300px)";
    smallPage.style.transition = "all 0.5s";
    smallPage.style.opacity = "0";
};


removePage.addEventListener('click', removeLeftPage);



function moveLeftMore(){
    // alert('hvdc');
    smallPage.style.transform = "translate(-325px)";
    smallPage.style.transition = "all 0.5s";

    smallMore.style.transform = "translate(600px)";
    smallMore.style.transition = "all 0.5s";
    smallMore.style.opacity = "1";

};

leftMore.addEventListener('click', moveLeftMore);


const removeMore = document.querySelector(".removeMore");

function removeLeftMore(){
    // alert('hsdvc');
    smallPage.style.transform = "translate(300px)";
    smallPage.style.transition = "all 0.5s";
    smallPage.style.opacity = "1";

    smallMore.style.transform = "translate(300px)";
    smallMore.style.transition = "all 0.5s";
    smallMore.style.opacity = "0";
};


removeMore.addEventListener('click', removeLeftMore);


// function moveMenu(){
//     // alert('bbk');
//     menu.style.transform = "translate(0)";
//     menu.style.transition = "all 0.5s";
// };

// rightBars.addEventListener('click', moveMenu);


const Menu = ()=>{
    
    rightBars.addEventListener('click', ()=>{
        //Toggle Nav
        menu.classList.toggle("menu-active");
        // Animate Links
        // navLinks.forEach((link, index)=>{
        //     if(link.style.animation){
        //         link.style.animation = '';
        //     }else{
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        //     }
        // });
        // burgur animation
        rightBars.classList.toggle("toggle");
    });
}

Menu();