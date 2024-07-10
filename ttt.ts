let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("reset");

let turn: boolean = true

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked")
    })
})