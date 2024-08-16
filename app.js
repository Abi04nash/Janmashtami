let msgcontainer = document.querySelector(".msgg");
let para = document.querySelector("#para");
let ra = document.querySelector("#ra");
let ResetGame = document.querySelector("#reset");
let Game = document.querySelector("body");


const resetgame = () => {
    para.innerText = `On this Janmashtami, may all your wishes come true ` ;
    ra.innerText = `And may Nand Gopal shower his blessing on you and your loved ones! ` ;
    
    Game.style.backgroundImage = "url('zero.jpg')";
    Game.style.backgroundSize = "cover";
    msgcontainer.classList.remove("hide");

};

ResetGame.addEventListener("click" , resetgame);
