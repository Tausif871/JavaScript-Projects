const bulb1 = document.querySelector("#bulb");

const on = document.querySelector("#on1");

const off = document.querySelector("#off1");

on.addEventListener("click",function(){
    bulb1.style.backgroundColor = "yellow";
})

off.addEventListener("click",function(){
    bulb1.style.backgroundColor = "transparent"
})