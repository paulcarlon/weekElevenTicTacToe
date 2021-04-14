let xCards = [];
let oCards = [];
const playerOne = 'O';
const playerTwo = 'X';
let playersTurn = playerOne;
let filledSpaces = [];
const turnDisplay = document.getElementById('turnDisplay');
const winnerDisplay = document.getElementById('winnerDisplay');
//Add listener for a click on each of the boxes
const boxes = document.querySelectorAll('.boxes');
let turnAlert = document.getElementById('turnAlert');
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    filledSpaces.push(box);
    console.log(filledSpaces.length);
    if (filledSpaces.length == 9) {
      openModal();
      modalHeader.innerHTML = "<h4>It's a Draw!</h4>";
    }
    if (playersTurn === playerOne) {
      let playerOneClick = document.createElement('h1');
      playerOneClick.style.fontSize = '150px';
      playerOneClick.style.color = 'darkgreen';
      playerOneClick.classList = 'd-flex justify-content-center mb-3';
      playerOneClick.innerText = 'O';
      box.appendChild(playerOneClick);
      oCards.push(box.id);
      playersTurn = playerTwo;
      turnAlert.innerHTML =
        "It's player <span style='color: darkblue; text-shadow: 0px 0px 6px #fff;'>two's</span> turn!";

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
          "<h4>Congratulations, <span class='h3' style='color: green; text-shadow: 0px 0px 6px #fff;'>Player One!</h5>";
      }
    } else if (playersTurn === playerTwo) {
      let playerTwoClick = document.createElement('h1');
      playerTwoClick.innerText = 'X';
      playerTwoClick.style.fontSize = '150px';
      playerTwoClick.style.color = 'darkblue';
      playerTwoClick.classList = 'd-flex justify-content-center mb-3';
      box.appendChild(playerTwoClick);
      xCards.push(box.id);
      playersTurn = playerOne;
      turnAlert.innerHTML =
        "It's player <span class='h3' style='color: green; text-shadow: 0px 0px 6px #fff;'>one's</span> turn!";

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
          "<h4>Congratulations, <span style='color: darkblue; text-shadow: 0px 0px 6px #fff;'>Player Two!</span></h4>";
      }
    }
  });
});

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

restartBtn.addEventListener('click', freshSlate);

mainRestart.addEventListener('click', freshSlate);

function freshSlate() {
  oCards = [];
  xCards = [];
  filledSpaces = [];

  playersTurn = playerOne;
  turnAlert.innerHTML =
    "It's player <span style='color: green; text-shadow: 0px 0px 6px #fff;'>one's</span> turn!";
  ticTacModal.style.display = 'none';
  ticTacModal.classList.remove('show');
  turnDisplay.style.display = 'block';
  for (box of boxes) {
    box.innerHTML = '';
  }
}
