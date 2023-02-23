import React from 'react'
import Button from './Button'

const Search = () => {
  return (
    <div className='d-flex'>
        <input type="password" class="form-control" id="pwd"/>
        <Button text="Search"/>
    </div>
  )
}

export default Search