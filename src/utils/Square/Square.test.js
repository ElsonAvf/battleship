import Square from './Square.js'
import Ship from './../Ship/Ship.js'

test('Was clicked', () => {
  const square = new Square()
  square.click()
  expect(square.wasClicked).toBe(true)
})
test('Value to be null', () => {
  const square = new Square()
  expect(square.value).toBeNull()
})
test('Value to be instance of Ship', () => {
  const square = new Square()
  square.addShip(new Ship(3))
  expect(square.value).toBeInstanceOf(Ship)
})
