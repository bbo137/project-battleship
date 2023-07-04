import Gameboard from './gameboard';
import Player from './player';
import {
  drawBoard,
  playAgain,
  removeListeners,
  displayInfoMessage,
  displayInstructionMessage,
  displayWinner,
  addPopUp,
} from './display';

const gameLoop = () => {
  playAgain();
  displayInstructionMessage();

  // create players
  const player = Player(true);
  const computer = Player(false);

  // create gameboards
  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  // fill gameboards
  const shipSize = [5, 4, 3, 3, 2];

  shipSize.forEach((ship) => {
    playerGameboard.loadBoard(ship);
    computerGameboard.loadBoard(ship);
  });

  // draw boards
  const playerPromises = drawBoard(computerGameboard, false);
  drawBoard(playerGameboard, true);

  // turn loops
  playerPromises.forEach((promise) => {
    promise.then((coords) => {
      // player make a play
      computerGameboard.receiveAttack(...coords);
      const computerSquare = computerGameboard.getAt(...coords);

      if (computerSquare !== undefined) {
        displayInfoMessage('A ship has been hit!', 'left');

        if (computerSquare.isSunk()) {
          displayInfoMessage('The ship sank!', 'left');
        }
      } else {
        displayInfoMessage('Attack missed!', 'left');
      }

      // computer makes a play
      setTimeout(() => {
        let computerPlay = computer.makePlay();
        while (playerGameboard.wasAttacked(...computerPlay)) {
          computerPlay = computer.makePlay();
        }

        playerGameboard.receiveAttack(...computerPlay);
        drawBoard(playerGameboard, true);

        if (playerGameboard.getAt(...computerPlay) !== undefined) {
          displayInfoMessage('A ship has been hit!', 'right');

          if (playerGameboard.getAt(...computerPlay).isSunk()) {
            displayInfoMessage('The ship sank!', 'right');
          }
        } else {
          displayInfoMessage('Attack missed!', 'right');
        }
      }, 500);

      if (playerGameboard.allSunk() || computerGameboard.allSunk()) {
        // end game - repeat
        if (playerGameboard.allSunk()) {
          displayWinner('Computer');
          addPopUp('Computer');
        } else {
          displayWinner('Player');
          addPopUp('player');
        }
        removeListeners(playerGameboard);
      }
    });
  });
};

export default gameLoop;