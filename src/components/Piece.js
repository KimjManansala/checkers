import "../styles/piece.css";

import React from 'react'
import img from '../img/king.png'
const Piece = ({color, rowI, column, method}) => {
  return (
    <div className={'piece-'+color}
        onClick={method? ()=>{method(color, rowI, column)}: null}
      >



      </div>
  )
}
// {rowI? `${rowI}-${column}`: `0-0`}
export default Piece


