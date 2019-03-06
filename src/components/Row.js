import React from 'react'
import Square from './Square';
import '.././styles/row.css'

const Row = ({rowName, index, method}) => {

  return (
    <React.Fragment>
        <div className='row'>
        {rowName.map((square, int)=>{
          return(
            <React.Fragment key={int}>
              {square ? <Square method={method} rowI={index} column={int}empty={false} color={square}/>: <Square  empty={true}/>}
              </React.Fragment>
        )})}
        </div>
    </React.Fragment>

  )
}

export default Row
