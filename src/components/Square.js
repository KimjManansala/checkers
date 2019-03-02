import React from "react";
import '.././styles/square.css'
import Piece from "./Piece";

const Square = ({ color, piece }) => {
  return (
    <div
      className="square"
      style={{ backgroundColor: color}}
    >
    {piece? <Piece piece={piece}/>: null}
    </div>
  );
};

export default Square;
