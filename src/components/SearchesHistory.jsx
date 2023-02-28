import React from 'react'
import { useContext } from 'react';
import { stateContext } from '../App';

const SearchesHistory = () => {
    const { containers, handleSearch } = useContext(stateContext);

  return (
    <div className="mt-3 mt-lg-5 pt-5">
      {containers.map((container, ind) => (
        <ul
        key={ind}
          style={{
            display: "inline-flex",
            flexDirection: "row",
            listStyle: "none",
          }}
        >
          <li
            data-testid='searchHistory'
            onClick={handleSearch}
            style={{ cursor: "pointer", border: "1px solid black" }}
            className="rounded px-2"
          >
            {container}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default SearchesHistory