// document.getElementById("carte").addEventListener("mouseenter", function(event) {
//         event.target.style.color = "blue";
//     }) //pour agir sur un element addeventlistener

// document.getElementById("carte").addEventListener("mouseleave", function(event) {
//     event.target.style.color = "";
// })

//deuxième facon on appel le get element comme variable pour eviter de le refaire a chaque fois //
let CardChange = document.getElementById("carte");

CardChange.addEventListener("mouseenter", function(event) { //mouseenter tout l'element // mouover au passage chaque élément
    event.target.style.width = "20rem";
    event.target.style.color = "yellow";
    event.target.style.boxShadow = " pink 5px 2px 2px"
    setTimeout(function() {
        event.target.style.color = "";
    }, 1500);
}, false);

let visible = false;

function see() {



    if (!visible) {
        document.getElementById("cache").style.display = "block";
        document.getElementById("see").innerHTML = "unsee me ";
        visible = true;
    } else if (visible) {
        document.getElementById("cache").style.display = "none";
        document.getElementById("see").innerHTML = "see me";
        visible = false;
    }

}