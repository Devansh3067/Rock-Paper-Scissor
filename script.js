let btns = document.querySelectorAll(".btn");
let result = document.querySelector("#result");
let compScore = document.querySelector(".compScore");
let userScore = document.querySelector(".userScore");
let reset = document.querySelector(".reset");

const ting = new Audio ("a_ting.mp3");
let choice ;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        ting.play();
        choice = btn.getAttribute("id");
        playGame(choice);
    })
})
// const resetGame = () =>{
//     userScore.innerText= 0;
//     compScore.innerText= 0;
// }

const rps=["rock", "paper", "scissor"];
const getCompChoice = (arr) =>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const showWinner = (userWin , compChoice , choice) =>{
    result.classList.remove("hide");
    if(userWin){
        userScore.innerText = parseInt(userScore.innerText) + 1;
        result.innerText=`You win! ${choice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
    }
    else{
        compScore.innerText = parseInt(compScore.innerText) + 1;
        result.innerText=`You lose! ${compChoice} beats ${choice}`;
        result.style.backgroundColor = "red";
    }
}
const drawGame = () => {
    result.classList.remove("hide");
    result.innerText="Game was Draw. Play Again!";
    result.style.backgroundColor = "#285cb0";
}

const playGame = (choice)=>{
    const compChoice = getCompChoice(rps);
    if(choice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(choice === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        }
        else if(choice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, compChoice, choice);
    }
}

reset.addEventListener("click", ()=>{
    userScore.innerText=0;
    compScore.innerText=0;
    result.classList.add("hide");
});