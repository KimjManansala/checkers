import "../styles/piece.css";

import React from 'react'

const Piece = ({color, rowI, column, method}) => {
  return (
    <div className={'piece-'+color}
        onClick={method? ()=>{method(color, rowI, column)}: null}
      >
      {rowI >= 0? rowI + '-'+  column: 0+'-'+0}
      </div>
  )
}
// {rowI}-{column}
export default Piece


