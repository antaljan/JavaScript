// A listOfPictures tömbe raktam a képek neveit az i változó a mutató
var listOfPictures = new Array ("bild0.jpg","bild1.jpg","bild2.jpg");
var i = 0;
// ez tölti be az első képet az inicializálásnál
function init(){
    let picture = document.getElementById("picToChange");
    picture.setAttribute("src",listOfPictures[0]);
    picture.setAttribute("alt","picture");
}
// ez a balra nyíl eljárása
function scroll_left() {
    i--;
    if (i<0) {i=2};
    let picture = document.getElementById("picToChange");
    picture.setAttribute("src",listOfPictures[i]);
    picture.setAttribute("alt","picture");
}
// ez a jobbra nyíl eljárása
function scroll_right() {
    i++;
    if (i>2) {i=0};
    let picture=document.getElementById("picToChange");
    picture.setAttribute("src",listOfPictures[i]);
    picture.setAttribute("alt","picture");
}
// a picture változóba rakod a kép elem hvatkozását
// utánna a setAttribute tulajdonsággal állíthatod a tulajdonságait
// src = a kép forrása , alt = az alternatív szöveg
