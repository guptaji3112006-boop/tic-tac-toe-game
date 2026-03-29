let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newGame");
let msg=document.querySelector(".msg");
const msgcontainer = document.querySelector(".msgContainer");
let playerO=true;
let playerX=false;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerText="O";
            playerO=false;
          
        }
        else {
            box.innerText="X";
            playerO=true;
        }
        box.disabled=true;
        checkWinner();

    })
});
const resetGame=()=>{
    playerO=true;
    msgcontainer.classList.add("hide");
    enabledBoxes();
}
const enabledBoxes=()=>{
   for(let box of boxes){
    box.disabled=false;
    box.innerText="";
   }
};

const disabledBoxes=()=>{
   for(let box of boxes){
    box.disabled=true;
   }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;    

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
                
            }
        }
    }
};


newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);