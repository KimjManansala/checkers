import React from 'react'
import Square from './Square';
import '.././styles/row.css'

const Row = ({rowName, rowNum}) => {

  return (
    <React.Fragment>
        <div className='row'>
        {rowName.map((square, index)=>(
            <Square color= {square.backgoundColor} rowNum={rowNum} piece= {square.pieceColor} key={index}/>
        ))}
        </div>
    </React.Fragment>

  )
}

export default Row
