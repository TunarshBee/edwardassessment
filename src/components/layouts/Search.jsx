import Button from './Button'

const Search = () => {
  

  return (
    <div className='d-flex'>
        <input type="password" value={searchTerm} onChange={handleChange} class="form-control" id="pwd"/>
        <Button text="Search"/>
    </div>
  )
}

export default Search