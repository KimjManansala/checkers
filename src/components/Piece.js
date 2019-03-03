import "../styles/piece.css";
// const Piece = ({piece}) => {
//   return (
//     <div className={piece}>
//     </div>
//   )
// }

// export default Piece

import React, { Component } from "react";
import { connect } from "react-redux";
class Piece extends Component {
  render() {
    let { piece, rowNum} = this.props;
    console.log(piece,rowNum)
    return <div className={piece}>
        {rowNum}
    </div>;
  }
}

const mapStateToProps = state => ({
  board: state.board
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);
