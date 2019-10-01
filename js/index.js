// Your code goes here
const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseover", (event) => {
    logoHeading.style.fontWeight = 900;  
    logoHeading.style.color = "red"; 
    setTimeout(function() {
        event.target.style.fontWeight = "normal";
        event.target.style.color = "black";
      }, 800);
    }, false);


const introFun = document.querySelector(".intro h2");
let timesPressed = 0;
document.addEventListener("keydown", (logKey));
function logKey(e) {
    if (e.key === "u"){
    timesPressed ++
    introFun.textContent = `Welcome to Fu${"u".repeat(timesPressed)}n Bus!`;
    if (timesPressed >10){
        timesPressed = 0;
    }
  }
}

const backgroundObj = document.querySelector("body");
const letsPicture = document.querySelector(".img-content img");
letsPicture.addEventListener("dblclick", (event) => {
    backgroundObj.style.backgroundColor = "#d7f8fa";
    event.stopPropagation();
})
backgroundObj.addEventListener("dblclick", () => {
    backgroundObj.style.backgroundColor = "white";
})

document.querySelectorAll(".btn").forEach(buttons => {
buttons.addEventListener("click", () => {
    var honk = document.getElementById("myAudio"); 
    honk.play();
})
})

const botImage = document.querySelector(".content-destination img");

botImage.addEventListener("mouseenter", () => {
    botImage.style.transform = "scale(1.1)";
    botImage.style.transition = "all 0.5s"
})
botImage.addEventListener("mouseleave", () => {
    botImage.style.transform = "scale(1.0)";
    botImage.style.transition = "all 0.3s"
})

const advPicture = document.querySelector(".img-content:nth-Child(1) img");
let t = 0;
console.log(t);
advPicture.addEventListener("dragstart", () => {
    advPicture.style.transform = "translate(-500px,0px)";
    letsPicture.style.transform = "translate(500px,0px)";
    advPicture.style.transition = "all 1s"
    letsPicture.style.transition = "all 1s"
    setTimeout(function() {
        t++;
        if (t % 2 === 0){
            letsPicture.src = "img/adventure.jpg";
            advPicture.src = "img/fun.jpg";
            advPicture.style.transform = "translate(0px,0px)";
            letsPicture.style.transform = "translate(0px,0px)";
            advPicture.style.transition = "all 1s";
            letsPicture.style.transition = "all 1s"; 
        } else {
        letsPicture.src = "img/fun.jpg";
        advPicture.src = "img/adventure.jpg";
        advPicture.style.transform = "translate(0px,0px)";
        letsPicture.style.transform = "translate(0px,0px)";
        advPicture.style.transition = "all 1s";
        letsPicture.style.transition = "all 1s";    
        }
      }, 2000);
}, false);


const footer = document.querySelector(".footer");
footer.addEventListener("mouseout", () => {
    footer.style.cursor = "none";
})

const footerText = document.querySelector(".footer p");
footerText.addEventListener("mouseup", () => {
    footerText.textContent = "You found a secret!";
})

const islandGet = document.querySelector(".destination:nth-Child(3) h4");
islandGet.addEventListener("mouseout", () => {
    islandGet.style.transform = "scale(0.7)";
    islandGet.style.transition = "all 1s"
    islandGet.textContent = "Island Getaway 😔"
})
islandGet.addEventListener("mouseenter", () => {
    islandGet.textContent = "Island Getaway"
    islandGet.style.transform = "scale(1)";
    islandGet.style.transition = "all 1s"
})

document.querySelectorAll(".nav-link").forEach(buttons => {
    buttons.addEventListener("click", () => {
        event.preventDefault();
    })
    })