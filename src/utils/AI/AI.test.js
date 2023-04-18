import AI from './AI.js'
import Gameboard from './../Gameboard/Gameboard.js'

test('AI move', () => {
  const ai = new AI()
  const gameboard = new Gameboard()
  const move = ai.play(gameboard.board)
  gameboard.receiveAttack(move)
  expect(gameboard.board[move[0]][move[1]].wasClicked).toBe(true)
})
test('AI makes three moves', () => {
  const ai = new AI()
  const gameboard = new Gameboard()
  const move1 = ai.play(gameboard.board)
  const move2 = ai.play(gameboard.board)
  const move3 = ai.play(gameboard.board)
  gameboard.receiveAttack(move1)
  gameboard.receiveAttack(move2)
  gameboard.receiveAttack(move3)
  expect(gameboard.board[move1[0]][move1[1]].wasClicked).toBe(true)
  expect(gameboard.board[move2[0]][move2[1]].wasClicked).toBe(true)
  expect(gameboard.board[move3[0]][move3[1]].wasClicked).toBe(true)
})