export default class AI {
  constructor(){
    this.type = 'ai'
    this._myTurn = false;
  }
  play(board) {
    while(true) {
      const randomAxisY = Math.floor(Math.random() * 10)
      const randomAxisX = Math.floor(Math.random() * 10)
      if(!board[randomAxisY][randomAxisX].wasClicked) {
        return [randomAxisY, randomAxisX]
      }
    }
  }
  get myTurn() {
    return this._myTurn
  }
  set myTurn(bool) {
    this._myTurn = bool
  }
}