import "../styles/piece.css";

import React from 'react'

const Piece = ({color, rowI, column, method}) => {
  return (
    <div className={'piece-'+color}
        onClick={()=>{method(color, rowI, column)}}
      >
      {rowI}-{column}
      </div>
  )
}

export default Piece

// const mapStateToProps = state => ({
//   board: state.board
// });

// const mapDispatchToProps = dispatch => ({
//   pieceMove: (pieceColor, pieceRow, columnNum) =>
//     dispatch({ type: "PIECE_MOVE", color: pieceColor, row: pieceRow, column: columnNum })
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Piece);

