import React from "react";
import '.././styles/square.css'
import Piece from "./Piece";

const Square = ({ empty, color, rowI, column, method}) => {

  return (
      <React.Fragment>
        {empty? 
          <div className='square-empty'>
            <Piece color={'blank'}/>
            </div>
        : 
        <div className='square-ready'>
            <Piece method={method}color={color} rowI={rowI} column={column}/>

          </div>}

      </React.Fragment>


    
  );
};

export default Square;
