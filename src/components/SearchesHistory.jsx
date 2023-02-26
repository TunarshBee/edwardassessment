import React from 'react'
import { useContext } from 'react';
import { stateContext } from '../App';

const SearchesHistory = () => {
    const { containers, handleSearch } = useContext(stateContext);
    console.log(containers[0])
  return (
    <div className="mt-3 mt-lg-5 pt-5">
      {containers.map((container, ind) => (
        <ul
          style={{
            display: "inline-flex",
            flexDirection: "row",
            listStyle: "none",
          }}
        >
          <li
            key={ind}
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