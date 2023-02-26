import React,{ useContext  } from 'react';
import Button from './Button'
import { stateContext } from '../../App';

const Search = ({ handleChange, handleClick, searchTerm }) => {
  const states = useContext(stateContext)

  return (
    <div className="d-flex">
      <input
        type="text"
        value={states.searchTerm}
        onChange={states.handleChange}
        className="form-control"
        id="txt"
      />
      
      <Button text="Search"  />
    </div>
  );
};

export default React.memo(Search)