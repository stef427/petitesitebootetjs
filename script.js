// document.getElementById("carte").addEventListener("mouseenter", function(event) {
//         event.target.style.color = "blue";
//     }) //pour agir sur un element addeventlistener

// document.getElementById("carte").addEventListener("mouseleave", function(event) {
//     event.target.style.color = "";
// })

//deuxième facon on appel le get element comme variable pour eviter de le refaire a chaque fois //
let CardChange = document.getElementById("carte");

CardChange.addEventListener("mouseenter", function(event) {
    event.target.style.width = "20rem";
    event.target.style.color = "orange";
    event.target.style.width = "18rem";
    setTimeout(function() {
        event.target.style.color = "";
    }, 1500);
}, false);