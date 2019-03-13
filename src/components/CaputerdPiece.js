import React from 'react'

import '../styles/deathRow.css'


const CaputerdPiece = ({red, black}) => {
    console.log(red, black)
  return (
      <div className='death-row'>
    <div className='death-row-red'>
        {red?red.map((piece, index)=>(
            <div className={'death-'+ piece.color} key={index}/>
        )): null}
        </div>
        <div className='death-row-black'>
        {black?black.map((piece, index)=>(
            <div className={'death-'+ piece.color} key={index}/>
        )): null}
    </div>
    </div>
  )
}

export default CaputerdPiece
