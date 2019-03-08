import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../Row";
import '../../styles/board.css'

class Board extends Component {
    componentDidUpdate(){
    }
  render() {


    return (
      <React.Fragment>
        <h1>HELLO THIS IS THE TEST FOR THE BOARD</h1>
        <h2>It is {this.props.currentTurn}</h2>
        <div className="boardContainer">
          {this.props.board.map((row, index)=>(
            <Row rowName={row} index={index} method={this.props.pieceMove} key={index}/>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentTurn: state.board.currentTurn,
  board: state.board.board
});

const mapDispatchToProps = dispatch => ({
  checkWinner: () => dispatch({type:'WINNER_CHECK'}),
  pieceMove: (pieceColor, pieceRow, columnNum) =>
    dispatch({ type: "PIECE_MOVE", color: pieceColor, row: pieceRow, column: columnNum })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
