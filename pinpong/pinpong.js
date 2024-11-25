let bildBreite=window.innerWidth-50;
let bildHohe=window.innerHeight-50;
let posX = 0;
let posY = 0;
let speed = 100;
let stepX = 5;
let stepY = 5;
let intevalID;
let bild= document.getElementById("bild");
function anim() {
    bild= document.getElementById("bild");
    bild.style.left = posX + "px";
    bild.style.top = posY + "px";
    posX += stepX;
    posY += stepY;
    if (posX > bildBreite) {stepX = stepX * -1;} 
    if (posX < 0) {stepX = stepX * -1;} 
    if (posY > bildHohe) {stepY = stepY * -1;} 
    if (posY < 0) {stepY = stepY * -1;} 
}
function init() {
    document.onmousedown = startdrag;
    document.onmouseup = stopdrag;	
    let neuerknoten = document.createElement("img");
    neuerknoten.setAttribute("src","punkt-anim.gif");
    neuerknoten.setAttribute("alt","Punkt");
    neuerknoten.setAttribute("id","bild");
    document.getElementById("ergebnis").appendChild(neuerknoten);
    intevalID = setInterval("anim()", speed);
}
function initRe(){
    bildBreite=window.innerWidth-50;
    bildHohe=window.innerHeight-50;
}
function startdrag(evt) {
    //document.getElementById("hier").innerHTML = evt.target.id;
    if ( evt.target.id = "bild") {
        clearInterval(intevalID);
        document.addEventListener("mousemove",drag,true);
        return false;
    }
}
function drag(evt) {
    bild= document.getElementById("bild");
    posX =	parseInt(evt.clientX);
    posY = parseInt(evt.clientY);
    bild.style.left = posX + "px";
    bild.style.top = posY + "px";
    return false;
}
function stopdrag(evt) {
    if ( evt.target.id = "bild") {
        document.removeEventListener("mousemove",drag,true);
        intevalID = setInterval("anim()", speed);
        return false;
    }
}

window.onresize = initRe;
window.onload = init;
