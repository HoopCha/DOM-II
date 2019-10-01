



const block = document.querySelectorAll(".block")



var i = -1;
var t = 10;
block.forEach(el => {
    el.addEventListener("click", () => {
        el.style.order = i;
        i--;
    })
    el.addEventListener("mousedown", () => {
        var t = 10;
        setInterval(move, 50);
        function move(){
        el.style.transform = `translate(${t}px,0px)`;
        t += 10;  
        }
    })
  })

setInterval(move, 10);
