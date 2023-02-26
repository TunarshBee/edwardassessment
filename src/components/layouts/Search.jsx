import Button from './Button'

const Search = ({ handleChange, handleClick, searchTerm }) => {
  return (
    <div className="d-flex">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="form-control"
        id="txt"
      />
      
      <Button text="Search" handleClick={handleClick} />
    </div>
  );
};

export default Search