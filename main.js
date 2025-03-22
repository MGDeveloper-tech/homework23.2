const p1 = document.querySelector(".wanda");
const p2 = document.querySelector(".agatha");


console.log(p1);
console.log(p2);

const btn1 = document.querySelector(".wanda2");
const btn2 = document.querySelector(".agatha2");
const btn3 = document.querySelector(".rio2");

console.log(btn1);
console.log(btn2);
console.log(btn3);

let num1 = 0

btn1.addEventListener("click", () => {
    console.log("+1");
    num1 = num1 + 1
    console.log(num1);
    p1.textContent = num1
})


let num2 = 0
btn2.addEventListener("click", () => {
    console.log("+1");
    num2 = num2 + 1
    console.log(num2);
    p2.textContent = num2
})


btn3.addEventListener("click", () => {
    p1.textContent = 0
    p2.textContent = 0
    num1 = 0
    num2 = 0
})

