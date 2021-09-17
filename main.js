// var x = document.body.style;
// x.backgroundColor = "gray"
const mainHeading = document.getElementById("main");
function dark() {
    document.body.style.backgroundColor = "black";
    mainHeading.style.backgroundColor="purple";
}
function light(){
    document.body.style.backgroundColor = "white";
    mainHeading.style.backgroundColor="pink";
}
var size = 65;

function plus(){
    size = size+10
    mainHeading.style.fontSize = `${size}px`;

}


function minus(){
    size = size-5
    mainHeading.style.fontSize = `${size}px`;

}