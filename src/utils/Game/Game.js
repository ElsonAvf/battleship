import Gameboard from './../Gameboard/Gameboard.js'
import Player from './../Player/Player.js'
import AI from './../AI/AI.js'

export default class Game {
  constructor(){
    this.player1 = new Player()
    this.player2 = new AI()
    this.player1Board = new Gameboard();
    this.player2Board = new Gameboard();
    this.gameType = 'PLAYERvsAI'
  }
  gameType(type) {
    if(type === 'PLAYERvsAI') {
      this.player2Board = new AI()
    } else {
      player2Board = new Player()
    }
  }
  turn() {
    if(this.player1.myTurn) {
      this.player1.myTurn = false
      this.player2.myTurn = true
    } else {
      this.player1.myTurn = true
      this.player2.myTurn = false
    }
  }
}