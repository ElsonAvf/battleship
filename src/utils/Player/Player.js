export default class Player{
  constructor(){
    this.type = 'player'
    this._myTurn = true;
  }
  get myTurn() {
    return this._myTurn
  }
  set myTurn(bool) {
    this._myTurn = bool
  }
}