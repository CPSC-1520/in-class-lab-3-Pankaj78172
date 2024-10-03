// Enter your code below.

let java = document.querySelector(".javascript-resources");
let btn = document.querySelector("#show-resources");

btn.addEventListener("click", function() {
    java.classList.remove("d-none");
});

java.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("list-group-item")) {
        console.log(event.target);
        event.target.classList.add("fw-bold");
    }
});

java.addEventListener("mouseout", function(event) {
    if (event.target.classList.contains("list-group-item")) {
        event.target.classList.remove("fw-bold");
    }
});

java.addEventListener("click", function(event) {
    if (event.target.classList.contains("list-group-item")) {
        event.target.classList.toggle("fst-italic"); 
    }
});

