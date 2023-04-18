import React from 'react'

import './Square.style.css'

export default function Square({coords, square, showShips}) {
  const whatToDisplay = () => {
    if(square.value !== null) {
      if(square.value.isSunk()) return '*'
      if(square.wasClicked) return 'X'
      return (showShips) ? 'O' : ''
    } else if (square.wasClicked) {
      return '@'
    }
  }
  return (
    <li id='square'>
      <button
        className='sqr-btns'
        data-coords={coords}
      >
        { whatToDisplay() }
      </button>
    </li>
  )
}