import React from 'react'

const Sections = ({title, content}) => {
  return (
    <div className='section-par'>
      <h1>{title}</h1>
      {content}
    </div>
  )
}

export default Sections
