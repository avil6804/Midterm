window.addEventListener('scroll', function() {
let scrollPosition = window.scrollY;
if (scrollPosition < 100) {
    document.body.style.backgroundColor = '#ffb703';
    } else if (scrollPosition < 500) {
    document.body.style.backgroundColor = '#023047';
    } else if (scrollPosition < 800) {
    document.body.style.backgroundColor = '#F5F5DC';
    } else { 
    document.body.style.backgroundColor = '#00FFFF';
    }});
document.addEventListener("mousemove", function(event) {
    let pig = document.getElementById("followPig");
    pig.style.left = event.pageX + "px";
    pig.style.top = event.pageY + "px";
});
let button = document.getElementById('Button');
function changeText() {
    button.textContent = "Squeak!";
}
button.addEventListener('click', changeText);
let box = document.getElementById('btn');

function changeColor() {
    box.style.backgroundColor = '#fafad2';
}

function resetColor() {
    box.style.backgroundColor = '#023047';
}

box.addEventListener('mouseover', changeColor);
box.addEventListener('mouseout', resetColor);

let hoverElement = document.getElementById('Bodytext');
function onMouseEnter() {
    hoverElement.style.opacity = '0.4';}
    hoverElement.addEventListener('mouseenter', onMouseEnter);
// Bottom 
document.getElementById('bottomButton').addEventListener('click', function() {
    alert('Buttom Mash!');
});
