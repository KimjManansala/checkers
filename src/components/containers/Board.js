import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../Row";
import '../../styles/board.css'

class Board extends Component {
    componentDidUpdate(){
    }

    // removeImage(){

    // }
  render() {

        // {/* {this.props.showCaputre? <img src="https://media.giphy.com/media/xpvrBOE693ws0/giphy.gif" alt="Twice momo gif" className='capture-gif'/>: null} */}

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
  board: state.board.board,
  showCaputre: state.board.showCapture
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
)(Board);
