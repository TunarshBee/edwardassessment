import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-warning px-3 py-2 rounded mx-2 text-light' >
        {text}
    </button>
  )
}

export default Button