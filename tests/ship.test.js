import { Ship } from "../src/ship"


test.only('increase hits by 1 when ship is hit once', () => {
    const testShip = Ship(3);
    testShip.hit();
    expect(testShip.getHits()).toBe(1);
  });

  test.only('increase hits by 2 when ship is hit twice', () => {
    const testShip = Ship(3);
    testShip.hit();
    testShip.hit();
    expect(testShip.getHits()).toBe(2);
  });

  test.only('expect true when ship is sunk', () => {
    const testShip = Ship(3);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });

  test.only('expect false when ship is sunk', () => {
    const testShip = Ship(6);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });