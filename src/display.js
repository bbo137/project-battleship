function getPromiseFromEvent(board, i, j, item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);

      if (board.getAt(i, j) === undefined) {
        item.classList.toggle('missed');
      } else {
        item.classList.toggle('attacked');
      }

      resolve([i, j]);
    };
    item.addEventListener(event, listener);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function deleteBoards() {
  const container = document.querySelector('.container');
  const computerBoard = container.firstChild;

  removeAllChildNodes(container);
  container.append(computerBoard);
}

function newGame() {
  const container = document.querySelector('.container');
  removeAllChildNodes(container);
}

function drawBoard(board, player) {
  if (player) {
    // delete last board
    deleteBoards();
  }

  const promises = [];
  const { grid } = board;

  const target = document.querySelector('.container');
  const gameboard = document.createElement('div');

  gameboard.classList.add('game-board');

  grid.forEach((row, i) => {
    row.forEach((square, j) => {
      const cell = document.createElement('div');
      cell.classList.add('square');

      if (
        player &&
        board.getAt(i, j) !== undefined &&
        !board.wasAttacked(i, j)
      ) {
        cell.classList.add('ship');
      }

      if (board.getAt(i, j) === undefined && board.wasAttacked(i, j)) {
        cell.classList.add('missed');
      }

      if (board.getAt(i, j) !== undefined && board.wasAttacked(i, j)) {
        cell.classList.add('attacked');
      }

      // make promise event listeners
      if (!player) {
        promises.push(getPromiseFromEvent(board, i, j, cell, 'click'));
      }

      gameboard.append(cell);
    });
  });

  target.append(gameboard);

  return promises;
}

function play(gameLoop) {
  const target = document.querySelector('.main');
  const button = document.createElement('button');
  const info = document.querySelector('.info');

  button.classList.add('play');
  button.textContent = 'play';

  target.append(button);

  button.addEventListener('click', () => {
    info.style.display = 'grid';
    newGame();
    gameLoop();
  });
}

function displayInfoMessage(message, position) {
  const info =
    position === 'left'
      ? document.querySelector('.info-left')
      : document.querySelector('.info-right');
  info.textContent = message;
  setTimeout(() => {
    info.textContent = '';
  }, 1500);
}

function setTitle() {
  const title = document.querySelector('.title');
  title.textContent = 'Battleship!';
}

function setBoardNames() {
  const player = document.querySelector('.player');
  const computer = document.querySelector('.computer');

  player.textContent = 'Player board';
  computer.textContent = 'Computer board';
}

function displayInstructionMessage() {
  setTitle();
  setBoardNames();

  const instructions = document.querySelector('.instructions');
  instructions.textContent =
    'Click on a cell in the left board to launch an attack!';
}

function displayWinner(winner) {
  const infoBottom = document.querySelector('.info-bottom');
  infoBottom.textContent = `${winner} wins!`;
}

function playAgain() {
  const button = document.querySelector('.play');
  button.textContent = 'play again';
}

function removeListeners() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.replaceWith(square.cloneNode(true));
  });
}

function removePopUp() {
  const main = document.querySelector('.main');
  main.removeChild(main.firstChild);
}

function addPopUp(winner) {
  const main = document.querySelector('.main');
  const popUp = document.createElement('div');
  const shadow = document.createElement('div');
  const content = document.createElement('div');
  const button = document.createElement('button');
  const text = document.createElement('div');

  popUp.classList.add('pop-up');
  shadow.classList.add('shadow');
  content.classList.add('content');
  text.classList.add('text');
  text.textContent = `${winner} win this time!`;
  button.classList.add('continue');
  button.textContent = 'continue';

  shadow.addEventListener('click', removePopUp, { once: true });
  button.addEventListener('click', removePopUp, { once: true });

  content.append(text);
  content.append(button);
  popUp.append(shadow);
  popUp.append(content);
  main.prepend(popUp, main.firstChild);
}

export {
  drawBoard,
  play,
  playAgain,
  removeListeners,
  displayInfoMessage,
  displayInstructionMessage,
  displayWinner,
  addPopUp,
};
