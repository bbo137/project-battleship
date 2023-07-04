import Gameboard from "../src/gameboard"


test('add a ship horizontally of length 3 to the gameboard', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 3, 'row');
    expect(game.getAt(2, 3)).not.toBe(undefined);
    expect(game.getAt(2, 4)).not.toBe(undefined);
    expect(game.getAt(2, 5)).not.toBe(undefined);
  });

  test('add a ship vertically of length 3 to the gameboard', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 3, 'col');
    expect(game.getAt(2, 3)).not.toBe(undefined);
    expect(game.getAt(3, 3)).not.toBe(undefined);
    expect(game.getAt(4, 3)).not.toBe(undefined);
  });

  test('add a ship of length 0 to the gameboard', () => {
    const game = Gameboard();
    game.placeShip(0, 0, 0, 'row');
    expect(game.getAt(0, 0)).toBe(undefined);
  });

  test('check if attack hits a ship', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 3, 'row');
    game.receiveAttack(2, 3);
    const ShipCell1 = game.getAt(2,3);
    const ShipCell2 = game.getAt(2,4);
    expect(game.receiveAttack(2, 3)).toBe(true);
    expect(ShipCell1.getHits()).toBe(2);
    expect(ShipCell2.getHits()).toBe(2);
  });

  test('record a missed attack', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 3, 'row');
    game.receiveAttack(0, 0);
    expect(game.receiveAttack(0, 0)).toBe(false);
    expect(game.wasAttacked(0, 0)).toBe(true)
  });

  test('check if all ship have been sunk', () => {
    const game = Gameboard();
    expect(game.allSunk()).toBe(true);
  });

  test('check if all ship have been sunk', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 2, 'row');
    game.placeShip(4, 4, 2, 'col');
    game.receiveAttack(2, 3);
    game.receiveAttack(2, 4);
    game.receiveAttack(4, 4);
    game.receiveAttack(5, 4);
    expect(game.allSunk()).toBe(true);
  });

  test('there atleast one ship in the board', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 2, 'row');
    game.placeShip(4, 4, 2, 'col');
    game.receiveAttack(2, 3);
    game.receiveAttack(2, 4);
    expect(game.allSunk()).toBe(false);
  });

  test('test invalid placement', () => {
    const game = Gameboard();
    game.placeShip(2, 3, 3, 'row');
    game.placeShip(6, 3, 2, 'col');
    expect(game.isValidPlacement(1,3,3,'col')).toBe(false);
  });

  test('test invalid placement', () => {
    const game = Gameboard();
    game.placeShip(0,0,5,'col');
    expect(game.isValidPlacement(2,0,3,'col')).toBe(false);
  });

  test('test valid placement', () => {
    const game = Gameboard();
    game.placeShip(5, 5, 2, 'row');
    expect(game.isValidPlacement(1,1,3,'col')).toBe(true);
  });

  test('test invalid placement: ship out of board', () => {
    const game = Gameboard();
    expect(game.isValidPlacement(9,1,3,'col')).toBe(false);
  });