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
  board: state.board
});

const mapDispatchToProps = dispatch => ({
  pieceMove: (pieceColor, pieceRow, columnNum) =>
    dispatch({ type: "PIECE_MOVE", color: pieceColor, row: pieceRow, column: columnNum })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
