import React from 'react'

const Button = ({text}) => {
  return (
    <h6 className='bg-warning px-3 py-2 rounded mx-2 text-light' style={{cursor:'pointer'}}>
        {text}
    </h6>
  )
}

export default Button