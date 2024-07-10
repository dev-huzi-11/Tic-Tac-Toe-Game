let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turn = true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked")
    
    if(turn === true){
        box.innerText = "O",
        turn = false
    } else{
        box.innerText = "X",
        turn = true
    }

    box.disabled = true

    checkWinner();
    })
});  

const resetGame = () => {
    turn = true;
    enableBox();
    msgContainer.classList.add("hide");
}


const disableBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
} 

const enableBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 

const winningMessage = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox()
}
const checkWinner = () => {
    for(pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        
        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("Winner")
                winningMessage(posVal1)
            }
        }
    }
}

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)