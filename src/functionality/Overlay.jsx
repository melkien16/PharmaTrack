import React from 'react'

const Overlay = (props) => {
  return (
    <div className='w-full h-screen bg-green-300'>{props.children}</div>
  )
}

export default Overlay