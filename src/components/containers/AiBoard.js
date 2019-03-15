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
        <div className='underConstruction'></div>        

        
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
{/* <h1>It is {this.props.currentTurn} Turn</h1> */}
const mapStateToProps = state => ({
  currentTurn: state.board.currentTurn,
  redArr : state.board.redArr,
  blackArr: state.board.blackArr,
  board: state.board.board,
  showCaputre: state.board.showCapture,
  winner: state.board.winner
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
