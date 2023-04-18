import React from 'react'
import uniqid from 'uniqid'

import Ship from './../../utils/Ship/Ship.js'

import Square from './../Square/Square.js'

import './Board.style.css'

const gameboard = (board, showShips) => {
  let squares = []
  for(let row = 0; row < 10; row++) {
    for(let col = 0; col < 10; col++) {
      const square = board.board[row][col]
      squares.push(
        <Square
          key={uniqid()}
          coords={[row, col]}
          square={square}
          showShips={showShips}
        />
      )
    }
  }
  return squares
}

export default function Board({ board, showShips, attack}) {
  return (
    <ul className='board' onClick={attack}>
      {gameboard(board, showShips)}
    </ul>
  )
}