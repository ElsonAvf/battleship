import Square from './../Square/Square.js'
import Ship from './../Ship/Ship.js'

export default class Gameboard {
  constructor() {
    this.board = this.randomlyPlace()
  }
  buildBoard() {
    const array = []
    for(let row = 0; row < 10; row++) {
      array.push([])
      for(let col = 0; col < 10; col++) {
        array[row].push(new Square)
      }
    }
    return array
  }
  hasShipNext(coords) {
    const nextSquares = [
      [-1, -1], [-1, 0], [-1, 1], // Top
      [0, -1], [0, 1], // Middle
      [1, -1], [1, 0], [1, 1] // Bottom
    ]
    for(let i = 0; i < nextSquares.length; i++) {
      const nextRow = this.board[coords[0] + nextSquares[i][0]]
      if(nextRow === undefined) continue
      const next = nextRow[coords[1] + nextSquares[i][1]]
      if(next !== undefined && next.value !== null) {
        return true
      }
    }
    return false
  }
  canPlaceShipOnAxisX(shipLength, coordinates) {
    if(coordinates[1] + shipLength > 10) return false
    for(let col = coordinates[1]; col < (coordinates[1] + shipLength); col++) {
      const currentSquare = this.board[coordinates[0]][col].value
      if(currentSquare !== null || this.hasShipNext([coordinates[0], col])) {
        return false
      }
    }
    return true
  }
  canPlaceShipOnAxisY(shipLength, coordinates) {
    if(coordinates[0] + shipLength > 10) return false
    for(let row = coordinates[0]; row < (coordinates[0] + shipLength); row++) {
      const currentSquare = this.board[row][coordinates[1]].value
      if(currentSquare !== null || this.hasShipNext([row, coordinates[1]])) {
        return false
      }
    }
    return true
  }
  placeOnAxisX(ship, coordinates) {
    for(let x = coordinates[1]; x < (coordinates[1] + ship.length); x++) {
      this.board[coordinates[0]][x].value = ship
    }
  }
  placeOnAxisY(ship, coordinates) {
    for(let y = coordinates[0]; y < (coordinates[0] + ship.length); y++) {
      this.board[y][coordinates[1]].value = ship
    }
  }
  placeShip(ship, coordinates, axis = 'x') {
    if(axis === 'x' && this.canPlaceShipOnAxisX(ship.length, coordinates)) {
      this.placeOnAxisX(ship, coordinates)
    } else if(axis === 'y' && this.canPlaceShipOnAxisY(ship.length, coordinates)) {
      this.placeOnAxisY(ship, coordinates)
    }
  }
  receiveAttack(coordinates) {
    const square = this.board[coordinates[0]][coordinates[1]]
    if(!square.wasClicked) {
      if(square.value !== null) {
        square.value.hit()
      }
      square.wasClicked = true
    }
  }
  areAllSunk() {
    for(let row = 0; row < 10; row++) {
      for(let col = 0; col < 10; col++) {
        if(this.board[row][col].value !== null) {
          if(!this.board[row][col].value.isSunk()) {
            return false
          }
        }
      }
    }
    return true
  }
  randomlyPlace() {
    this.board = this.buildBoard()
    const ships = [
      new Ship(6), new Ship(5), new Ship(4),
      new Ship(3), new Ship(2), new Ship(2),
      new Ship(1), new Ship(1), new Ship(1)
    ]
    const axis = ['x', 'y']
    while(ships.length > 0) {
      const randomAxis = axis[Math.floor(Math.random() * 2)]
      const randomRow = Math.floor(Math.random() * 10)
      const randomCol = Math.floor(Math.random() * 10)
      if(randomAxis === 'x') {
        if (this.canPlaceShipOnAxisX(ships[0].length, [randomRow, randomCol])) {
          this.placeOnAxisX(ships[0], [randomRow, randomCol])
          ships.shift()
        }
      } else if (this.canPlaceShipOnAxisY(ships[0].length, [randomRow, randomCol])) {
        this.placeOnAxisY(ships[0], [randomRow, randomCol])
        ships.shift()
      }
    }
    return this.board
  }
}