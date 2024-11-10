let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let message=document.querySelector("#msg")
let turnO=true;

const winpattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO){
         box.innerText= "O";
         turnO=false;
        }
        else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const showwinner=(winner)=>{
    msg.innerText=`congratualtions, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}
const checkwinner=()=>
{
    for(let pattrens of winpattrens)
    {
        let p1=boxes[pattrens[0]].innerText;
        let p2=boxes[pattrens[1]].innerText;
        let p3=boxes[pattrens[2]].innerText;
        if(p1 !="" && p2!= ""&& p3!="")
        {
            if(p1===p2 && p2===p3 && p3===p1)
                {
                    disableboxes()
                    showwinner(p1);
                }

        }
    }
};

const resetgame=()=>
{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};
const disableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enableboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);