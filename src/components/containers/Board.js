import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../Row";
import "../../styles/board.css";
import CaputerdPiece from "../CaputerdPiece";

class Board extends Component {
  getLocalGame() {
    let gameState = JSON.parse(localStorage.getItem('gamestate'))
    console.log(gameState)
    this.props.startGame(gameState)
  }
  componentDidMount(){
    this.getLocalGame()
  }
  restartGame(){
    localStorage.clear()
    this.props.getNewGame()
  }

  componentDidUpdate() {
    localStorage.setItem("gamestate", JSON.stringify(this.props.getAll));
    // localStorage.setItem('gamestate', JSON.parse())
  }

  // removeImage(){
  // }
  render() {
    return (
      <div className="checkers-body">
        {this.props.winner ? (
          <h1>{this.props.winner}</h1>
        ) : (
          <h1>It is {this.props.currentTurn} Turn</h1>
        )}
        <div className="boardContainer">
          {this.props.board.map((row, index) => (
            <Row
              rowName={row}
              index={index}
              method={this.props.pieceMove}
              key={index}
            />
          ))}
        </div>
        <button onClick={() => this.restartGame()} >Restart the Game</button>
        <CaputerdPiece red={this.props.redArr} black={this.props.blackArr} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTurn: state.board.currentTurn,
  redArr: state.board.redArr,
  blackArr: state.board.blackArr,
  board: state.board.board,
  showCaputre: state.board.showCapture,
  winner: state.board.winner,
  getAll: state.board
});

const mapDispatchToProps = dispatch => ({
  checkWinner: () => dispatch({ type: "WINNER_CHECK" }),
  pieceMove: (pieceColor, pieceRow, columnNum) =>
    dispatch({
      type: "PIECE_MOVE",
      color: pieceColor,
      row: pieceRow,
      column: columnNum
    }),
  removeShowCapture: () => dispatch({ type: "REMOVE_SHOW" }),
  startGame: (gameState) => dispatch({ type: "GET_RUNNING_GAME", value: gameState }),
  getNewGame: () => dispatch({type:'RESTART_GAME'})
});

// const gameState = {
//   currentTurn: "BLACK",
//   board: initialBoard(),
//   // board: testBoard(),
//   red: 12,
//   black: 12,
//   winner: null,
//   pieceBeforeMove: { row: 0, column: 0, oldColor: "black" },
//   canContinue: false,
//   showCapture: false,
//   didCapture: false,
//   redArr: [],
//   blackArr: []
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
