var j =0;
function gold() {
var i = 0;
    for(i=1;i<=2;i++){
        
    var randtop = Math.floor(Math.random()*800-60);
var randleft = Math.floor(Math.random()*screen.width-60);
     var b = document.createElement("h4");
     var i = document.body.appendChild(b);
     var j = document.getElementById("id")
     b.innerHTML = "jannat sorry"
     b.style.textTransform = "uppercase"
     b.style.top = randtop+"px";
     b.style.left = randleft+"px";
     b.style.color = "blue"
     b.style.padding = "10px"
     b.style.borderRadius = "20px"
    }
    
}

     setInterval(gold,112)