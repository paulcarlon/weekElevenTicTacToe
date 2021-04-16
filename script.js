//Initialize empty arrays to hold box numbers each player has
let xCards = [];
let oCards = [];
//Initialize 2 players and their symbols
const playerOne = '◯';
const playerTwo = 'X';
//Define initial players turn
let playersTurn = playerOne;
//Initialize array to keep track of how many boxes are filled
let filledSpaces = [];
//Grab elements in HTML document for displaying winner and whose turn it is
const turnDisplay = document.getElementById('turnDisplay');
const winnerDisplay = document.getElementById('winnerDisplay');
//Grab all of the box divs
const boxes = document.querySelectorAll('.boxes');
//Grab onto h3 for changing turn text
let turnAlert = document.getElementById('turnAlert');
//Add listener for a click on each of the boxes
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    //add each space filled to filledSpaces array
    filledSpaces.push(box);
    //define that if all spaces are filled and no one has won the game is a draw and display that in DOM
    if (filledSpaces.length == 9) {
      openModal();
      modalHeader.innerHTML = "<h4>It's a Draw!</h4>";
    }
    //add o to box clicked if o is current player
    if (playersTurn === playerOne) {
      let playerOneClick = document.createElement('h1');
      playerOneClick.style.fontSize = '100px';
      playerOneClick.style.color = 'green';
      playerOneClick.style.transform = 'translateY(22%)';
      playerOneClick.classList =
        'd-flex justify-content-center align-items-center text-center';
      playerOneClick.innerText = playerOne;
      box.appendChild(playerOneClick);
      oCards.push(box.id);
      playersTurn = playerTwo;
      turnAlert.innerHTML =
        "It's player <span style='color: darkblue; text-shadow: 0px 0px 6px #fff;'>✕</span>'s turn!";
      //check for o winning combinations
      if (
        (oCards.includes('1') &&
          oCards.includes('2') &&
          oCards.includes('3')) ||
        (oCards.includes('4') &&
          oCards.includes('5') &&
          oCards.includes('6')) ||
        (oCards.includes('7') &&
          oCards.includes('8') &&
          oCards.includes('9')) ||
        (oCards.includes('1') &&
          oCards.includes('4') &&
          oCards.includes('7')) ||
        (oCards.includes('2') &&
          oCards.includes('5') &&
          oCards.includes('8')) ||
        (oCards.includes('3') &&
          oCards.includes('6') &&
          oCards.includes('9')) ||
        (oCards.includes('1') &&
          oCards.includes('5') &&
          oCards.includes('9')) ||
        (oCards.includes('3') && oCards.includes('5') && oCards.includes('7'))
      ) {
        openModal();
        modalHeader.innerHTML =
          "<h4>Congratulations, Player <span class='h3' style='color: green; text-shadow: 0px 0px 6px #fff;'>◯</h5><h3>!</h3>";
      }
      //add x to box clicked if x is current player
    } else if (playersTurn === playerTwo) {
      let playerTwoClick = document.createElement('h1');
      playerTwoClick.innerText = playerTwo;
      playerTwoClick.style.fontSize = '100px';
      playerTwoClick.style.color = 'darkblue';
      playerTwoClick.style.transform = 'translateY(22%)';
      playerTwoClick.classList =
        'd-flex justify-content-center align-items-center text-center';
      box.appendChild(playerTwoClick);
      xCards.push(box.id);
      playersTurn = playerOne;
      turnAlert.innerHTML =
        "It's player <span class='h3' style='color: green; text-shadow: 0px 0px 6px #fff;'>◯</span>'s turn!";
      //check for x winning combinations
      if (
        (xCards.includes('1') &&
          xCards.includes('2') &&
          xCards.includes('3')) ||
        (xCards.includes('4') &&
          xCards.includes('5') &&
          xCards.includes('6')) ||
        (xCards.includes('7') &&
          xCards.includes('8') &&
          xCards.includes('9')) ||
        (xCards.includes('1') &&
          xCards.includes('4') &&
          xCards.includes('7')) ||
        (xCards.includes('2') &&
          xCards.includes('5') &&
          xCards.includes('8')) ||
        (xCards.includes('3') &&
          xCards.includes('6') &&
          xCards.includes('9')) ||
        (xCards.includes('1') &&
          xCards.includes('5') &&
          xCards.includes('9')) ||
        (xCards.includes('3') && xCards.includes('5') && xCards.includes('7'))
      ) {
        openModal();
        modalHeader.innerHTML =
          "<h4>Congratulations, Player <span class='h3' style='color: darkblue; text-shadow: 0px 0px 6px #fff;'>✕</h5><h3>!</h3>";
      }
    }
  });
});
//define modal display for when game has ended
let modalHeader = document.querySelector('.modal-header');
let ticTacModal = document.getElementById('ticTacModal');
let restartBtn = document.getElementById('restartBtn');
let mainRestart = document.getElementById('mainRestart');
let restartDisplay = document.getElementById('restartDisplay');
function openModal() {
  ticTacModal.style.display = 'block';
  ticTacModal.classList.add('show');
  turnDisplay.style.display = 'none';
}
//add 'click' listener to the always-displayed restart button and the restart button that appears in the modal when the game has ended
restartBtn.addEventListener('click', freshSlate);

mainRestart.addEventListener('click', freshSlate);

//function for game restart
function freshSlate() {
  oCards = [];
  xCards = [];
  filledSpaces = [];

  playersTurn = playerOne;
  turnAlert.innerHTML =
    "It's player <span style='color: green; text-shadow: 0px 0px 6px #fff;'>◯</span>'s turn!";
  ticTacModal.style.display = 'none';
  ticTacModal.classList.remove('show');
  turnDisplay.style.display = 'block';
  for (box of boxes) {
    box.innerHTML = '';
  }
}
