// Enter your code below.

let java = document.querySelector(".javascript-resources");
let btn = document.querySelector("#show-resources");


btn.addEventListener("click", function(){
    java.classList.remove("d-none");
});

java.addEventListener("mouseover",function(event){
    console.log(event.target);

        event.target.classList.add('fw-bold');
     
});

java.addEventListener("mouseout",function(event){

    event.target.classList.remove('fw-bold');
});

java.addEventListener("click", function(event){
    event.target.classList.toggle("fst-italic");
})
