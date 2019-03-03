import React, { Component } from "react";
import { connect } from "react-redux";
import Row from "../Row";
import '../../styles/board.css'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>HELLO THIS IS THE TEST FOR THE BOARD</h1>
        <div className="boardContainer">
          <Row rowName={this.props.board[0]} rowNum={0}/>
          <Row rowName={this.props.board[1]} rowNum={1}/>
          <Row rowName={this.props.board[2]} rowNum={2}/>
          <Row rowName={this.props.board[3]} rowNum={3}/>
          <Row rowName={this.props.board[4]} rowNum={4}/>
          <Row rowName={this.props.board[5]} rowNum={5}/>
          <Row rowName={this.props.board[6]} rowNum={6}/>
          <Row rowName={this.props.board[7]} rowNum={7}/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
