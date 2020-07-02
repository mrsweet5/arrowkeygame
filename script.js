const gameContainer = document.querySelector(".arrow");
const scoreElement = document.querySelector("#score");
const restartGameButton = document.querySelector("#restartGameButton");

const directions = ["up", "right", "down", "left"];
let cpuArray = [];
let newElement;
let playerArray = [];
let direction;
let score = 0;
nextArrow();

document.addEventListener("keydown", arrowKeyDown, false);

//win modal function
var modal = document.getElementById('simpleModal');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', closeModal);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
  location.href= "index.html"
}

//lose modal function
var modal1 = document.getElementById('simpleModal1');
var closeBtn1 = document.getElementsByClassName('closeBtn')[1];

closeBtn1.addEventListener('click', closeModal);

function openModal1(){
  modal1.style.display = 'block';
}

function closeModal1(){
  modal1.style.display = 'none';
  location.href= "index.html"
}


// sound function
var boinkBoink = document.getElementById('boink');
function boinkSound() {
    boinkBoink.play();
}

// Progress Bar Countdown Timer
const progressBarElement = document.querySelector("#progress-bar");
const gameDuration = 6; // Game Duration in seconds
let progressBarWidthNumerator = gameDuration*1000;
const progressBarWidthDenominator = gameDuration*1000;
let progressBarInterval = setInterval(progressBarFrame, 10);

function progressBarFrame() {
    if (progressBarWidthNumerator <= 0) {
      clearInterval(progressBarInterval); 
      progressBarElement.setAttribute("style", "width: 0%; background-color: #00cc99;");
      openModal1();
    }
    else {
      progressBarWidthNumerator-=10;
      const currentProgressBarWidth = progressBarWidthNumerator/progressBarWidthDenominator;
  
      if(currentProgressBarWidth<=0.10) {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%; background-color: #ff3300;`);
      }
      else if(currentProgressBarWidth<=0.25) {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%; background-color: #ff9f40;`);
      }
      else {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%;`);
      }
    }
  }

  progressBarFrame();

function nextArrow() {
    directionArrows =[directions[getRandomInt(4)], directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)]];
    newElement = [];
    for (let index = 0; index < 6; index++) {
        newElement.push (document.createElement("i"));
        newElement[index].classList.add("fas", "fa-arrow-circle-" + directionArrows[index], "normal", "arrow");
        gameContainer.appendChild(newElement[index]);

    }
    cpuArray = directionArrows;
}


function getRandomInt(max) { // Returns a random Integer in the range 0,...,max-1
    return Math.floor(Math.random()*max);
  }


  //push into playerArray
function arrowKeyDown(event) {
    if (event.key== "ArrowRight"){
        playerArray.push ("right");
        boinkSound()
        keyComparer();
    }
    else if (event.key== "ArrowLeft"){
        playerArray.push ("left");
        boinkSound()
        keyComparer();
    }
    else if (event.key== "ArrowUp"){
        playerArray.push ("up");
        boinkSound()
        keyComparer();
    }
    else if (event.key== "ArrowDown"){
        playerArray.push ("down");
        boinkSound()
        keyComparer();
    }
}

function colorChanger(i) {
     newElement[i].classList.remove ("normal");
     newElement[i].classList.add ("exciting");
}
function reverseColorChanger() {
  for (let index = 0; index < newElement.length; index++) {
    newElement[index].classList.remove ("exciting");
    newElement[index].classList.add ("normal");
    
  }
}

// comparing the cpuArray and playerArray
function keyComparer(){
  let index = playerArray.length -1;
  if (playerArray[index] == cpuArray[index]) {
      colorChanger(index);
      if (playerArray.length == cpuArray.length) {
          cpuArray = [];
          playerArray = [];
          score += 10;
          if (score == 50) { 
            clearInterval(progressBarInterval); 
            openModal();
            console.log (score);
          }
          else {
          gameContainer.textContent = "";
          progressBarWidthNumerator = gameDuration*1000;
          nextArrow();
          }
      }
      }
  else {
      reverseColorChanger();
      playerArray = [];
       }
}



