import React from 'react'

import Game from './../../utils/Game/Game.js'

import Board from './../Board/Board.js'

const AIAttack = (game, board, setter) => {
  if(game.player2.myTurn) {
    game.player1Board.receiveAttack(game.player2.play(board))
    setter(prevBoard => [...prevBoard])
    if(game.player1Board.areAllSunk()) {
      alert('You lose')
    }
  }
}
const playerAttack = (event, game, enemyBoard, setter, player) => {
  const coords = event.target.dataset.coords.split(',').map(str => parseInt(str))
  if(player.myTurn) {
    enemyBoard.receiveAttack(coords)
    setter(prevBoard => [...prevBoard])
    if(enemyBoard.areAllSunk()) {
      alert('you won')
    }
  }
}

export default function Container() {
  const game = React.useMemo(() => new Game, [])
  const player1 = React.useMemo(() => game.player1, [])
  const player2 = React.useMemo(() => game.player2, [])
  const [player1Board, setPlayer1Board] = React.useState(game.player1Board.board)
  const [player2Board, setPlayer2Board] = React.useState(game.player2Board.board)
  game.turn()
  AIAttack(game, player1Board, setPlayer1Board)

  const handleRandomPlacement = () => {
    game.player1Board.randomlyPlace()
    setPlayer1Board([...player1Board])
  }

  return (
    <div>
      <Board board={game.player1Board} showShips={true} />
      <button onClick={handleRandomPlacement}>
        Random
      </button>
      <Board board={game.player2Board} showShips={false} attack={(e) => playerAttack(e, game, game.player2Board, setPlayer2Board, player1)} />
    </div>
  )
}