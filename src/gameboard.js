import { Ship } from './ship';

function Gameboard() {
  const grid = Array.from({ length: 10 }, () => Array(10).fill());

  const attacked = new Set();

  const shipList = [];

  const isValidPlacement = (x, y, shipLen, position) => {
    if (
      (position === 'row' && y + shipLen >= 10) ||
      (position !== 'row' && x + shipLen >= 10)
    )
      return false;

    const shipRow = (y === 0)? [3, shipLen + 1] : [3, shipLen + 2];
    const shipCol = (y === 0)? [shipLen + 1, 2] : [shipLen + 2, 3];
    const shipDir = position === 'row' ? shipRow : shipCol;

    const row = x - 1;
    const col = (y === 0)? 0 : y - 1;

    const matrix = grid
      .filter((_, i) => i >= row && i < row + shipDir[0])
      .map((a) => a.slice(col, col + shipDir[1]));

    return matrix.every((subArray) =>
      subArray.every((cell) => cell === undefined)
    );
  };

  const placeShip = (x, y, shipLen, position) => {
    const newShip = Ship(shipLen);
    shipList.push(newShip);

    if (position === 'row') {
      for (let i = 0; i < shipLen; i += 1) {
        grid[x][y + i] = newShip;
      }
    } else {
      for (let i = 0; i < shipLen; i += 1) {
        grid[x + i][y] = newShip;
      }
    }
  };

  const loadBoard = (shipLen) => {
    const row = parseInt(10 * Math.random(), 10);
    const col = parseInt(10 * Math.random(), 10);
    const position = parseInt(Math.random(), 10) === 1 ? 'row' : 'col';

    if (isValidPlacement(row, col, shipLen, position)) {
      placeShip(row, col, shipLen, position);
      return;
    }
    loadBoard(shipLen);
  };

  const getAt = (x, y) => grid[x][y];

  const receiveAttack = (x, y) => {
    if (grid[x][y] !== undefined) {
      grid[x][y].hit();
      return true;
    }
    attacked.add(`${x}, ${y}`);
    return false;
  };

  const wasAttacked = (x, y) => attacked.has(`${x}, ${y}`);

  const allSunk = () => {
    const ships = shipList.filter((ship) => !ship.isSunk());

    return !ships.length;
  };

  return {
    grid,
    placeShip,
    getAt,
    allSunk,
    isValidPlacement,
    receiveAttack,
    wasAttacked,
    loadBoard,
  };
}

module.exports = { Gameboard };
