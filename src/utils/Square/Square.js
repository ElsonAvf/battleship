export default class Square {
  constructor() {
    this.wasClicked = false;
    this.value = null
  }
  click() {
    this.wasClicked = true
  }
  addShip(ship) {
    this.value = ship
  }
}
