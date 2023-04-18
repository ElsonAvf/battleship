import Ship from './Ship.js'

test('Sunk if hits === length', () => {
  const ship = new Ship(2)
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})
test('Hits === 1', () => {
  const ship = new Ship(2)
  ship.hit()
  expect(ship.hits).toBe(1)
})
