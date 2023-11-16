
let counter = 0;

let count = document.querySelector("#cont");

let inc1 = document.querySelector("#inc");

let res1 = document.querySelector("#res");

let dec1 = document.querySelector("#dec");

inc1.addEventListener("click",function () {
    counter++;
    count.innerHTML = counter;
    
})

dec1.addEventListener("click",function () {
    counter--;
    count.innerHTML = counter;
    
})
res1.addEventListener("click",function () {
    counter = 0;
    count.innerHTML = counter;
    
})