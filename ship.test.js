import { Ship } from "./src/ship"


test('expect string to be String', () => {
    const testShip = Ship(3);
    testShip.hits();
    expect(testShip.getHitNum().toBe(1));
  });