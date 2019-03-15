import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../Row";
import '../../styles/board.css'
import '../../styles/AiBoard.css'
import CaputerdPiece from "../CaputerdPiece";

class AiBoard extends Component {


    getBoard(){
        
    }

    // removeImage(){
    // }
  render() {


    return (
        <div className='checkers-body'>


        
        {this.props.winner? <h1>{this.props.winner}</h1>: <h1>HI, CHECKERS VS COMPUTER IS STILL UNDER DEVELOPMENT. COME BACK LATER :)</h1>}
        <div className="boardContainer">
          {this.props.board.map((row, index)=>(
            <Row rowName={row} index={index} method={this.props.pieceMove} key={index}/>
          ))}
        </div>
          
          <CaputerdPiece red={this.props.redArr} black={this.props.blackArr}/>

        </div>

    );
  }
}

const mapStateToProps = state => ({
  currentTurn: state.aiBoard.currentTurn,
  redArr : state.aiBoard.redArr,
  blackArr: state.aiBoard.blackArr,
  board: state.aiBoard.board,
  showCaputre: state.aiBoard.showCapture,
  winner: state.aiBoard.winner
});

const mapDispatchToProps = dispatch => ({
  checkWinner: () => dispatch({type:'WINNER_CHECK'}),
  pieceMove: (pieceColor, pieceRow, columnNum) =>
    dispatch({ type: "PIECE_MOVE", color: pieceColor, row: pieceRow, column: columnNum }),
  removeShowCapture: () => dispatch({type:'REMOVE_SHOW'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AiBoard);
