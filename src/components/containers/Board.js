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
          <Row rowName={this.props.board.a} />
          <Row rowName={this.props.board.b} />
          <Row rowName={this.props.board.c} />
          <Row rowName={this.props.board.d} />
          <Row rowName={this.props.board.e} />
          <Row rowName={this.props.board.f} />
          <Row rowName={this.props.board.g} />
          <Row rowName={this.props.board.h} />
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
