import React,{ useContext  } from 'react';
import Button from './Button'
import { stateContext } from '../../App';

const Search = () => {
  const states = useContext(stateContext)

  return (
    <div className="d-flex">
      <input
        type="text"
        value={states.searchTerm}
        onChange={states.handleChange}
        className="form-control"
        placeholder="search a movie"
        id="txt"
        data-testid="txt"
      />

      <Button text="Search" data-testid="search" />
    </div>
  );
};

export default Search